"use client";

import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";
import Link from "next/link";
import {
  Apple,
  Bell,
  ChevronDown,
  ChevronRight,
  CircleUserRound,
  Clock3,
  Columns2,
  Cpu,
  LayoutPanelLeft,
  Menu,
  Plus,
  Settings,
  Shapes,
} from "lucide-react";

import { PerplexityMark } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { SidebarItem } from "@/types/perplexity";
import { CookieNotice } from "./CookieNotice";

const sidebarItems: SidebarItem[] = [
  { label: "New", icon: Plus },
  { label: "Computer", icon: Cpu },
  { label: "Spaces", icon: Shapes },
  { label: "Artifacts", icon: LayoutPanelLeft },
  { label: "Customize", icon: Settings },
  { label: "History", icon: Clock3 },
];

const recentThreads = [
  "한국에서 foreign affairs를 무료 혹은 할인으로 구...",
  "한국에서 foreign affairs를 무료 혹은 할인으로 구...",
  "클로드에 스킬을 업로드할 때 Internal server erro...",
  "`https://traderslab.gitbook.io/primetrading`...",
  "foreign affair의 pdf나 epub을 무료로 다운로드 ...",
  "api 중에서 cape를 받아오려면 뭐가 있지? fredap...",
  "임미애 국회의원에 관한 기사를 프로 정리해줘. 단독...",
  "임미애 국회의원에 관한 기사를 프로 정리해줘. 단독...",
  "gpt api의 RPM (requests per minute) 리밋를 ...",
  "antigravity ide의 터미널에 최근의 기록만이 보여...",
  "google nano-banana-pro는 입력 이미지에 대...",
  "claude에 한국어랑 영어를 입력할 때 각각 토큰수...",
  "nano-banana pro 모델을 사용해 이미지를 생성...",
  "pymu4llm 라이브러리 중에 pdf의 페이지 범위를 ...",
];

const sidebarDisplayLabels: Record<string, string> = {
  New: "신규",
  Computer: "Computer",
  Spaces: "스페이스",
  Artifacts: "아티팩트",
  Customize: "사용자 지정",
  History: "기록",
};

interface PerplexityShellProps {
  children: ReactNode;
  active?: "home" | "conversation";
  showThread?: boolean;
}

export function PerplexityShell({
  children,
  active = "home",
  showThread = false,
}: PerplexityShellProps) {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarWidth = collapsed ? "72px" : "200px";

  return (
    <div
      className="min-h-svh bg-pplx-bg text-pplx-foreground"
      style={{ "--pplx-sidebar-width": sidebarWidth } as CSSProperties}
    >
      <DesktopSidebar
        active={active}
        collapsed={collapsed}
        showThread={showThread}
        onCollapsedChange={setCollapsed}
      />
      <MobileHeader />
      <div className="min-h-svh transition-[padding-left] duration-300 ease-out md:pl-[var(--pplx-sidebar-width)]">
        {children}
      </div>
      <CookieNotice />
    </div>
  );
}

interface DesktopSidebarProps
  extends Pick<PerplexityShellProps, "active" | "showThread"> {
  collapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
}

