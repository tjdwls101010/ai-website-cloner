import { PerplexityFinance } from "@/components/perplexity/PerplexityExplore";
import { PerplexityShell } from "@/components/perplexity/PerplexityShell";

export default function FinancePoliticiansPage() {
  return (
    <PerplexityShell active="finance" showThread>
      <PerplexityFinance view="politicians" />
    </PerplexityShell>
  );
}
