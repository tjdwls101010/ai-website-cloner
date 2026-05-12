# PerplexityConversation Specification

## Overview
- **Target file:** `src/components/perplexity/PerplexityConversation.tsx`
- **Screenshot:** `docs/design-references/perplexity.ai/conversation-desktop-1440.png`
- **Interaction model:** static answer view with sticky follow-up composer

## DOM Structure
- Conversation main
  - Top tab bar
  - Query chip
  - Research progress timeline
    - Collapsible header: `3 단계 완료`
    - Three gathered-evidence steps
    - Expanded middle step with search queries and source rows
  - Answer article
    - Lead paragraph
    - Section headings and bullets
    - Source badges
    - Action row
    - Follow-up suggestion list
  - Fixed follow-up composer

## Computed Styles
- Main starts after sidebar: `x=200`, width `1240px`
- Top bar height: `56px`, bottom border subtle sand
- Active tab: `Answer`, border-bottom dark
- Share button: dark pill, height `32px`, radius `8px`
- Query chip: pale sand background, radius `16px`, padding `12px`
- Research progress: quiet sans text, small bullet timeline, left guide line, chevron controls.
- Answer column: x≈`455`, width≈`720px`
- Answer body: dark text, serif-like rendering, ~`19px`, line height ~`1.45`
- Source badges: pale sand rounded tags, font `10-11px`
- Source badge hover/focus: white source preview popover with pagination row, source count, domain, title, excerpt, and copy/download controls.
- Follow-up composer: x≈`460`, y≈`890`, width≈`720px`, min height `94px`

## States & Behaviors
- Tabs are visible only as static state. Answer is selected.
- Research progress can be expanded and collapsed by clicking the `3 단계 완료` header. The content animates with a 300ms height, opacity, and slight vertical translation transition; the chevron rotates during the same duration.
- Follow-up composer is sticky/fixed near bottom desktop.
- Conversation content scrolls underneath the top tab bar and composer.

## Text Content
- Query: `What are the latest AI search trends?`
- Uses the captured Perplexity answer text from `docs/research/perplexity.ai/conversation-extraction.json`.
- Follow-ups:
  - How should marketers adapt to AI search trends
  - What caused the drop in click-through rates for AI search
  - Top strategies for visibility in generative AI overviews
  - Impact of multimodal inputs on search behavior
  - Predictions for AI search market share in 2027

## Responsive Behavior
- Desktop: answer column centered inside main pane.
- Mobile: one-column layout; top mobile header remains; answer content uses narrower padding and composer becomes bottom aligned.
