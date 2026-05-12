import { PerplexityFinance } from "@/components/perplexity/PerplexityExplore";
import { PerplexityShell } from "@/components/perplexity/PerplexityShell";

export default function FinanceEarningsPage() {
  return (
    <PerplexityShell active="finance" showThread>
      <PerplexityFinance view="earnings" />
    </PerplexityShell>
  );
}
