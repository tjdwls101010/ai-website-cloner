import { PerplexityAcademic } from "@/components/perplexity/PerplexityExplore";
import { PerplexityShell } from "@/components/perplexity/PerplexityShell";

export default function AcademicPage() {
  return (
    <PerplexityShell active="academic" showThread>
      <PerplexityAcademic />
    </PerplexityShell>
  );
}
