import { PerplexityConversation } from "@/components/perplexity/PerplexityConversation";
import { PerplexityShell } from "@/components/perplexity/PerplexityShell";

export default function SearchPage() {
  return (
    <PerplexityShell active="conversation" showThread>
      <PerplexityConversation />
    </PerplexityShell>
  );
}
