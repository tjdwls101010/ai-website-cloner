import { PerplexityDiscover } from "@/components/perplexity/PerplexityExplore";
import { PerplexityShell } from "@/components/perplexity/PerplexityShell";

export default function DiscoverPage() {
  return (
    <PerplexityShell active="discover" showThread>
      <PerplexityDiscover />
    </PerplexityShell>
  );
}
