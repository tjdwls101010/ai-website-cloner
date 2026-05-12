# PerplexityHome Specification

## Overview
- **Target file:** `src/components/perplexity/PerplexityHome.tsx`
- **Screenshot:** `docs/design-references/perplexity.ai/home-desktop-1440.png`
- **Interaction model:** static plus form submit to conversation route

## DOM Structure
- Home content column
  - Desktop category nav
  - Desktop wordmark `perplexity`
  - Search composer
    - Animated placeholder text that changes every 5 seconds with a vertical slide
    - Tool row: plus, Search pill, Computer icon pill, Model, mic, voice
  - Try Computer panel
    - Header
    - Wrapping pill rail
    - Three prompt rows
  - Desktop legal footer

## Computed Styles
- Main background: `rgb(252, 252, 249)`
- Desktop wordmark font size: ~`48px`, dark `rgb(39, 37, 30)`
- Composer x/y/size in 1440 capture: `x=495`, `y=400`, `w=640`, `h=118`
- Composer background: `rgb(253, 251, 250)`
- Composer border: `1px solid rgba(39, 26, 0, 0.14)`
- Composer radius: `16px`
- Composer shadow: subtle bottom shadow
- Placeholder font: `16px`, color `rgba(39, 37, 30, 0.5)`
- Tool buttons: height `32px`, radius `9999px`
- Try Computer panel: width `640px`, radius `10px`, border `rgba(39, 26, 0, 0.07)`
- Try Computer pills wrap to additional rows instead of clipping at the right edge.

## States & Behaviors
- Submit via Enter/button sends user to `/search/ai-search-trends`.
- Suggestion pills and rows have hover subtle sand background.
- Home composer placeholder rotates every 5 seconds; previous text slides up and out while the next text enters from below. The animated overlay hides once the user types.
- Try Computer header and chevron toggle expand/collapse. Content height transitions smoothly with a 300ms grid-row animation and the chevron rotates.

## Text Content
- Category nav: Discover, Finance, Health, Academic, Patents
- Prompt placeholder cycle: `무엇이든 물어보세요...`; `검색 모드 및 바로가기를 보려면 /를 입력하세요`
- Pills: Build a business, Help me learn, Lead generation, Monitor the situation, Create a prototype, Recruiting, Organize my life
- Rows: Write a one-page investor pitch; Research my top competitors and break down their strategy; Size the market for my business idea

## Responsive Behavior
- Desktop: centered wordmark/composer at top half of viewport.
- Mobile: header visible, hero question text `What do you want to know?` centered; composer sits near bottom but may be covered by cookie card in first-visit capture.
