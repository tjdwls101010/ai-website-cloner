"use client";

import { useState } from "react";
import { Cookie } from "lucide-react";

export function CookieNotice() {
  const [hidden, setHidden] = useState(false);

  if (hidden) {
    return null;
  }

  return (
    <aside className="fixed inset-x-4 bottom-4 z-50 rounded-xl border border-pplx-border bg-pplx-card p-4 text-pplx-foreground shadow-[0_2px_8px_rgba(0,0,0,0.08)] md:left-auto md:right-2 md:w-[448px]">
      <div className="mb-2 flex items-center gap-3">
        <Cookie className="size-6 md:size-5" strokeWidth={1.8} />
        <h2 className="text-base font-semibold leading-6">
          Cookie Policy
        </h2>
      </div>
      <p className="max-w-[370px] text-sm leading-5 text-pplx-quiet">
        We use cookies to enhance your experience. By clicking &quot;Accept All
        Cookies&quot; or selecting &quot;Necessary Cookies&quot;, you agree to our{" "}
        <a className="underline underline-offset-2" href="#">
          privacy policy
        </a>
        .
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => setHidden(true)}
          className="h-8 rounded-lg bg-pplx-foreground px-4 text-sm font-medium text-pplx-card transition-colors hover:bg-black"
        >
          Necessary Cookies
        </button>
        <button
          type="button"
          onClick={() => setHidden(true)}
          className="h-8 rounded-lg border border-pplx-border bg-pplx-subtle px-4 text-sm font-medium text-pplx-foreground transition-colors hover:bg-pplx-hover"
        >
          Accept All Cookies
        </button>
      </div>
    </aside>
  );
}
