# PerplexityShell Specification

## Overview
- **Target file:** `src/components/perplexity/PerplexityShell.tsx`
- **Screenshots:** `docs/design-references/perplexity.ai/home-desktop-1440.png`, `docs/design-references/perplexity.ai/home-mobile-390.png`
- **Interaction model:** static with hover states and route highlighting

## DOM Structure
- Root shell
  - Desktop sidebar
    - Logo row with mark and collapse button
    - Navigation list: New, Computer, Spaces, Artifacts, Customize, History
    - Collapsible History section with recent thread links when sidebar is expanded
    - Sign In footer row
  - Mobile header
    - Menu icon
    - Teal Perplexity mark and wordmark
    - Business Info pill
    - Open in App pill
  - Main slot
  - Cookie notice

## Computed Styles
- Sidebar width: `200px`
- Sidebar background: `rgba(39, 26, 0, 0.035)`
- Sidebar item width: `184px`
- Sidebar item height: `40px`
- Sidebar item radius: `12px`
- Sidebar text color: `rgb(39, 37, 30)`
- Quiet text color: `rgba(39, 37, 30, 0.65)`
- Sign In row: bottom fixed within sidebar, height `48px`
- Mobile header height: approximately `56px`, bottom border `rgba(39, 26, 0, 0.07)`

## States & Behaviors
- Hover sidebar item: background `rgba(39, 26, 0, 0.07)`.
- Active item: background `rgba(39, 26, 0, 0.07)`.
- Collapse button toggles desktop sidebar between expanded `200px` and rail `72px`.
- Rail state keeps icon buttons visible, hides labels/history text, and moves main content padding to `72px`.
- In rail state, hovering the top logo reveals only an expand-sidebar button centered in the same slot.
- In rail state, hovering each nav icon reveals contextual content except `New`, which has no tooltip. History shows a recent-thread flyout and Customize shows Connectors, Skills, Workflows.
- In expanded sidebar state, History is an inline toggle. The row shows the clock icon by default; on hover/focus the icon crossfades to a right chevron when collapsed or a down chevron when expanded. The list opens/closes with a 300ms grid-row animation.
- Width and main padding animate over 300ms with ease-out timing.
- Mobile sidebar is hidden and mobile header is visible below `768px`.

## Assets
- Perplexity mark: custom inline SVG component in `src/components/icons.tsx`.

## Responsive Behavior
- Desktop: `md:flex` sidebar, main offset with `md:pl-[200px]`.
- Mobile: no sidebar, top bar fixed in normal flow, main content full-width.
