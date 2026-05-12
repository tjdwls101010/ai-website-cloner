import { PerplexityFinance } from "@/components/perplexity/PerplexityExplore";
import { PerplexityShell } from "@/components/perplexity/PerplexityShell";

export default function FinanceEsusdPage() {
  return (
    <PerplexityShell active="finance" showThread>
      <PerplexityFinance view="asset" />
    </PerplexityShell>
  );
}
