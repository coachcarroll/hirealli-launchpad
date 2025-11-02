-- Create storage bucket for Alli industry images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('alli-images', 'alli-images', true)
ON CONFLICT (id) DO NOTHING;

-- Create policy to allow public read access
CREATE POLICY "Public Access for Alli Images"
ON storage.objects FOR SELECT
USING (bucket_id = 'alli-images');

-- Create policy to allow authenticated users to upload
CREATE POLICY "Authenticated users can upload Alli Images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'alli-images' AND auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update
CREATE POLICY "Authenticated users can update Alli Images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'alli-images' AND auth.role() = 'authenticated');