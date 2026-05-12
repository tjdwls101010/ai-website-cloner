/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Bookmark,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Copy,
  Cpu,
  Flame,
  Heart,
  Link2,
  MoreHorizontal,
  Search,
  Share2,
  Sparkles,
  Star,
  X,
} from "lucide-react";

import { PerplexityMark, WaveformIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type DiscoverStory = {
  title: string;
  summary: string;
  sourceCount: string;
  time: string;
  image: string;
  layout?: "hero" | "wide" | "card";
};

type FinanceView = "market" | "predictions" | "politicians" | "earnings" | "asset";

const discoverStories: DiscoverStory[] = [
  {
    title:
      "이란 전쟁 여파로 마진 압박 심화...베이징의 지시에도 중국 '티팟' 정유사들 생산량 대폭 감축",
    summary:
      "산둥성 독립 정유사들이 정부 지침을 무시하고 연료 생산을 줄이고 있다. 고유가와 수요 부진이 겹치며 손실이 눈덩이처럼 불어나고 있는 탓이다.",
    sourceCount: "소스 29개",
    time: "게시됨 2시간 전",
    image: "/images/perplexity/discover-hero-refinery.png",
    layout: "hero",
  },
  {
    title: "구글, AI가 개발한 최초의 제로데이 익스플로잇 차단",
    summary:
      "보안 연구팀이 AI가 발견한 취약점을 실제 공격으로 이어지기 전에 차단했다고 밝혔습니다.",
    sourceCount: "소스 75개",
    time: "게시됨 1시간 전",
    image: "/images/perplexity/discover-google-ai.png",
  },
  {
    title: "골드만삭스, 한국 'AI 초대형 흑자' 전망...코스피 목표치 9,000으로 상향",
    summary:
      "반도체와 전력 인프라 수요가 한국 증시의 장기 프리미엄을 높일 수 있다는 분석입니다.",
    sourceCount: "소스 26개",
    time: "게시됨 3시간 전",
    image: "/images/perplexity/discover-lg-chip.png",
  },
  {
    title: "AI 모델들, 어떤 직업을 대체할지 의견 불일치 — NBER 연구 결과",
    summary:
      "연구진은 모델별 위험도 평가가 크게 달라 정책 활용에는 신중함이 필요하다고 봤습니다.",
    sourceCount: "소스 15개",
    time: "게시됨 5시간 전",
    image: "/images/perplexity/discover-ai-models.png",
  },
  {
    title: "한국 채권 금리, 금리 인상 우려로 2026년 최고치 경신",
    summary:
      "3년물 국채 금리가 2023년 말 이후 처음으로 3.6%를 돌파한 가운데, 한국은행 당국자들이 성장보다 물가 안정을 우선시해야 한다는 신호를 보냈다.",
    sourceCount: "소스 29개",
    time: "게시됨 3시간 전",
    image: "/images/perplexity/discover-korea-bank.png",
    layout: "wide",
  },
  {
    title: "한국, 향후 5년간 AI·반도체에 50조 원 투자 공약",
    summary:
      "정부가 AI 반도체 스타트업과 모델 기업을 위한 대규모 투자 계획을 내놓으며 산업 육성 속도를 높이고 있습니다.",
    sourceCount: "소스 15개",
    time: "게시됨 3시간 전",
    image:
      "https://pplx-res.cloudinary.com/image/fetch/s--0w3GRVl4--/t_limit/https://image.cnbcfm.com/api/v1/image/108239556-1765347648949-gettyimages-2250196100-AFP_87HG6CR.jpeg%3Fv%3D1767010222",
    layout: "wide",
  },
  {
    title: "대규모 엔화 방어 개입에도 일본 외환보유액 4월 증가",
    summary:
      "시장 개입 비용보다 평가 이익이 더 크게 반영되며 외환보유액 지표가 상승했습니다.",
    sourceCount: "소스 44개",
    time: "게시됨 4시간 전",
    image:
      "https://pplx-res.cloudinary.com/image/upload/t_limit/v1778547645/url_uploads/1200x800_qvdcj6.jpg",
  },
  {
    title: "Tether, 온디바이스 AI 및 결제 도구 대상 한도 없는 개발자 그랜트 출시",
    summary:
      "스테이블코인 결제와 로컬 AI 앱을 결합하는 개발 생태계를 키우겠다는 계획입니다.",
    sourceCount: "소스 15개",
    time: "게시됨 6시간 전",
    image:
      "https://pplx-res.cloudinary.com/image/fetch/s--k9tdakzg--/t_limit/https://img.freepik.com/premium-vector/official-logo-tether-usdt-stable-crypto-coin_594726-38.jpg",
  },
  {
    title: "새로운 AI 모델, 세포가 운명을 결정하는 방식 예측",
    summary:
      "줄기세포 연구자들이 세포 분화 경로를 더 일찍 예측할 수 있는 모델을 공개했습니다.",
    sourceCount: "소스 17개",
    time: "게시됨 7시간 전",
    image:
      "https://pplx-res.cloudinary.com/image/fetch/s--XU0a0kK6--/t_limit/https://www.genengnews.com/wp-content/uploads/2026/03/Getty_1292821244_EmbryonicStemCells.jpg",
  },
  {
    title: "한국, 쿠팡 개인정보 유출 조사 마무리…6월 중 제재 결정 전망",
    summary:
      "개인정보보호위원회가 조사를 마무리하고 과징금과 시정명령 수위를 검토하고 있습니다.",
    sourceCount: "소스 26개",
    time: "게시됨 12시간 전",
    image:
      "https://pplx-res.cloudinary.com/image/fetch/s--0w3GRVl4--/t_limit/https://image.cnbcfm.com/api/v1/image/108239556-1765347648949-gettyimages-2250196100-AFP_87HG6CR.jpeg%3Fv%3D1767010222",
  },
  {
    title: "《Lies of P》 개발사, AI 아티스트 채용해 게임 아트 제작 나서",
    summary:
      "게임 제작 공정에 생성형 AI를 도입하려는 국내 스튜디오들의 실험이 확대되고 있습니다.",
    sourceCount: "소스 27개",
    time: "게시됨 17시간 전",
    image:
      "https://pplx-res.cloudinary.com/image/fetch/s--tW2zztfm--/t_limit/https://cdna.artstation.com/p/assets/images/images/083/219/408/large/bae-liesofp-bae-02-01.jpg%3F1735208973",
  },
];

const academicCards = [
  {
    title: "Technology and computer science",
    tone: "from-[#174f85] via-[#a56f32] to-[#d8b968]",
    image: "/images/perplexity/academic-tech.png",
  },
  {
    title: "Political science and economics",
    tone: "from-[#5b351c] via-[#9a6024] to-[#c46f2e]",
    image: "/images/perplexity/academic-politics.png",
  },
  {
    title: "Finance",
    tone: "from-[#1d3c3d] via-[#946323] to-[#d58835]",
    image: "/images/perplexity/academic-finance.png",
  },
  {
    title: "Health and wellness",
    tone: "from-[#536b52] via-[#b39562] to-[#e0d6b9]",
  },
  {
    title: "Arts, culture, and humanities",
    tone: "from-[#4b3d78] via-[#b15a6a] to-[#efc56c]",
  },
  {
    title: "Natural sciences",
    tone: "from-[#0f5f66] via-[#527d54] to-[#d2b15a]",
  },
];

const stockAssets = [
  { name: "S&P Futures", value: "US$7,418.00", change: "0.25%", up: true },
  { name: "NASDAQ Fut.", value: "US$29,217.00", change: "0.70%", up: true },
  { name: "Dow Futures", value: "US$49,805.00", change: "0.03%", up: false },
  { name: "VIX", value: "18.69", change: "8.73%", up: false },
];

const marketNews = [
  "Crude Oil Surges +3.21% to $101.22 as US-Iran Ceasefire Hangs by a Thread",
  "US CPI Data in Focus as Iran War Fuels Inflation Surge",
  "Bitcoin Falls -1.20% to $80,742 Amid Bearish Analyst Warnings",
  "EUR/USD Slips -0.39% to $1.17 as Dollar Holds on CPI Anticipation",
  "Wall Street Futures Edge Higher Ahead of CPI, S&P 500 Near All-Time Highs",
  "India's Sensex Crashes 1,400+ Points as Oil Shock and Rupee Hit Record Lows",
];

const watchlist = [
  { ticker: "AAPL", name: "Apple Inc.", value: "US$292.68", change: "-0.22%" },
  { ticker: "AMZN", name: "Amazon.com, Inc.", value: "US$268.99", change: "-1.35%" },
  { ticker: "MSFT", name: "Microsoft Corporation", value: "US$412.66", change: "-0.59%" },
  { ticker: "GOOG", name: "Alphabet Inc.", value: "US$386.77", change: "-2.59%" },
];

const financeMovers = [
  { ticker: "FOX", name: "Fox Corporation", value: "US$61.18", change: "8.09%" },
  { ticker: "FOXA", name: "Fox Corporation", value: "US$67.72", change: "7.59%" },
  { ticker: "PM", name: "Philip Morris International Inc.", value: "US$182.11", change: "6.50%" },
  { ticker: "ISRG", name: "Intuitive Surgical, Inc.", value: "US$420.06", change: "6.67%" },
  { ticker: "ROST", name: "Ross Stores, Inc.", value: "US$214.55", change: "4.99%" },
];

const predictions = [
  {
    title: "What will WTI Crude Oil (WTI) hit in May 2026?",
    yes: "83.0%",
    no: "17.0%",
  },
  {
    title: "MicroStrategy sells any Bitcoin by ___?",
    yes: "87.0%",
    no: "13.0%",
  },
  {
    title: "Will GameStop acquire eBay?",
    yes: "88.0%",
    no: "12.0%",
  },
  {
    title: "Largest Company end of May?",
    yes: "41.0%",
    no: "59.0%",
  },
  {
    title: "How many Fed rate cuts in 2026?",
    yes: "64.0%",
    no: "36.0%",
  },
];

const politicianTrades = [
  {
    name: "Tina Smith",
    role: "D SENATE MN",
    ticker: "DXCM",
    type: "Sell 배우자",
    filed: "3일",
    amount: "US$10만-US$25만",
  },
  {
    name: "Tina Smith",
    role: "D SENATE MN",
    ticker: "PODD",
    type: "Sell 배우자",
    filed: "3일",
    amount: "US$1.5만-US$5만",
  },
  {
    name: "Greg Stanton",
    role: "D HOUSE AZ",
    ticker: "TCNNF",
    type: "Purchase",
    filed: "5일",
    amount: "US$1천-US$1.5만",
  },
  {
    name: "Kelly Morrison",
    role: "D HOUSE MN",
    ticker: "RVTY",
    type: "Sell",
    filed: "6일",
    amount: "US$1.5만-US$5만",
  },
  {
    name: "Gilbert Ray Cisneros, Jr.",
    role: "D HOUSE CA",
    ticker: "VLTO",
    type: "Purchase",
    filed: "7일",
    amount: "US$5만-US$10만",
  },
];

const earnings = [
  {
    ticker: "TIGO",
    name: "Millicom International Cellular S.A.",
    status: "2026 Q1 live",
    bullets: ["Revenue grew as mobile data demand stayed resilient.", "Management raised guidance for free cash flow."],
  },
  {
    ticker: "ARMK",
    name: "Aramark",
    status: "2026 Q2 live",
    bullets: ["Food service margins improved across education and sports venues.", "Debt reduction remains the focus for the next two quarters."],
  },
  {
    ticker: "ONON",
    name: "On Holding AG",
    status: "2026 Q1 live",
    bullets: ["Direct-to-consumer growth outpaced wholesale channels.", "North America expansion offset foreign exchange headwinds."],
  },
  {
    ticker: "ZBRA",
    name: "Zebra Technologies Corporation",
    status: "2026 Q1 upcoming",
    bullets: ["Investors are watching inventory normalization.", "Industrial automation demand remains mixed."],
  },
  {
    ticker: "QBTS",
    name: "D-Wave Quantum Inc.",
    status: "2026 Q1 upcoming",
    bullets: ["Bookings quality is the key question after recent volatility.", "Cash runway and commercial pilots will drive the call."],
  },
];

export function PerplexityAcademic() {
  return (
    <main className="min-h-svh bg-pplx-bg px-6 pb-24 pt-28">
      <section className="mx-auto flex w-full max-w-[960px] flex-col items-center">
        <h1 className="text-center text-[50px] font-normal leading-none tracking-normal text-pplx-foreground max-md:text-[34px]">
          <span className="font-medium">perplexity</span>{" "}
          <span className="font-light">학문모드</span>
        </h1>
        <AcademicSearch />
        <div className="mt-8 grid w-full grid-cols-5 gap-3 max-lg:grid-cols-3 max-sm:grid-cols-2">
          {["Health", "Law", "Technology", "Science", "Humanities"].map((topic) => (
            <button
              type="button"
              key={topic}
              className="flex h-10 items-center justify-center gap-2 rounded-lg border border-pplx-border bg-pplx-card text-sm text-pplx-foreground shadow-sm transition-colors hover:bg-pplx-hover"
            >
              <Search className="size-4" />
              {topic}
            </button>
          ))}
        </div>
        <div className="mt-10 w-full">
          <h2 className="mb-5 text-lg font-semibold text-pplx-foreground">
            트렌딩 주제
          </h2>
          <div className="relative grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {academicCards.slice(0, 3).map((card) => (
              <AcademicTopicCard
                key={card.title}
                image={card.image}
                title={card.title}
                tone={card.tone}
              />
            ))}
            <button
              type="button"
              aria-label="Next topics"
              className="absolute right-[-18px] top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-pplx-card text-pplx-quiet shadow-[0_3px_12px_rgba(0,0,0,0.16)]"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function AcademicSearch() {
  return (
    <form
      action="/search/ai-search-trends"
      className="mt-16 w-full rounded-2xl border border-pplx-border bg-pplx-card shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
    >
      <label className="sr-only" htmlFor="academic-search">
        Academic search
      </label>
      <input
        id="academic-search"
        name="q"
        placeholder="학술지, 저널 등을 탐색하세요"
        className="h-14 w-full bg-transparent px-6 text-base text-pplx-foreground outline-none placeholder:text-pplx-muted"
      />
      <div className="flex h-12 items-center justify-between px-4 pb-3">
        <div className="flex items-center gap-3">
          <button type="button" aria-label="Add" className="text-pplx-quiet">
            <span className="text-2xl leading-none">+</span>
          </button>
          <button
            type="button"
            className="flex h-8 items-center gap-2 rounded-full bg-pplx-subtle px-3 text-sm"
          >
            <Search className="size-4" />
            검색
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
        <button
          type="submit"
          aria-label="Search"
          className="grid size-9 place-items-center rounded-full bg-pplx-subtle text-pplx-muted"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </form>
  );
}

