import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  Ellipsis,
  Globe2,
  Image as ImageIcon,
  Link2,
  Mic,
  Plus,
  Search,
  Share2,
  Sparkles,
} from "lucide-react";

import { PerplexityMark, WaveformIcon } from "@/components/icons";
import type { AnswerSection } from "@/types/perplexity";
import { ResearchProgress } from "./ResearchProgress";

const query = "What are the latest AI search trends?";

const sections: AnswerSection[] = [
  {
    title: "What is changing",
    bullets: [
      "Queries are getting more complex and specific, with users asking full questions rather than short keyword strings.",
      "AI Overviews and similar answer engines are appearing for more searches, especially comparisons, instructional queries, and information-dense topics.",
      "Click-through rates are falling when AI summaries appear, because users often get what they need without opening a result.",
      "Multimodal search is growing, combining text, images, voice, and video into a single experience.",
      "AI search is increasingly structured, favoring tables, bullets, and clearly segmented content that models can synthesize easily.",
    ],
  },
  {
    title: "What people search for",
    body: "Google’s trend data shows heavy interest in practical “AI for _” use cases, with top themes including coding, writing, math, image generation, and essay writing. It also highlights that AI and image-generation searches are at an all-time high, reflecting broader adoption beyond text-only assistants.",
  },
  {
    title: "Why it matters",
    body: "For brands and publishers, the main shift is from ranking to being cited or synthesized inside AI answers. That means content structure, clarity, and authority matter more than ever, because AI systems are deciding what to quote and summarize.",
  },
  {
    title: "Useful takeaway",
    body: "If you’re optimizing content or products for AI search, focus on concise answers, strong topical coverage, clear headings, and formats that are easy to extract, such as FAQs, lists, and comparison tables.",
  },
];

const followUps = [
  "How should marketers adapt to AI search trends",
  "What caused the drop in click-through rates for AI search",
  "Top strategies for visibility in generative AI overviews",
  "Impact of multimodal inputs on search behavior",
  "Predictions for AI search market share in 2027",
];

export function PerplexityConversation() {
  return (
    <main className="relative min-h-svh bg-pplx-bg pb-36">
      <ConversationTopBar />
      <article className="mx-auto w-full max-w-[720px] px-5 pb-48 pt-10 md:px-0 md:pt-8">
        <div className="mb-10 flex justify-end">
          <div className="rounded-2xl bg-pplx-hover px-4 py-3 text-base text-pplx-foreground">
            {query}
          </div>
        </div>

        <ResearchProgress />
        <AnswerContent />
        <ActionRow />
        <FollowUpList />
      </article>
      <FollowUpComposer />
    </main>
  );
}

function ConversationTopBar() {
  return (
    <header className="sticky top-0 z-10 hidden h-14 items-center border-b border-pplx-soft-border bg-pplx-bg/95 backdrop-blur md:flex">
      <nav className="mx-auto flex w-full max-w-[980px] items-center justify-between">
        <div className="flex h-14 items-center gap-6">
          <button
            type="button"
            className="flex h-14 items-center gap-2 border-b-2 border-pplx-foreground px-1 text-sm font-medium"
          >
            <PerplexityMark className="size-5" />
            Answer
          </button>
          <button
            type="button"
            className="flex h-14 items-center gap-2 px-1 text-sm text-pplx-quiet"
          >
            <Globe2 className="size-4" />
            Links
          </button>
          <button
            type="button"
            className="flex h-14 items-center gap-2 px-1 text-sm text-pplx-quiet"
          >
            <ImageIcon className="size-4" />
            Images
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Thread actions"
            className="grid size-9 place-items-center rounded-full text-pplx-quiet hover:bg-pplx-hover"
          >
            <Ellipsis className="size-4" />
          </button>
          <button
            type="button"
            className="flex h-8 items-center gap-2 rounded-lg bg-pplx-foreground px-4 text-sm font-medium text-pplx-card"
          >
            <Share2 className="size-4" />
            Share
          </button>
        </div>
      </nav>
    </header>
  );
}

