import { PerplexityFinance } from "@/components/perplexity/PerplexityExplore";
import { PerplexityShell } from "@/components/perplexity/PerplexityShell";

export default function FinancePredictionsPage() {
  return (
    <PerplexityShell active="finance" showThread>
      <PerplexityFinance view="predictions" />
    </PerplexityShell>
  );
}
