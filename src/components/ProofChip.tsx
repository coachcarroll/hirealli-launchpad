import { TrendingUp } from "lucide-react";

interface ProofChipProps {
  metric: string;
  label: string;
  variant?: "default" | "success";
}

const ProofChip = ({ metric, label, variant = "default" }: ProofChipProps) => {
  return (
    <div
      className={`group relative inline-flex items-center gap-3 px-5 py-3 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
        variant === "success"
          ? "bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 text-accent hover:border-accent/50 hover:shadow-[0_8px_30px_hsl(var(--accent)/0.2)]"
          : "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 text-primary hover:border-primary/50 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.2)]"
      } backdrop-blur-sm`}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
        variant === "success" 
          ? "bg-accent/20" 
          : "bg-primary/20"
      } group-hover:scale-110 transition-transform duration-300`}>
        <TrendingUp className="w-5 h-5" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-2xl leading-none mb-1">{metric}</span>
        <span className="text-sm opacity-90 leading-tight max-w-[200px]">{label}</span>
      </div>
    </div>
  );
};

export default ProofChip;