function AcademicTopicCard({
  image,
  title,
  tone,
}: {
  image?: string;
  title: string;
  tone: string;
}) {
  if (image) {
    return (
      <article className="relative h-[200px] overflow-hidden rounded-lg bg-pplx-card shadow-sm">
        <RemoteImage src={image} alt={title} className="h-full w-full object-cover" />
      </article>
    );
  }

  return (
    <article className="relative h-[200px] overflow-hidden rounded-lg bg-pplx-card shadow-sm">
      <div className={cn("absolute inset-0 bg-gradient-to-br", tone)} />
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_20%_25%,white_0_10px,transparent_11px),radial-gradient(circle_at_86%_28%,white_0_9px,transparent_10px),linear-gradient(135deg,transparent_0_42%,rgba(255,255,255,0.25)_42%_58%,transparent_58%)]" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4">
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
    </article>
  );
}

export function PerplexityDiscover() {
  return (
    <main className="min-h-svh bg-pplx-bg text-pplx-foreground">
      <DiscoverTopBar />
      <div className="mx-auto grid w-full max-w-[1080px] grid-cols-[minmax(0,690px)_280px] gap-6 px-6 pb-24 pt-8 max-lg:block">
        <section className="space-y-7">
          <DiscoverHero story={discoverStories[0]} />
          <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
            {discoverStories.slice(1, 4).map((story) => (
              <DiscoverCard key={story.title} story={story} />
            ))}
          </div>
          {discoverStories.slice(4, 6).map((story) => (
            <DiscoverWideCard key={story.title} story={story} />
          ))}
          <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
            {discoverStories.slice(6).map((story) => (
              <DiscoverCard key={story.title} story={story} />
            ))}
          </div>
        </section>
        <aside className="space-y-5 max-lg:mt-8">
          <DiscoverPersonalize />
          <WeatherWidget />
          <MarketWidget />
          <TrendingCompanies />
        </aside>
      </div>
    </main>
  );
}

