import { PerplexityHome } from "@/components/perplexity/PerplexityHome";
import { PerplexityShell } from "@/components/perplexity/PerplexityShell";

export default function Home() {
  return (
    <PerplexityShell active="home">
      <PerplexityHome />
    </PerplexityShell>
  );
}