function AnswerContent() {
  return (
    <div className="answer-copy text-pplx-foreground">
      <p>
        The latest AI search trends are: longer, more conversational queries;
        rising use of multimodal search; and more answers being delivered
        directly in AI-generated summaries instead of as a list of links. Search
        behavior is also shifting from “what is” to “how do I use it,” especially
        for tasks like coding, writing, math, and image generation.{" "}
        <SourceBadge label="explodone.toolsurf +2" />
      </p>

      {sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.body ? (
            <p>
              {section.body}{" "}
              <SourceBadge
                label={
                  section.title === "What people search for"
                    ? "trends.withgoogle +1"
                    : "explodone.toolsurf"
                }
              />
            </p>
          ) : null}
          {section.bullets ? (
            <ul>
              {section.bullets.map((bullet) => (
                <li key={bullet}>
                  {bullet} <SourceBadge label="explodone.toolsurf" />
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}

function SourceBadge({ label }: { label: string }) {
  const sourceCount = label.includes("+2") ? "3 sources" : label.includes("+1") ? "2 sources" : "1 source";
  const sourceTitle = label.includes("trends")
    ? "Google Trends: AI searches at all-time high"
    : label.includes("withgoogle")
      ? "Google Trends: AI searches at all-time high"
      : "AI search trends and market signals";
  const sourceDomain = label.replace(/\s\+\d+$/, "");

  return (
    <span className="group/source relative inline-flex translate-y-[-1px] font-sans">
      <span
        tabIndex={0}
        className="inline-flex cursor-default rounded-md bg-pplx-hover px-1.5 py-0.5 text-[10px] leading-4 text-pplx-quiet outline-none transition-colors group-hover/source:bg-pplx-soft-border group-focus-within/source:bg-pplx-soft-border"
      >
        {label}
      </span>
      <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 hidden w-[380px] -translate-x-1/2 rounded-xl border border-pplx-border bg-pplx-card text-left text-pplx-foreground opacity-0 shadow-[0_10px_28px_rgba(0,0,0,0.14)] transition-opacity duration-150 group-hover/source:block group-hover/source:opacity-100 group-focus-within/source:block group-focus-within/source:opacity-100">
        <span className="flex h-12 items-center justify-between border-b border-pplx-soft-border px-4 text-sm text-pplx-quiet">
          <span className="flex items-center gap-3">
            <ChevronLeft className="size-4" />
            <span>1/2</span>
            <ChevronRight className="size-4" />
          </span>
          <span className="flex items-center gap-2">
            <span className="grid size-5 place-items-center rounded-full bg-blue-500 text-xs font-semibold text-white">
              g
            </span>
            <span>{sourceCount}</span>
          </span>
        </span>
        <span className="block p-4">
          <span className="mb-3 flex items-center gap-2 text-sm text-pplx-quiet">
            <span className="grid size-5 place-items-center rounded-full bg-blue-500 text-xs font-semibold text-white">
              g
            </span>
            <span>{sourceDomain}</span>
          </span>
          <span className="mb-2 block text-base font-semibold leading-6 text-pplx-foreground">
            {sourceTitle}
          </span>
          <span className="block text-sm leading-6 text-pplx-quiet">
            A concise source preview used by the answer engine while composing
            the response. It highlights trend data, adoption signals, and
            practical takeaways from the cited page.
          </span>
        </span>
        <span className="absolute bottom-3 right-3 flex overflow-hidden rounded-lg border border-pplx-border bg-pplx-card">
          <span className="grid size-9 place-items-center border-r border-pplx-border text-pplx-quiet">
            <Copy className="size-4" />
          </span>
          <span className="grid size-9 place-items-center text-pplx-quiet">
            <Download className="size-4" />
          </span>
        </span>
      </span>
    </span>
  );
}

function ActionRow() {
  return (
    <div className="mt-10 flex items-center justify-between text-pplx-quiet">
      <div className="flex gap-1">
        {[Share2, Download, Link2, Sparkles].map((Icon, index) => (
          <button
            type="button"
            aria-label={`Action ${index + 1}`}
            key={`conversation-action-${index}`}
            className="grid size-8 place-items-center rounded-full hover:bg-pplx-hover"
          >
            <Icon className="size-4" />
          </button>
        ))}
        <button
          type="button"
          className="ml-1 h-8 rounded-full bg-pplx-hover px-4 text-sm"
        >
          10 sources
        </button>
      </div>
      <div className="hidden gap-1 md:flex">
        <button type="button" className="grid size-8 place-items-center rounded-full hover:bg-pplx-hover">
          ↑
        </button>
        <button type="button" className="grid size-8 place-items-center rounded-full hover:bg-pplx-hover">
          ↓
        </button>
        <button type="button" className="grid size-8 place-items-center rounded-full hover:bg-pplx-hover">
          <Ellipsis className="size-4" />
        </button>
      </div>
    </div>
  );
}

function FollowUpList() {
  return (
    <section className="mt-12">
      <h2 className="mb-3 font-sans text-base font-medium">Follow-ups</h2>
      <div className="divide-y divide-pplx-soft-border rounded-xl border border-pplx-soft-border bg-pplx-card">
        {followUps.map((item) => (
          <button
            type="button"
            key={item}
            className="flex h-10 w-full items-center justify-between px-4 text-left text-sm hover:bg-pplx-hover"
          >
            {item}
            <span className="text-pplx-muted">›</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function FollowUpComposer() {
  return (
    <form
      action="/search/ai-search-trends"
      className="fixed bottom-4 left-4 right-4 z-20 mx-auto max-w-[720px] rounded-2xl border border-pplx-border bg-pplx-card shadow-[0_2px_10px_rgba(0,0,0,0.10)] transition-[left] duration-300 ease-out md:left-[var(--pplx-sidebar-width)]"
    >
      <label className="sr-only" htmlFor="follow-up">
        Ask a follow-up
      </label>
      <input
        id="follow-up"
        name="q"
        placeholder="Ask a follow-up"
        className="h-12 w-full rounded-t-2xl bg-transparent px-5 text-base outline-none placeholder:text-pplx-muted"
      />
      <div className="flex h-11 items-center justify-between px-3 pb-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Add files or tools"
            className="grid size-8 place-items-center rounded-full text-pplx-quiet hover:bg-pplx-hover"
          >
            <Plus className="size-5" />
          </button>
          <button
            type="button"
            className="flex h-8 items-center gap-2 rounded-full bg-pplx-subtle px-3 text-sm text-pplx-foreground"
          >
            <Search className="size-4" />
            Search
            <ChevronDown className="size-3" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden h-8 items-center gap-1 rounded-full px-3 text-sm text-pplx-quiet hover:bg-pplx-hover md:flex"
          >
            Model
            <ChevronDown className="size-3" />
          </button>
          <button
            type="button"
            aria-label="Dictation"
            className="grid size-8 place-items-center rounded-full text-pplx-quiet hover:bg-pplx-hover"
          >
            <Mic className="size-4" />
          </button>
          <button
            type="submit"
            aria-label="Submit"
            className="grid size-8 place-items-center rounded-full bg-pplx-foreground text-pplx-card"
          >
            <WaveformIcon className="size-5" />
          </button>
        </div>
      </div>
    </form>
  );
}
