"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Circle,
  Globe2,
  Search,
} from "lucide-react";

const researchSteps = [
  {
    title:
      "Searching for recent AI search trend reports, market summaries, and product updates.",
    state: "closed",
  },
  {
    title:
      "Checking adoption data, AI overview effects, and multimodal search examples.",
    state: "open",
    searches: [
      "AI search trends 2026 conversational queries",
      "AI Overviews click through rate impact",
      "multimodal search adoption examples",
      "generative answer engine optimization strategy",
    ],
    sources: [
      { title: "AI search trends and market signals", domain: "explodone.toolsurf" },
      { title: "Google Trends: AI searches at all-time high", domain: "trends.withgoogle" },
      { title: "Generative search visibility benchmarks", domain: "searchenginejournal" },
    ],
    more: "+10 more",
  },
  {
    title:
      "Comparing source claims and structuring the final answer into trends, impact, and takeaways.",
    state: "closed",
  },
];

export function ResearchProgress() {
  const [expanded, setExpanded] = useState(true);

  return (
    <section className="mb-8 font-sans text-sm text-pplx-quiet">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((current) => !current)}
        className="mb-4 flex h-8 items-center gap-2 rounded-lg pr-2 font-medium text-pplx-quiet transition-colors hover:text-pplx-foreground"
      >
        <span>3 단계 완료</span>
        <ChevronRight
          className={`size-4 transition-transform duration-300 ease-out ${
            expanded ? "rotate-90" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            aria-hidden={!expanded}
            className={`space-y-5 transition-[opacity,transform] duration-300 ease-out ${
              expanded
                ? "translate-y-0 opacity-100"
                : "-translate-y-1 opacity-0"
            }`}
          >
            {researchSteps.map((step, index) => (
              <ResearchStep
                key={step.title}
                isLast={index === researchSteps.length - 1}
                step={step}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ResearchStepProps {
  isLast: boolean;
  step: (typeof researchSteps)[number];
}

function ResearchStep({ isLast, step }: ResearchStepProps) {
  const isOpen = step.state === "open";

  return (
    <div className="grid grid-cols-[22px_1fr] gap-3">
      <div className="relative flex justify-center pt-[7px]">
        <span className="size-2 rounded-full bg-pplx-quiet" />
        {!isLast ? (
          <span className="absolute top-5 h-[calc(100%+20px)] w-px bg-pplx-soft-border" />
        ) : null}
      </div>
      <div>
        <div className="flex min-h-6 items-start justify-between gap-4">
          <p className="leading-6">{step.title}</p>
          {isOpen ? (
            <ChevronDown className="mt-1 size-4 shrink-0" />
          ) : (
            <ChevronRight className="mt-1 size-4 shrink-0" />
          )}
        </div>

        {isOpen ? (
          <div className="mt-3 space-y-2 pb-1">
            {step.searches?.map((item) => (
              <div key={item} className="flex items-center gap-3 leading-6">
                <Search className="size-4 shrink-0" strokeWidth={1.8} />
                <span>{item}</span>
              </div>
            ))}
            <div className="pt-1">
              {step.sources?.map((source) => (
                <div
                  key={source.title}
                  className="flex items-center gap-3 leading-7"
                >
                  <SourceIcon domain={source.domain} />
                  <span className="text-pplx-quiet">{source.title}</span>
                  <span className="text-pplx-muted">{source.domain}</span>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="mt-1 rounded-md text-sm font-medium text-pplx-quiet hover:text-pplx-foreground"
            >
              {step.more}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function SourceIcon({ domain }: { domain: string }) {
  if (domain === "trends.withgoogle") {
    return (
      <span className="grid size-4 shrink-0 place-items-center rounded-full bg-blue-500 text-[10px] font-semibold text-white">
        T
      </span>
    );
  }

  return domain.includes("journal") ? (
    <Circle className="size-4 shrink-0" strokeWidth={1.8} />
  ) : (
    <Globe2 className="size-4 shrink-0" strokeWidth={1.8} />
  );
}
