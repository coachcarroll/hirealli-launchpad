import { TrendingUp } from "lucide-react";

interface ProofChipProps {
  metric: string;
  label: string;
  variant?: "default" | "success";
}

const ProofChip = ({ metric, label, variant = "default" }: ProofChipProps) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
        variant === "success"
          ? "bg-accent/10 border-accent/20 text-accent"
          : "bg-primary/10 border-primary/20 text-primary"
      } backdrop-blur-sm`}
    >
      <TrendingUp className="w-4 h-4" />
      <div className="flex items-baseline gap-1">
        <span className="font-bold text-lg">{metric}</span>
        <span className="text-xs opacity-80">{label}</span>
      </div>
    </div>
  );
};

export default ProofChip;
