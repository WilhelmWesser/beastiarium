import { CSSProperties } from "react";

type BeastInfoPlotStyles = CSSProperties & {
  "--left-fade-border-color": string;
  "--blur-border-color": string;
  "--font-color": string;
};

type BeastCardFrameStyles = CSSProperties & {
  "--card-color": string;
}

export { type BeastInfoPlotStyles, type BeastCardFrameStyles };
