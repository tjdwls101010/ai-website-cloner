import type { LucideIcon } from "lucide-react";

export interface SidebarItem {
  label: string;
  icon: LucideIcon;
  active?: boolean;
}

export interface SuggestionPill {
  label: string;
  icon: LucideIcon;
  active?: boolean;
}

export interface AnswerSection {
  title: string;
  body?: string;
  bullets?: string[];
}
