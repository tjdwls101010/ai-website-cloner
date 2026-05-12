import { PerplexityFinance } from "@/components/perplexity/PerplexityExplore";
import { PerplexityShell } from "@/components/perplexity/PerplexityShell";

export default function FinancePage() {
  return (
    <PerplexityShell active="finance" showThread>
      <PerplexityFinance view="market" />
    </PerplexityShell>
  );
}