function DiscoverTopBar() {
  return (
    <header className="sticky top-0 z-10 flex h-12 items-center border-b border-pplx-soft-border bg-pplx-bg/95 px-4 backdrop-blur">
      <div className="text-sm font-medium">추천</div>
      <nav className="absolute left-1/2 flex -translate-x-1/2 items-center gap-6 text-sm text-pplx-quiet">
        <Link href="/discover" className="border-b-2 border-pplx-foreground pb-3 text-pplx-foreground">
          나를 위한
        </Link>
        <Link href="/discover" className="transition-colors hover:text-pplx-foreground">
          상단
        </Link>
        <button type="button" className="flex items-center gap-1 transition-colors hover:text-pplx-foreground">
          주제
          <ChevronDown className="size-3" />
        </button>
      </nav>
      <button
        type="button"
        className="ml-auto flex h-8 items-center gap-2 rounded-lg border border-pplx-border bg-pplx-card px-3 text-sm"
      >
        <Share2 className="size-4" />
        공유
      </button>
    </header>
  );
}

function DiscoverHero({ story }: { story: DiscoverStory }) {
  return (
    <article className="grid grid-cols-[1fr_345px] gap-6 max-md:block">
      <div>
        <Link href="/discover/you/ai-agent-running-a-stockholm-c-odBR9bOWS2qJ4vhyWdY_fw">
          <h1 className="text-[31px] font-semibold leading-tight text-pplx-foreground transition-colors hover:text-pplx-super">
            {story.title}
          </h1>
        </Link>
        <div className="mt-3 flex items-center gap-2 text-sm text-pplx-quiet">
          <Clock3 className="size-4" />
          {story.time}
        </div>
        <p className="mt-4 text-lg leading-8 text-pplx-foreground">{story.summary}</p>
        <StoryActions sourceCount={story.sourceCount} />
      </div>
      <RemoteImage
        src={story.image}
        alt={story.title}
        className="h-[230px] rounded-lg object-cover max-md:mt-4 max-md:w-full"
      />
    </article>
  );
}

function DiscoverCard({ story }: { story: DiscoverStory }) {
  return (
    <article className="overflow-hidden rounded-lg border border-pplx-soft-border bg-pplx-card shadow-sm">
      <RemoteImage src={story.image} alt={story.title} className="h-[154px] w-full object-cover" />
      <div className="p-3">
        <h3 className="line-clamp-3 min-h-[66px] text-base font-medium leading-snug">
          {story.title}
        </h3>
        <StoryActions compact sourceCount={story.sourceCount} />
      </div>
    </article>
  );
}

function DiscoverWideCard({ story }: { story: DiscoverStory }) {
  return (
    <article className="border-t border-pplx-soft-border pt-6">
      <div className="grid grid-cols-[280px_1fr] gap-6 max-md:block">
        <RemoteImage
          src={story.image}
          alt={story.title}
          className="h-[150px] rounded-lg object-cover max-md:w-full"
        />
        <div>
          <h2 className="text-2xl font-semibold leading-tight">{story.title}</h2>
          <div className="mt-2 flex items-center gap-2 text-sm text-pplx-quiet">
            <Clock3 className="size-4" />
            {story.time}
          </div>
          <p className="mt-3 text-base leading-7 text-pplx-quiet">{story.summary}</p>
          <StoryActions compact sourceCount={story.sourceCount} />
        </div>
      </div>
    </article>
  );
}

function StoryActions({
  sourceCount,
  compact = false,
}: {
  sourceCount: string;
  compact?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-3 text-pplx-quiet", compact ? "mt-3 text-xs" : "mt-8 text-sm")}>
      <span className="flex items-center gap-1">
        <span className="size-4 rounded-full bg-[#3b82f6]" />
        <span className="-ml-2 size-4 rounded-full bg-[#22c55e] ring-1 ring-pplx-card" />
        {sourceCount}
      </span>
      <button type="button" aria-label="Save" className="ml-auto hover:text-pplx-foreground">
        <Heart className="size-4" />
      </button>
      <button type="button" aria-label="More" className="hover:text-pplx-foreground">
        <MoreHorizontal className="size-4" />
      </button>
    </div>
  );
}

