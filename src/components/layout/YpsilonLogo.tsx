"use client";

import { LOGO_VIEWBOX, LOGO_FILLS, LOGO_STROKES } from "./ypsilonLogoPaths";

interface Props {
  light?: boolean;
  large?: boolean;
  xlarge?: boolean;
}

// Aspect ratio of the official logo artwork (from the PDF viewBox): ~4.29:1
const RATIO = 538.75 / 125.5;

export default function YpsilonLogo({ light = false, large = false, xlarge = false }: Props) {
  const width = xlarge ? 300 : large ? 224 : 150;
  const height = Math.round(width / RATIO);

  const strokeColor = light ? "#FFFFFF" : "#40577C";
  const textColor = light ? "#FFFFFF" : "#1A1D2E";

  return (
    <svg
      width={width}
      height={height}
      viewBox={LOGO_VIEWBOX}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ypsilon Øyeklinikk"
      style={{ display: "block" }}
    >
      {LOGO_FILLS.map((d, i) => (
        <path key={`f${i}`} d={d} fill={textColor} />
      ))}
      {LOGO_STROKES.map((s, i) => (
        <path
          key={`s${i}`}
          d={s.d}
          fill="none"
          stroke={strokeColor}
          strokeWidth={s.width}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}
