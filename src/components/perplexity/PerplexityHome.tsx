"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  BriefcaseBusiness,
  ChevronDown,
  Cpu,
  Eye,
  FileText,
  Lightbulb,
  MailCheck,
  Mic,
  Plus,
  Search,
} from "lucide-react";

import { WaveformIcon } from "@/components/icons";
import type { SuggestionPill } from "@/types/perplexity";

const categories = ["Discover", "Finance", "Health", "Academic", "Patents"];

const pills: SuggestionPill[] = [
  { label: "Build a business", icon: BriefcaseBusiness, active: true },
  { label: "Help me learn", icon: Lightbulb },
  { label: "Lead generation", icon: MailCheck },
  { label: "Monitor the situation", icon: Eye },
  { label: "Create a prototype", icon: FileText },
];

const promptRows = [
  "Write a one-page investor pitch",
  "Research my top competitors and break down their strategy",
  "Size the market for my business idea",
];

const rotatingPlaceholders = [
  "무엇이든 물어보세요...",
  "검색 모드 및 바로가기를 보려면 /를 입력하세요",
];

export function PerplexityHome() {
  return (
    <main className="relative flex min-h-svh flex-col bg-pplx-bg">
      <nav className="hidden h-14 items-center justify-center gap-6 text-sm text-pplx-quiet md:flex">
        {categories.map((category) => (
          <Link
            href="#"
            key={category}
            className="transition-colors hover:text-pplx-foreground"
          >
            {category}
          </Link>
        ))}
      </nav>

      <section className="flex flex-1 flex-col items-center px-4 pb-28 pt-[245px] max-md:min-h-[calc(100svh-56px)] max-md:justify-center max-md:pb-[180px] max-md:pt-0">
        <h1 className="hidden text-[48px] font-medium leading-none text-pplx-foreground md:block">
          perplexity
        </h1>
        <h1 className="max-w-[330px] text-center text-[32px] font-medium leading-[1.12] text-pplx-foreground md:hidden">
          What do you want to know?
        </h1>

        <SearchComposer />
        <TryComputerPanel />
      </section>

      <LegalFooter />
    </main>
  );
}

function SearchComposer() {
  const [query, setQuery] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [previousPlaceholder, setPreviousPlaceholder] = useState<string | null>(
    null,
  );
  const activePlaceholder = rotatingPlaceholders[placeholderIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPlaceholderIndex((currentIndex) => {
        setPreviousPlaceholder(rotatingPlaceholders[currentIndex]);
        return (currentIndex + 1) % rotatingPlaceholders.length;
      });
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!previousPlaceholder) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setPreviousPlaceholder(null);
    }, 420);

    return () => window.clearTimeout(timeout);
  }, [previousPlaceholder]);

  return (
    <form
      action="/search/ai-search-trends"
      className="mt-11 hidden w-full max-w-[640px] rounded-2xl border border-pplx-border bg-pplx-card shadow-[0_1px_2px_rgba(0,0,0,0.10)] md:block"
    >
      <label className="sr-only" htmlFor="home-query">
        Ask Perplexity
      </label>
      <div className="relative h-[72px]">
        <input
          id="home-query"
          name="q"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder=""
          autoComplete="off"
          className="relative z-10 h-full w-full bg-transparent px-5 text-base text-pplx-foreground outline-none"
        />
        {!query ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-5 top-0 flex h-full items-center overflow-hidden"
          >
            {previousPlaceholder ? (
              <span
                key={`previous-${previousPlaceholder}`}
                className="absolute left-0 block text-base text-pplx-muted pplx-placeholder-slide-out"
              >
                {previousPlaceholder}
              </span>
            ) : null}
            <span
              key={activePlaceholder}
              className={`absolute left-0 block text-base text-pplx-muted ${
                previousPlaceholder ? "pplx-placeholder-slide-in" : ""
              }`}
            >
              {activePlaceholder}
            </span>
          </div>
        ) : null}
      </div>
      <div className="flex h-[44px] items-center justify-between px-3 pb-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Add files or tools"
            className="flex size-8 items-center justify-center rounded-full text-pplx-quiet hover:bg-pplx-hover"
          >
            <Plus className="size-5" strokeWidth={1.7} />
          </button>
          <button
            type="button"
            className="flex h-8 items-center gap-2 rounded-full bg-pplx-subtle px-3 text-sm text-pplx-foreground hover:bg-pplx-hover"
          >
            <Search className="size-4" />
            Search
            <ChevronDown className="size-3" />
          </button>
          <button
            type="button"
            aria-label="Computer"
            className="grid size-8 place-items-center rounded-full border border-dashed border-pplx-border text-pplx-quiet"
          >
            <Cpu className="size-4" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-8 items-center gap-1 rounded-full px-3 text-sm text-pplx-quiet hover:bg-pplx-hover"
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
            aria-label="Use voice mode"
            className="grid size-8 place-items-center rounded-full bg-pplx-foreground text-pplx-card"
          >
            <WaveformIcon className="size-5" />
          </button>
        </div>
      </div>
    </form>
  );
}

