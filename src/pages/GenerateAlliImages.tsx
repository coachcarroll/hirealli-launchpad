import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Download } from 'lucide-react';
import alliReference from '@/assets/alli-reference.jpg';

const industries = [
  { key: 'accounting', description: 'professional accountant with glasses and business attire' },
  { key: 'architecture', description: 'architect with blueprints and modern professional attire' },
  { key: 'consulting', description: 'business consultant in executive attire' },
  { key: 'electrical', description: 'electrician with safety gear and professional uniform' },
  { key: 'financial', description: 'financial planner in professional business attire' },
  { key: 'hvac', description: 'HVAC technician with tools and branded uniform' },
  { key: 'remodeling', description: 'home remodeling contractor with hard hat and tools' },
  { key: 'hr', description: 'HR professional in modern business attire' },
  { key: 'it', description: 'IT support specialist with headset and tech-focused attire' },
  { key: 'landscaping', description: 'landscaper with gardening tools and outdoor work attire' },
  { key: 'legal', description: 'lawyer in professional suit' },
  { key: 'marketing', description: 'marketing professional in creative business casual attire' },
  { key: 'pest', description: 'pest control specialist with safety equipment and uniform' },
  { key: 'plumbing', description: 'plumber with tools and professional work uniform' },
  { key: 'roofing', description: 'roofing contractor with hard hat and safety gear' },
  { key: 'cleaning', description: 'professional cleaner with cleaning supplies and uniform' },
];

const GenerateAlliImages = () => {
  const { toast } = useToast();
  const [generating, setGenerating] = useState<string | null>(null);
  const [images, setImages] = useState<Record<string, string>>({});
  const [referenceImageData, setReferenceImageData] = useState<string>('');

  useEffect(() => {
    // Convert the reference image to base64
    const loadReferenceImage = async () => {
      const response = await fetch(alliReference);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = () => {
        setReferenceImageData(reader.result as string);
      };
      reader.readAsDataURL(blob);
    };
    loadReferenceImage();
  }, []);

  // Load previously generated images from storage
  useEffect(() => {
    const loadImages = async () => {
      try {
        const { data: files } = await supabase.storage
          .from('alli-images')
          .list('', { limit: 100 });

        if (files) {
          const imageUrls: Record<string, string> = {};
          for (const file of files) {
            const industryKey = file.name.replace('.png', '');
            const { data } = supabase.storage
              .from('alli-images')
              .getPublicUrl(file.name);
            imageUrls[industryKey] = data.publicUrl;
          }
          setImages(imageUrls);
        }
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };
    loadImages();
  }, []);

  const generateImage = async (industry: typeof industries[0]) => {
    if (!referenceImageData) {
      toast({
        title: "Loading Reference",
        description: "Please wait for reference image to load...",
        variant: "destructive",
      });
      return;
    }

    setGenerating(industry.key);
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-alli-image', {
        body: { 
          industry: industry.key,
          description: industry.description,
          referenceImage: referenceImageData
        }
      });

      if (error) throw error;

      if (data?.imageUrl) {
        // Convert base64 to blob and upload to storage
        const base64Data = data.imageUrl.split(',')[1];
        const blob = await fetch(`data:image/png;base64,${base64Data}`).then(r => r.blob());
        
        const { error: uploadError } = await supabase.storage
          .from('alli-images')
          .upload(`${industry.key}.png`, blob, {
            upsert: true,
            contentType: 'image/png'
          });

        if (uploadError) throw uploadError;

        // Get public URL
        const { data: urlData } = supabase.storage
          .from('alli-images')
          .getPublicUrl(`${industry.key}.png`);

        setImages(prev => ({ ...prev, [industry.key]: urlData.publicUrl }));
        
        toast({
          title: "Image Generated & Saved!",
          description: `Alli as ${industry.description}`,
        });
      }
    } catch (error) {
      console.error('Error generating image:', error);
      toast({
        title: "Generation Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setGenerating(null);
    }
  };

  const generateAll = async () => {
    for (const industry of industries) {
      await generateImage(industry);
      // Add a small delay between generations to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  };

  const downloadImage = (imageUrl: string, industryKey: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `alli-${industryKey}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Generate Alli Industry Images</h1>
          <p className="text-muted-foreground mb-4">
            Generate AI images of Alli dressed for different industries
          </p>
          <Button 
            onClick={generateAll}
            disabled={generating !== null}
            size="lg"
          >
            {generating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Generate All Images
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Card key={industry.key}>
              <CardHeader>
                <CardTitle className="text-lg capitalize">{industry.key}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{industry.description}</p>
                
                {images[industry.key] && (
                  <div className="space-y-2">
                    <img 
                      src={images[industry.key]} 
                      alt={`Alli as ${industry.description}`}
                      className="w-full rounded-lg"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => downloadImage(images[industry.key], industry.key)}
                      className="w-full"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                )}

                <Button 
                  onClick={() => generateImage(industry)}
                  disabled={generating !== null}
                  variant={images[industry.key] ? "outline" : "default"}
                  className="w-full"
                >
                  {generating === industry.key ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : images[industry.key] ? (
                    'Regenerate'
                  ) : (
                    'Generate Image'
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenerateAlliImages;