function DesktopSidebar({
  active,
  collapsed,
  showThread,
  onCollapsedChange,
}: DesktopSidebarProps) {
  const [historyExpanded, setHistoryExpanded] = useState(showThread);

  return (
    <nav
      className={cn(
        "fixed inset-y-0 left-0 z-20 hidden overflow-visible border-r border-pplx-border bg-pplx-sidebar transition-[width] duration-300 ease-out md:flex md:flex-col",
        collapsed ? "w-[72px]" : "w-[200px]",
      )}
    >
      {collapsed ? (
        <div className="group/rail-logo relative flex h-14 items-center justify-center px-2">
          <PerplexityMark className="size-6 text-pplx-foreground transition-opacity duration-150 group-hover/rail-logo:opacity-0" />
          <button
            type="button"
            aria-label="Expand sidebar"
            onClick={() => onCollapsedChange(false)}
            className="absolute left-1/2 top-2 flex size-10 -translate-x-1/2 items-center justify-center rounded-2xl bg-pplx-hover text-pplx-quiet opacity-0 transition-opacity duration-150 group-hover/rail-logo:opacity-100"
          >
            <Columns2 className="size-5" />
          </button>
        </div>
      ) : (
        <div className="flex h-14 items-center justify-between px-2 transition-all duration-300">
          <Link
            href="/"
            aria-label="Perplexity home"
            className="flex size-10 items-center justify-center rounded-xl text-pplx-foreground hover:bg-pplx-hover"
          >
            <PerplexityMark className="size-6" />
          </Link>
          <button
            type="button"
            aria-label="Collapse sidebar"
            onClick={() => onCollapsedChange(true)}
            className="flex size-10 items-center justify-center rounded-xl text-pplx-quiet hover:bg-pplx-hover"
          >
            <Columns2 className="size-4" />
          </button>
        </div>
      )}

      <div className={cn("px-2", collapsed ? "flex flex-col items-center" : "")}>
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const displayLabel = sidebarDisplayLabels[item.label] ?? item.label;
          const isActive =
            (active === "home" && item.label === "New") ||
            (active === "conversation" && item.label === "History");

          if (item.label === "History" && !collapsed) {
            const HistoryToggleIcon = historyExpanded
              ? ChevronDown
              : ChevronRight;

            return (
              <div key={item.label}>
                <button
                  type="button"
                  aria-controls="sidebar-history-list"
                  aria-expanded={historyExpanded}
                  onClick={() => setHistoryExpanded((current) => !current)}
                  className={cn(
                    "group/history-toggle relative flex h-10 w-[184px] items-center gap-3 rounded-xl px-3 text-sm text-pplx-quiet transition-[background-color,color] duration-200 hover:bg-pplx-hover hover:text-pplx-foreground",
                    isActive && !historyExpanded
                      ? "bg-pplx-hover text-pplx-foreground"
                      : "",
                  )}
                >
                  <span className="relative grid size-[18px] place-items-center">
                    <Clock3
                      className="absolute size-[18px] opacity-100 transition-opacity duration-150 group-hover/history-toggle:opacity-0 group-focus-visible/history-toggle:opacity-0"
                      strokeWidth={1.7}
                    />
                    <HistoryToggleIcon
                      className="absolute size-[18px] opacity-0 transition-opacity duration-150 group-hover/history-toggle:opacity-100 group-focus-visible/history-toggle:opacity-100"
                      strokeWidth={1.9}
                    />
                  </span>
                  <span className="truncate">{displayLabel}</span>
                </button>
                <div
                  id="sidebar-history-list"
                  aria-hidden={!historyExpanded}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    historyExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div
                    className={cn(
                      "min-h-0 overflow-hidden transition-opacity duration-200",
                      historyExpanded
                        ? "opacity-100"
                        : "pointer-events-none opacity-0",
                    )}
                  >
                    <div className="space-y-1 px-3 pb-2 pt-2">
                      {recentThreads.map((thread, index) => (
                        <Link
                          href="/search/ai-search-trends"
                          key={`${thread}-${index}`}
                          className="block truncate rounded-md py-1.5 text-xs leading-5 text-pplx-quiet transition-colors hover:text-pplx-foreground"
                        >
                          {thread}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link
              href={item.label === "New" ? "/" : "#"}
              key={item.label}
              title={
                collapsed && item.label !== "New" ? displayLabel : undefined
              }
              className={cn(
                "group/rail-item relative",
                "flex h-10 items-center rounded-xl text-sm text-pplx-quiet transition-[width,background-color,color] duration-300 hover:bg-pplx-hover hover:text-pplx-foreground",
                collapsed ? "w-12 justify-center px-0" : "w-[184px] gap-3 px-3",
                isActive && active === "home"
                  ? "bg-pplx-hover text-pplx-foreground"
                  : "",
              )}
            >
              <Icon className="size-[18px]" strokeWidth={1.7} />
              <span
                className={cn(
                  "truncate transition-[opacity,transform] duration-200",
                  collapsed
                    ? "pointer-events-none w-0 -translate-x-1 opacity-0"
                    : "translate-x-0 opacity-100",
                )}
              >
                {displayLabel}
              </span>
              {collapsed ? (
                <RailFlyout displayLabel={displayLabel} label={item.label} />
              ) : null}
            </Link>
          );
        })}
      </div>

      <div
        className={cn(
          "mt-auto border-t border-pplx-border",
          collapsed ? "flex flex-col items-center gap-2 py-3" : "",
        )}
      >
        {collapsed ? (
          <>
            <button
              type="button"
              aria-label="Upgrade"
              className="grid size-10 place-items-center rounded-xl text-pplx-quiet hover:bg-pplx-hover"
            >
              ↑
            </button>
            <button
              type="button"
              aria-label="Notifications"
              className="relative grid size-10 place-items-center rounded-xl text-pplx-quiet hover:bg-pplx-hover"
            >
              <Bell className="size-5" strokeWidth={1.7} />
              <span className="absolute right-2 top-2 size-2 rounded-full bg-pplx-super" />
            </button>
          </>
        ) : null}
        <button
          type="button"
          className={cn(
            "flex text-sm text-pplx-super transition-all duration-300",
            collapsed
              ? "size-10 items-center justify-center rounded-xl hover:bg-pplx-hover"
              : "h-12 w-full items-center justify-between px-3",
          )}
        >
          <span
            className={cn(
              "flex items-center",
              collapsed ? "gap-0" : "gap-3",
            )}
          >
            <span className="grid size-8 place-items-center rounded-full bg-pplx-super text-white">
              <CircleUserRound className="size-5" />
            </span>
            <span
              className={cn(
                "truncate transition-[opacity,transform] duration-200",
                collapsed
                  ? "pointer-events-none w-0 -translate-x-1 opacity-0"
                  : "translate-x-0 opacity-100",
              )}
            >
              Sign In
            </span>
          </span>
          {!collapsed ? <ChevronRight className="size-4" /> : null}
        </button>
      </div>
    </nav>
  );
}

function RailFlyout({
  displayLabel,
  label,
}: {
  displayLabel: string;
  label: string;
}) {
  if (label === "New") {
    return null;
  }

  if (label === "History") {
    return (
      <div className="pointer-events-none absolute left-[58px] top-0 z-50 w-[320px] rounded-xl border border-pplx-border bg-pplx-card p-4 text-left text-pplx-foreground opacity-0 shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-[opacity,transform] duration-150 group-hover/rail-item:pointer-events-auto group-hover/rail-item:translate-x-0 group-hover/rail-item:opacity-100">
        <h3 className="mb-3 text-sm font-normal text-pplx-quiet">기록</h3>
        <div className="space-y-2.5">
          {recentThreads.slice(0, 11).map((thread, index) => (
            <div
              key={`${thread}-${index}`}
              className="truncate text-sm leading-5 text-pplx-foreground"
            >
              {thread}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (label === "Customize") {
    return (
      <div className="pointer-events-none absolute left-[58px] top-0 z-50 w-[240px] rounded-xl border border-pplx-border bg-pplx-card p-4 text-left opacity-0 shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-[opacity,transform] duration-150 group-hover/rail-item:pointer-events-auto group-hover/rail-item:translate-x-0 group-hover/rail-item:opacity-100">
        <h3 className="mb-3 text-sm font-normal text-pplx-quiet">
          사용자 지정
        </h3>
        <div className="space-y-3 text-base leading-5 text-pplx-foreground">
          <div>커넥터</div>
          <div>스킬</div>
          <div>워크플로</div>
        </div>
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute left-[58px] top-1/2 z-50 -translate-y-1/2 rounded-full bg-pplx-hover px-3.5 py-2 text-sm leading-none text-pplx-foreground opacity-0 shadow-sm transition-opacity duration-150 group-hover/rail-item:opacity-100">
      {displayLabel}
    </div>
  );
}

function MobileHeader() {
  return (
    <header className="flex h-14 items-center gap-1 border-b border-pplx-border px-2 md:hidden">
      <button
        type="button"
        aria-label="Open menu"
        className="flex size-8 items-center justify-center text-pplx-quiet"
      >
        <Menu className="size-7" />
      </button>
      <Link href="/" className="flex shrink-0 items-center gap-1">
        <PerplexityMark className="size-7 text-pplx-super" />
        <span className="text-xl leading-none">perplexity</span>
      </Link>
      <button
        type="button"
        className="ml-auto h-10 shrink-0 rounded-full border border-pplx-border px-2 text-sm"
      >
        Business Info
      </button>
      <button
        type="button"
        className="flex h-10 shrink-0 items-center gap-1 rounded-full bg-pplx-foreground px-2 text-sm text-white"
      >
        <Apple className="size-4 fill-current" />
        Open in App
      </button>
    </header>
  );
}
