import { PerplexityDiscoverDetail } from "@/components/perplexity/PerplexityExplore";
import { PerplexityShell } from "@/components/perplexity/PerplexityShell";

interface DiscoverDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DiscoverDetailPage({
  params,
}: DiscoverDetailPageProps) {
  const { slug } = await params;

  return (
    <PerplexityShell active="discover">
      <PerplexityDiscoverDetail slug={slug} />
    </PerplexityShell>
  );
}
