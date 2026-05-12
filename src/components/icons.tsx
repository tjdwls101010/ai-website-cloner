import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function PerplexityMark({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      fill="none"
      {...props}
    >
      <path
        d="M16 3v26M5 8.8h22M5 23.2h22M8.5 4.8 16 12l7.5-7.2v22.4L16 20l-7.5 7.2V4.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m5 8.8 11 8.4 11-8.4M5 23.2l11-8.4 11 8.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WaveformIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      {...props}
    >
      <path
        d="M4 12v-1.5M8 16V8M12 18V6M16 16V8M20 13.5V10.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