function TryComputerPanel() {
  const [expanded, setExpanded] = useState(true);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <section className="mt-8 hidden w-full max-w-[640px] overflow-hidden rounded-[10px] border border-pplx-soft-border bg-pplx-card md:block">
      <div
        className={`flex h-10 items-center justify-between px-3 text-sm text-pplx-quiet transition-colors duration-200 ${
          expanded ? "border-b border-pplx-soft-border" : ""
        }`}
      >
        <button
          type="button"
          aria-controls="try-computer-content"
          aria-expanded={expanded}
          onClick={toggleExpanded}
          className="flex items-center gap-2"
        >
          <Cpu className="size-4" />
          Try Computer
        </button>
        <button
          type="button"
          aria-controls="try-computer-content"
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse Try Computer" : "Expand Try Computer"}
          onClick={toggleExpanded}
          className="grid size-6 place-items-center rounded-full text-pplx-quiet hover:bg-pplx-hover"
        >
          <ChevronDown
            className={`size-4 transition-transform duration-300 ease-out ${
              expanded ? "rotate-0" : "-rotate-90"
            }`}
          />
        </button>
      </div>
      <div
        id="try-computer-content"
        aria-hidden={!expanded}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`min-h-0 overflow-hidden transition-opacity duration-200 ${
            expanded ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="border-b border-pplx-soft-border px-3 py-3">
            <div className="flex flex-wrap gap-2">
              {pills.map((pill) => {
                const Icon = pill.icon;
                return (
                  <button
                    type="button"
                    key={pill.label}
                    className={`flex h-8 min-w-0 items-center gap-2 rounded-full border border-pplx-border px-3 text-sm text-pplx-foreground ${
                      pill.active ? "bg-pplx-hover" : "bg-pplx-card"
                    }`}
                  >
                    <Icon className="size-4 shrink-0" strokeWidth={1.7} />
                    <span className="truncate">{pill.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="px-3 py-2">
            {promptRows.map((row) => (
              <button
                type="button"
                key={row}
                className="block h-9 w-full rounded-lg px-2 text-left text-sm text-pplx-quiet transition-colors hover:bg-pplx-hover hover:text-pplx-foreground"
              >
                {row}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LegalFooter() {
  return (
    <footer className="absolute bottom-2 left-0 right-0 hidden text-center text-xs leading-5 text-pplx-muted md:block">
      <p>
        Perplexity AI, Inc. · Aravind Srinivas (CEO) · 115 Sansome St Suite 900,
        San Francisco, CA, 94104
      </p>
      <p>
        <a className="underline" href="#">
          +1(510) 270-0840
        </a>{" "}
        ·{" "}
        <a className="underline" href="#">
          support@perplexity.ai
        </a>{" "}
        · Hosted by Amazon Web Services
      </p>
      <p>
        <a className="underline" href="#">
          Provider, Contract, and Cancellation Information
        </a>{" "}
        ·{" "}
        <a className="underline" href="#">
          Terms of Service
        </a>
      </p>
    </footer>
  );
}