function DiscoverPersonalize() {
  return (
    <section className="rounded-lg border border-pplx-soft-border bg-pplx-card p-4">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-base font-semibold">나만의 것으로 만들기</h2>
          <p className="mt-1 text-sm leading-5 text-pplx-quiet">
            주제와 관심사를 선택하여 Discover 경험을 사용자화하세요
          </p>
        </div>
        <X className="size-4 text-pplx-quiet" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {["테크 & 과학", "비즈니스", "예술 & 문화", "스포츠", "엔터테인먼트"].map((item) => (
          <button
            type="button"
            key={item}
            className="rounded-lg border border-pplx-border bg-pplx-subtle px-3 py-2 text-xs"
          >
            {item}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="mt-4 h-9 w-full rounded-lg bg-pplx-muted text-sm font-medium text-white"
      >
        관심사 저장
      </button>
    </section>
  );
}

function WeatherWidget() {
  return (
    <section className="rounded-lg border border-pplx-soft-border bg-pplx-card p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-base font-medium">
          <Sparkles className="size-4" />
          18° <span className="text-sm text-pplx-quiet">F/C</span>
        </div>
        <span className="text-xs text-pplx-quiet">대체로 맑음</span>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2 text-center text-xs text-pplx-quiet">
        {["23°", "23°", "27°", "27°", "28°"].map((temp, index) => (
          <div key={`${temp}-${index}`} className="rounded-md bg-pplx-subtle py-2">
            <Flame className="mx-auto mb-1 size-4" />
            {temp}
          </div>
        ))}
      </div>
    </section>
  );
}

function MarketWidget() {
  return (
    <section className="rounded-lg border border-pplx-soft-border bg-pplx-card p-4">
      <h2 className="mb-3 text-sm font-semibold">시장 전망</h2>
      <div className="grid grid-cols-2 gap-2">
        {stockAssets.slice(0, 4).map((asset) => (
          <AssetMini key={asset.name} asset={asset} />
        ))}
      </div>
    </section>
  );
}

function TrendingCompanies() {
  return (
    <section className="rounded-lg border border-pplx-soft-border bg-pplx-card p-4">
      <h2 className="mb-3 text-sm font-semibold">트렌딩 기업</h2>
      <div className="space-y-3">
        {watchlist.map((item) => (
          <TickerRow key={item.ticker} item={item} />
        ))}
      </div>
    </section>
  );
}

const stockholmArticle = {
  title: "스톡홀름 카페를 운영하는 AI 에이전트, 예산을 빠르게 소진하고 있어",
  lead:
    "샌프란시스코 스타트업이 AI 에이전트에게 스톡홀름의 카페 운영을 맡겼지만, 실험은 예상보다 빠르게 예산을 소진하며 흥미로운 교훈을 남기고 있습니다.",
  image:
    "https://pplx-res.cloudinary.com/image/fetch/s--oKHWuWqw--/t_limit/https://images.fastcompany.com/image/upload/f_webp%2Cq_auto%2Cc_fit/wp-cms-2/2026/05/AP26128293801476.jpg",
  badge: "apnews +2",
  sections: [
    {
      title: "실험",
      body:
        "Andon Labs는 AI 에이전트 Mona에게 카페의 재고, 메뉴, 마케팅, 운영 의사결정을 맡겼습니다. 사람 직원들은 현장을 돕지만, 중요한 판단은 에이전트의 제안과 예산 배분을 따르는 방식이었습니다.",
      cite: "andonlabs +1",
    },
    {
      title: "일이 잘못된 지점",
      body:
        "Mona는 고객 경험을 개선하려고 여러 서비스를 동시에 실험했고, 충분히 검증되지 않은 지출을 늘렸습니다. 예산 통제보다 탐색을 우선하면서 작은 운영비가 빠르게 누적됐습니다.",
      cite: "pbs +1",
    },
    {
      title: "이 실험이 드러내는 것",
      body:
        "AI 에이전트가 실제 사업을 맡을 수 있으려면 의사결정 능력만큼이나 제한 조건, 감사 로그, 지출 승인 흐름이 중요합니다. 자동화는 운영을 가볍게 만들 수 있지만 책임 경계까지 대신 정해주지는 않습니다.",
      cite: "forbes +1",
    },
  ],
};

const githubArticle = {
  title: "GitHub Copilot, GPT 기반 구형 모델 지원 단계적 중단 예고",
  lead:
    "GitHub가 Copilot의 기본 모델 구성을 재정비하며 오래된 GPT 계열 모델을 단계적으로 제외하고, 더 빠른 코드 특화 모델과 에이전트 흐름을 강화할 계획입니다.",
  image:
    "https://pplx-res.cloudinary.com/image/fetch/s--j53HV2aO--/t_limit/https://akm-img-a-in.tosshub.com/indiatoday/images/story/202604/sam-altman-175223836-16x9_1.jpg%3FVersionId%3D1d3LvkvNfIEusw1kJjlJtpam7Pn.6Y6.",
  badge: "github +3",
  sections: [
    {
      title: "변경 배경",
      body:
        "코드 완성 중심의 경험에서 저장소 단위의 에이전트 작업으로 무게가 이동하면서, 모델 선택 기준도 지연 시간과 코드 품질, 도구 호출 안정성 중심으로 바뀌고 있습니다.",
      cite: "github.blog +1",
    },
    {
      title: "개발자에게 미치는 영향",
      body:
        "일부 조직은 정책상 특정 모델을 고정해 두었기 때문에 전환 기간 동안 기본 설정과 비용 정책을 다시 확인해야 합니다. 개인 사용자에게는 응답 스타일 변화가 먼저 체감될 가능성이 큽니다.",
      cite: "theverge +1",
    },
    {
      title: "다음 흐름",
      body:
        "Copilot Workspace, 코드 리뷰 에이전트, CLI 기반 자동 수정처럼 더 긴 작업을 맡기는 기능이 전면에 놓일 전망입니다.",
      cite: "microsoft +1",
    },
  ],
};

export function PerplexityDiscoverDetail({ slug }: { slug: string }) {
  const article = slug.includes("github-copilot") ? githubArticle : stockholmArticle;

  return (
    <main className="min-h-svh bg-pplx-bg text-pplx-foreground">
      <header className="sticky top-0 z-10 flex h-12 items-center border-b border-pplx-soft-border bg-pplx-bg/95 px-4 backdrop-blur">
        <Link
          href="/discover"
          className="flex h-8 items-center gap-2 rounded-lg border border-pplx-border bg-pplx-card px-3 text-sm"
        >
          <ArrowLeft className="size-4" />
          Discover로 돌아가기
        </Link>
        <div className="ml-auto flex items-center gap-4 text-pplx-quiet">
          <MoreHorizontal className="size-5" />
          <Bookmark className="size-4" />
          <button className="flex h-8 items-center gap-2 rounded-lg bg-pplx-foreground px-3 text-sm text-white" type="button">
            <Share2 className="size-4" />
            공유
          </button>
        </div>
      </header>
      <article className="mx-auto w-full max-w-[690px] px-6 pb-36 pt-10">
        <h1 className="text-[34px] font-semibold leading-tight">{article.title}</h1>
        <p className="mt-5 text-lg leading-8 text-pplx-foreground">{article.lead}</p>
        <div className="mt-5 flex items-center justify-between text-sm text-pplx-quiet">
          <PerplexityMark className="size-6 text-pplx-foreground" />
          <span className="flex items-center gap-1">
            <Clock3 className="size-4" />
            게시됨 2시간 전
          </span>
        </div>
        <SourceCards />
        <RemoteImage src={article.image} alt={article.title} className="mt-5 h-[335px] w-full rounded-lg object-cover" />
        {article.sections.map((section) => (
          <section key={section.title} className="mt-8 answer-copy">
            <h2>{section.title}</h2>
            <p>
              {section.body}{" "}
              <span className="rounded-md bg-pplx-subtle px-1.5 py-0.5 font-mono text-xs text-pplx-quiet">
                {section.cite}
              </span>
            </p>
            <ArticleActionRow />
          </section>
        ))}
        <MoreToExplore />
      </article>
      <BottomComposer placeholder="후속 질문" />
    </main>
  );
}

function SourceCards() {
  const sources = [
    ["apnews", "AI agent Mona runs a Swedish cafe in a test..."],
    ["andonlabs", "How we gave an AI a budget and a cafe..."],
    ["pbs", "Small business experiment tests autonomous agents..."],
    ["forbes", "AI agents are entering real operations..."],
  ];

  return (
    <div className="mt-5 grid grid-cols-4 gap-2 max-md:grid-cols-2">
      {sources.map(([domain, text]) => (
        <div key={domain} className="rounded-lg bg-pplx-subtle p-3 text-xs">
          <div className="mb-2 flex items-center gap-2 text-pplx-quiet">
            <span className="grid size-4 place-items-center rounded-full bg-white text-[9px]">{domain[0]}</span>
            {domain}
          </div>
          <p className="line-clamp-2 font-medium leading-4">{text}</p>
        </div>
      ))}
    </div>
  );
}

function ArticleActionRow() {
  return (
    <div className="mt-4 flex items-center gap-3 text-sm text-pplx-quiet">
      <button type="button" className="flex h-7 items-center gap-2 rounded-full border border-pplx-border px-3">
        <span className="size-4 rounded-full bg-[#3b82f6]" />
        2개 출처
      </button>
      <Link2 className="size-4" />
      <Copy className="size-4" />
    </div>
  );
}

function MoreToExplore() {
  const items = [
    {
      title: "퀄컴 CEO, 2026년을 '에이전트의 해'로 선언",
      image:
        "https://pplx-res.cloudinary.com/image/fetch/s--HY1KgqKx--/t_limit/https://www.thekeyexecutives.com/wp-content/uploads/2025/02/Cristiano-Amon-Leading-Qualcomms-Expansion-Beyond-Mobile.jpg",
    },
    {
      title: "Codex AI 에이전트, 보안 버그 바운티로 자율적으로 수익 창출",
      image:
        "https://pplx-res.cloudinary.com/image/fetch/s--j53HV2aO--/t_limit/https://akm-img-a-in.tosshub.com/indiatoday/images/story/202604/sam-altman-175223836-16x9_1.jpg%3FVersionId%3D1d3LvkvNfIEusw1kJjlJtpam7Pn.6Y6.",
    },
    {
      title: "Animoca 회장, 메타버스는 AI를 위해 만들어진 것",
      image:
        "https://pplx-res.cloudinary.com/image/fetch/s--rgTOBIDv--/t_limit/https://www.trendingtopics.eu/wp-content/uploads/2025/11/Bildschirmfoto-2025-11-13-um-09.28.57.jpg",
    },
    {
      title: "Meta, 사용자 대신 쇼핑하는 AI 에이전트 개발 중",
      image:
        "https://pplx-res.cloudinary.com/image/fetch/s--yNmMoZ-_--/t_limit/https://storage.ghost.io/c/a2/c9/a2c929dd-49fd-47cd-9801-f80720a3d16e/content/images/size/w1200/2026/02/Meta-leans-into-agentic-commerce-and-personal-AI-with-major-2026-rollout.webp",
    },
  ];

  return (
    <section className="mt-12">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
        <Sparkles className="size-5" />
        더 알아보기
      </h2>
      <div className="grid grid-cols-4 gap-3 max-md:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-lg border border-pplx-soft-border bg-pplx-card">
            <RemoteImage src={item.image} alt={item.title} className="h-24 w-full object-cover" />
            <h3 className="line-clamp-3 p-3 text-sm font-medium leading-5">{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PerplexityFinance({ view }: { view: FinanceView }) {
  return (
    <main className="min-h-svh bg-pplx-bg text-pplx-foreground">
      <FinanceHeader />
      <div className="mx-auto grid w-full max-w-[1220px] grid-cols-[minmax(0,760px)_300px] gap-7 px-6 pb-32 pt-4 max-lg:block">
        <section>
          {view === "market" ? <FinanceMarket /> : null}
          {view === "predictions" ? <FinancePredictions /> : null}
          {view === "politicians" ? <FinancePoliticians /> : null}
          {view === "earnings" ? <FinanceEarnings /> : null}
          {view === "asset" ? <FinanceAsset /> : null}
        </section>
        {view !== "asset" ? (
          <aside className="space-y-4 max-lg:mt-6">
            <FinanceRightRail />
          </aside>
        ) : null}
      </div>
      <BottomComposer placeholder="미국 시장에 대해 무엇이든 질문하세요" compact />
    </main>
  );
}

function FinanceHeader() {
  const tabs = [
    ["미국 시장", "/finance"],
    ["암호화폐", "/finance"],
    ["수익", "/finance/earnings"],
    ["예측", "/finance/predictions"],
    ["스크리너", "/finance"],
    ["정치인", "/finance/politicians"],
    ["관심목록", "/finance"],
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-pplx-soft-border bg-pplx-bg/95 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-[1220px] items-center gap-4 px-6">
        <Link
          href="/finance"
          className="self-stretch border-b-2 border-pplx-foreground pt-4 text-sm font-medium"
        >
          Perplexity 금융
        </Link>
        <div className="mx-auto hidden h-8 w-[310px] items-center rounded-lg border border-pplx-border bg-pplx-card px-3 text-xs text-pplx-muted md:flex">
          <Search className="mr-2 size-4" />
          주식, 암호화폐 등을 검색하세요...
        </div>
        <div className="ml-auto hidden items-center gap-1 text-xs text-pplx-muted lg:flex">
          <span className="tracking-[2px] text-rose-700">||||</span>
          불확실한 감정
        </div>
        <button type="button" className="flex items-center gap-1 text-xs text-pplx-quiet">
          가격 알림
          <Bell className="size-3.5" />
        </button>
        <button type="button" className="flex h-8 items-center gap-2 rounded-lg bg-pplx-foreground px-3 text-sm text-white">
          <Share2 className="size-4" />
          공유
        </button>
      </div>
      <nav className="mx-auto flex h-10 max-w-[1220px] items-center gap-5 overflow-x-auto px-6 text-sm text-pplx-quiet">
        {tabs.map(([label, href], index) => (
          <Link
            key={label}
            href={href}
            className={cn(
              "flex h-full items-center whitespace-nowrap border-b-2 transition-colors hover:text-pplx-foreground",
              index === 0
                ? "border-pplx-foreground text-pplx-foreground"
                : "border-transparent",
            )}
          >
            {index === 0 ? <span className="mr-2">🇺🇸</span> : null}
            {label}
            {index === 0 ? <ChevronDown className="ml-1 size-3" /> : null}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function FinanceMarket() {
  return (
    <div className="space-y-7">
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold">상위 자산</h1>
          <button type="button" className="text-xs text-pplx-quiet">
            US <ChevronDown className="inline size-3" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-3 max-md:grid-cols-2">
          {stockAssets.map((asset) => (
            <AssetCard key={asset.name} asset={asset} />
          ))}
        </div>
      </section>
      <section className="rounded-lg border border-pplx-soft-border bg-pplx-card">
        <div className="flex items-center justify-between border-b border-pplx-soft-border px-4 py-3">
          <h2 className="font-semibold">시장 요약</h2>
          <span className="text-xs text-pplx-quiet">업데이트됨 3분 전</span>
        </div>
        <div className="divide-y divide-pplx-soft-border">
          {marketNews.map((item, index) => (
            <details key={item} className="group px-4 py-3" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                {item}
                <ChevronDown className="size-4 text-pplx-quiet transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-6 text-pplx-quiet">
                Oil prices extended their rally after a ceasefire headline faded. Technology shares remained mixed while investors weighed inflation pressure and earnings revisions.
              </p>
            </details>
          ))}
        </div>
      </section>
      <MarketHeatmap />
      <RecentDevelopments />
      <FinanceResearchSpaces />
      <StockMoves />
    </div>
  );
}

function AssetCard({ asset }: { asset: (typeof stockAssets)[number] }) {
  return (
    <Link href="/finance/ESUSD" className="rounded-lg border border-pplx-soft-border bg-pplx-card p-3 shadow-sm">
      <div className="text-xs font-medium">{asset.name}</div>
      <div className="mt-1 flex items-baseline justify-between">
        <span className="text-xs text-pplx-quiet">{asset.value}</span>
        <span className={cn("text-xs font-semibold", asset.up ? "text-emerald-600" : "text-rose-600")}>
          {asset.up ? "↘" : "↗"} {asset.change}
        </span>
      </div>
      <Sparkline down={!asset.up} />
    </Link>
  );
}

function AssetMini({ asset }: { asset: (typeof stockAssets)[number] }) {
  return (
    <div className="rounded-lg border border-pplx-soft-border bg-pplx-card p-2">
      <div className="truncate text-xs font-medium">{asset.name}</div>
      <div className={cn("text-xs", asset.up ? "text-emerald-600" : "text-rose-600")}>{asset.change}</div>
      <Sparkline small down={!asset.up} />
    </div>
  );
}

function Sparkline({ down = false, small = false }: { down?: boolean; small?: boolean }) {
  return (
    <svg viewBox="0 0 120 34" className={cn("mt-2 w-full", small ? "h-8" : "h-10")} aria-hidden="true">
      <path
        d={down ? "M0 10 C16 12 20 18 34 16 S57 20 67 18 82 9 92 12 104 25 120 28" : "M0 22 C16 20 22 15 35 18 S51 25 67 18 85 15 94 10 108 13 120 8"}
        fill="none"
        stroke={down ? "#e05b68" : "#4c9c68"}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function MarketHeatmap() {
  const cells = [
    ["NVDA", "+1.97%", "bg-emerald-200", "col-span-2 row-span-2"],
    ["AVGO", "-0.37%", "bg-rose-100", ""],
    ["AAPL", "-0.22%", "bg-rose-100", ""],
    ["GOOGL", "-3.03%", "bg-rose-300", "col-span-2"],
    ["META", "-1.77%", "bg-rose-200", ""],
    ["MU", "+6.50%", "bg-emerald-300", ""],
    ["INTC", "+3.63%", "bg-emerald-200", ""],
    ["AMZN", "-1.35%", "bg-rose-200", "col-span-2"],
    ["TSLA", "+3.89%", "bg-emerald-200", ""],
    ["JPM", "+0.70%", "bg-emerald-100", ""],
    ["BRK.B", "+0.19%", "bg-emerald-100", ""],
    ["LLY", "+1.98%", "bg-emerald-200", ""],
    ["WMT", "-2.18%", "bg-rose-200", ""],
  ];

  return (
    <section>
      <h2 className="mb-3 text-base font-semibold">S&P 500 히트맵</h2>
      <div className="grid h-[260px] grid-cols-6 grid-rows-4 gap-1 rounded-lg border border-pplx-soft-border bg-pplx-card p-2">
        {cells.map(([ticker, change, color, span]) => (
          <div key={ticker} className={cn("rounded-sm p-2 text-xs font-semibold text-pplx-foreground", color, span)}>
            <div>{ticker}</div>
            <div>{change}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RecentDevelopments() {
  return (
    <section>
      <h2 className="mb-3 text-base font-semibold">최근 개발</h2>
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
        {marketNews.slice(0, 3).map((item, index) => (
          <article key={item} className="rounded-lg border border-pplx-soft-border bg-pplx-card p-4">
            <div className="mb-3 flex items-center gap-2 text-xs text-pplx-quiet">
              <span className="size-4 rounded-full bg-[#f97316]" />
              {index + 1}시간 전
            </div>
            <h3 className="line-clamp-2 text-sm font-semibold">{item}</h3>
            <p className="mt-3 line-clamp-5 text-xs leading-5 text-pplx-quiet">
              Markets reacted to fresh macro signals and shifting analyst commentary as traders watched policy risk and earnings momentum.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinanceResearchSpaces() {
  return (
    <section className="rounded-lg border border-pplx-soft-border bg-pplx-card">
      <h2 className="border-b border-pplx-soft-border px-4 py-3 text-sm font-semibold">
        재무 연구를 위한 인기 공간
      </h2>
      {["S&P 500 Transcripts", "What would Buffett say?", "Investor Question Generator"].map((item, index) => (
        <div key={item} className="flex items-center justify-between border-b border-pplx-soft-border px-4 py-4 last:border-b-0">
          <div>
            <div className="text-sm font-medium">{item}</div>
            <div className="text-xs text-pplx-quiet">
              {index === 0 ? "Query any S&P company transcript over the last two years." : "Get structured answers from financial filings and shareholder letters."}
            </div>
          </div>
          <button type="button" className="rounded-md border border-pplx-border px-3 py-1 text-xs">
            Query
          </button>
        </div>
      ))}
    </section>
  );
}

function StockMoves() {
  return (
    <section className="space-y-4">
      <h2 className="text-base font-semibold">주목할 선수</h2>
      {financeMovers.map((item) => (
        <article key={item.ticker} className="rounded-lg border border-pplx-soft-border bg-pplx-card p-4">
          <div className="flex items-start justify-between">
            <TickerIdentity ticker={item.ticker} name={item.name} />
            <div className="text-right">
              <div className="font-semibold">{item.value}</div>
              <div className="text-sm font-medium text-emerald-600">↗ {item.change}</div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-[1fr_150px] gap-5 max-md:block">
            <div className="h-[145px] rounded-md bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:24px_24px] p-3">
              <Sparkline />
            </div>
            <div className="space-y-2 text-xs text-pplx-quiet max-md:mt-3">
              <Stat label="Volume" value="6.35M" />
              <Stat label="시가 총액" value="30.1B" />
              <Stat label="P/E 비율" value="17.82" />
              <Stat label="배당 수익률" value="0.83%" />
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-pplx-quiet">
            {item.name} shares moved sharply after analysts raised expectations and highlighted resilient demand.
          </p>
        </article>
      ))}
    </section>
  );
}

function FinanceRightRail() {
  return (
    <>
      <section className="rounded-lg border border-pplx-soft-border bg-pplx-card p-4">
        <h2 className="mb-3 text-sm font-semibold">관심 목록 만들기</h2>
        <div className="space-y-3">
          {watchlist.map((item) => (
            <TickerRow key={item.ticker} item={item} />
          ))}
        </div>
      </section>
      <section className="rounded-lg border border-pplx-soft-border bg-pplx-card p-4">
        <h2 className="mb-3 text-sm font-semibold">예측 시장</h2>
        <div className="space-y-4">
          {predictions.slice(0, 3).map((item) => (
            <PredictionMini key={item.title} item={item} />
          ))}
        </div>
      </section>
      <section className="rounded-lg border border-pplx-soft-border bg-pplx-card p-4">
        <h2 className="mb-3 text-sm font-semibold">상승 주식</h2>
        <div className="space-y-3">
          {financeMovers.slice(0, 4).map((item) => (
            <TickerRow key={item.ticker} item={item} />
          ))}
        </div>
      </section>
      <section className="rounded-lg border border-pplx-soft-border bg-pplx-card p-4">
        <h2 className="mb-3 text-sm font-semibold">인기 암호화폐</h2>
        {["Bitcoin", "Ethereum", "Solana", "XRP"].map((coin) => (
          <div key={coin} className="flex items-center justify-between border-b border-pplx-soft-border py-2 last:border-b-0">
            <span className="text-sm">{coin}</span>
            <span className="text-xs text-emerald-600">+0.25%</span>
          </div>
        ))}
      </section>
    </>
  );
}

function FinancePredictions() {
  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">예측 시장</h1>
          <p className="mt-1 text-sm text-pplx-quiet">시장, 정치, 문화 이벤트에 대한 확률을 살펴보세요.</p>
        </div>
        <button type="button" className="rounded-lg border border-pplx-border px-3 py-2 text-sm">
          새 예측 만들기
        </button>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        {["재무", "암호화폐", "정치", "문화", "테크", "경제", "지정학", "수익", "세계"].map((item) => (
          <button type="button" key={item} className="rounded-full border border-pplx-border bg-pplx-card px-3 py-1.5 text-sm">
            {item}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        {predictions.map((item) => (
          <PredictionCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function PredictionCard({ item }: { item: (typeof predictions)[number] }) {
  return (
    <article className="rounded-lg border border-pplx-soft-border bg-pplx-card p-4">
      <div className="mb-4 flex items-start gap-3">
        <CircleDollarSign className="mt-1 size-5 text-pplx-quiet" />
        <h2 className="font-semibold leading-6">{item.title}</h2>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-emerald-50 p-3">
          <div className="text-xs text-pplx-quiet">Yes</div>
          <div className="text-xl font-semibold text-emerald-700">{item.yes}</div>
        </div>
        <div className="rounded-lg bg-rose-50 p-3">
          <div className="text-xs text-pplx-quiet">No</div>
          <div className="text-xl font-semibold text-rose-700">{item.no}</div>
        </div>
      </div>
    </article>
  );
}

function PredictionMini({ item }: { item: (typeof predictions)[number] }) {
  return (
    <div>
      <div className="line-clamp-2 text-sm font-medium">{item.title}</div>
      <div className="mt-2 flex items-center gap-2 text-xs">
        <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-emerald-700">{item.yes}</span>
        <span className="rounded bg-rose-50 px-1.5 py-0.5 text-rose-700">{item.no}</span>
      </div>
    </div>
  );
}

function FinancePoliticians() {
  return (
    <section>
      <div className="mb-5">
        <h1 className="text-2xl font-semibold">거래 활동</h1>
        <p className="mt-1 text-sm text-pplx-quiet">미국 정치인의 최근 주식 거래 공시를 추적합니다.</p>
      </div>
      <div className="overflow-hidden rounded-lg border border-pplx-soft-border bg-pplx-card">
        <div className="grid grid-cols-[1.4fr_1fr_0.8fr_1fr] border-b border-pplx-soft-border bg-pplx-subtle px-4 py-3 text-xs font-semibold text-pplx-quiet max-md:hidden">
          <div>거래</div>
          <div>유형</div>
          <div>이후 제출</div>
          <div>금액</div>
        </div>
        {politicianTrades.map((trade) => (
          <div key={`${trade.name}-${trade.ticker}`} className="grid grid-cols-[1.4fr_1fr_0.8fr_1fr] items-center border-b border-pplx-soft-border px-4 py-4 last:border-b-0 max-md:block">
            <TickerIdentity ticker={trade.ticker} name={trade.name} sub={trade.role} />
            <div className="text-sm">{trade.type}</div>
            <div className="text-sm text-pplx-quiet">{trade.filed}</div>
            <div className="text-sm font-medium">{trade.amount}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinanceEarnings() {
  return (
    <section>
      <div className="mb-5">
        <h1 className="text-2xl font-semibold">실적 일정</h1>
        <p className="mt-1 text-sm text-pplx-quiet">다가오는 실적 발표와 콜 요약을 한 화면에서 확인하세요.</p>
      </div>
      <div className="mb-5 flex gap-2 overflow-x-auto">
        {["오늘", "5월 10일", "5월 11일 · 40 calls", "5월 12일 · 121 calls", "5월 13일", "5월 14일"].map((day, index) => (
          <button
            key={day}
            type="button"
            className={cn(
              "h-10 shrink-0 rounded-full border px-4 text-sm",
              index === 3 ? "border-pplx-foreground bg-pplx-foreground text-white" : "border-pplx-border bg-pplx-card",
            )}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {earnings.map((item) => (
          <article key={item.ticker} className="rounded-lg border border-pplx-soft-border bg-pplx-card p-4">
            <div className="flex items-start justify-between">
              <TickerIdentity ticker={item.ticker} name={item.name} />
              <span className="rounded-full bg-pplx-subtle px-2 py-1 text-xs text-pplx-quiet">{item.status}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-pplx-quiet">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <Check className="mt-1 size-4 text-emerald-600" />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinanceAsset() {
  return (
    <section className="mx-auto max-w-[860px]">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <div className="text-sm text-pplx-quiet">ESUSD</div>
          <h1 className="text-3xl font-semibold">E-Mini S&P 500</h1>
          <div className="mt-2 flex items-center gap-3 text-sm text-pplx-quiet">
            <span>Future · CME</span>
            <span className="text-emerald-600">↘ 0.29%</span>
          </div>
        </div>
        <button type="button" className="flex h-9 items-center gap-2 rounded-lg border border-pplx-border px-3 text-sm">
          <Star className="size-4" />
          Follow
        </button>
      </div>
      <div className="rounded-lg border border-pplx-soft-border bg-pplx-card p-5">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <div className="text-4xl font-semibold">US$7,415.00</div>
            <div className="mt-1 text-sm text-emerald-600">+21.75 · 0.29% 오늘</div>
          </div>
          <div className="flex gap-2 text-xs text-pplx-quiet">
            {["1D", "5D", "1M", "6M", "YTD", "1Y"].map((period, index) => (
              <button key={period} type="button" className={cn("rounded-md px-2 py-1", index === 0 ? "bg-pplx-foreground text-white" : "bg-pplx-subtle")}>
                {period}
              </button>
            ))}
          </div>
        </div>
        <div className="h-[300px] rounded-lg bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:38px_38px] p-6">
          <svg viewBox="0 0 720 260" className="h-full w-full" aria-hidden="true">
            <path d="M0 190 C80 180 110 90 170 115 S260 220 330 160 410 80 480 118 590 210 720 76" fill="none" stroke="#4c9c68" strokeWidth="4" strokeLinecap="round" />
            <path d="M0 190 C80 180 110 90 170 115 S260 220 330 160 410 80 480 118 590 210 720 76 L720 260 L0 260 Z" fill="rgba(76,156,104,0.10)" />
          </svg>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-3 max-md:grid-cols-2">
          <StatCard label="이전 종가" value="US$7,436.75" />
          <StatCard label="거래량" value="17.96만" />
          <StatCard label="고가" value="US$7,442.00" />
          <StatCard label="저가" value="US$7,381.50" />
        </div>
      </div>
      <section className="mt-6 rounded-lg border border-pplx-soft-border bg-pplx-card">
        <h2 className="border-b border-pplx-soft-border px-5 py-4 text-lg font-semibold">
          주요 가격 변동
        </h2>
        {[
          "Crude oil surged as ceasefire headlines changed inflation expectations.",
          "S&P futures retreated after analysts warned of a deeper pullback.",
          "Treasury yields rose as traders priced fewer Fed rate cuts.",
        ].map((item, index) => (
          <div key={item} className="border-b border-pplx-soft-border px-5 py-4 last:border-b-0">
            <div className="mb-2 flex items-center gap-2 text-sm text-pplx-quiet">
              <CalendarDays className="size-4" />
              May {12 - index}, 2026
            </div>
            <p className="text-sm leading-6 text-pplx-foreground">{item}</p>
          </div>
        ))}
      </section>
    </section>
  );
}

function TickerIdentity({
  ticker,
  name,
  sub,
}: {
  ticker: string;
  name: string;
  sub?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <RemoteImage
        src={`https://finance-logo.perplexity.ai/ticker/${ticker}?format=png&fallback=404&size=50`}
        alt={ticker}
        className="size-9 rounded-md object-contain"
      />
      <div>
        <div className="text-sm font-semibold">{name}</div>
        <div className="text-xs text-pplx-quiet">{sub ?? ticker}</div>
      </div>
    </div>
  );
}

function TickerRow({
  item,
}: {
  item: { ticker: string; name: string; value: string; change: string };
}) {
  const up = item.change.startsWith("+");

  return (
    <div className="flex items-center justify-between gap-3">
      <TickerIdentity ticker={item.ticker} name={item.name} />
      <div className="text-right">
        <div className="text-xs text-pplx-quiet">{item.value}</div>
        <div className={cn("text-xs font-semibold", up ? "text-emerald-600" : "text-rose-600")}>
          {item.change}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-pplx-soft-border pb-1">
      <span>{label}</span>
      <span className="font-medium text-pplx-foreground">{value}</span>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-pplx-subtle p-3">
      <div className="text-xs text-pplx-quiet">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

function BottomComposer({
  placeholder,
  compact = false,
}: {
  placeholder: string;
  compact?: boolean;
}) {
  return (
    <div className="pointer-events-none fixed bottom-5 left-[var(--pplx-sidebar-width)] right-0 z-20 flex justify-center px-6 max-md:hidden">
      <form
        action="/search/ai-search-trends"
        className={cn(
          "pointer-events-auto rounded-2xl border border-pplx-border bg-pplx-card shadow-[0_4px_18px_rgba(0,0,0,0.10)]",
          compact ? "w-[720px]" : "w-[690px]",
        )}
      >
        <label className="sr-only" htmlFor="bottom-composer">
          Follow-up
        </label>
        <input
          id="bottom-composer"
          name="q"
          placeholder={placeholder}
          className="h-12 w-full bg-transparent px-5 text-base outline-none placeholder:text-pplx-muted"
        />
        <div className="flex h-11 items-center justify-between px-4 pb-3">
          <div className="flex items-center gap-3">
            <button type="button" className="text-2xl text-pplx-quiet">+</button>
            <button type="button" className="flex h-8 items-center gap-2 rounded-full bg-pplx-subtle px-3 text-sm">
              <Search className="size-4" />
              검색
              <ChevronDown className="size-3" />
            </button>
            <button type="button" className="grid size-8 place-items-center rounded-full border border-dashed border-pplx-border text-pplx-quiet">
              <Cpu className="size-4" />
            </button>
          </div>
          <div className="flex items-center gap-3 text-pplx-quiet">
            <button type="button" className="flex items-center gap-1 text-sm">
              모델
              <ChevronDown className="size-3" />
            </button>
            <button type="button" aria-label="Voice">
              <WaveformIcon className="size-5" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function RemoteImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
}
