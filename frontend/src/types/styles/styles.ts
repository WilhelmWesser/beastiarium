import { CSSProperties } from "react";


type InputStyles = Partial<CSSProperties & {
  "--custom-input-border-color": string,
  "--custom-input-border-radius": string,
  "--custom-input-border-height": string,
  "--custom-input-border-width": string,
  "--custom-input-background-color": string,
  "--custom-input-position": string,
  "--custom-input-opacity": string,
  "--custom-input-margin": string,
  "--custom-input-top-border": string,
  "--custom-input-bottom-border": string,
  "--custom-input-left-border": string,
  "--custom-input-right-border": string,
}>

type SelectStyles = Partial<CSSProperties & {
  "--custom-select-border-color": string,
  "--custom-select-background-color": string,
  "--custom-select--option-background-color": string,
  "--custom-select-margin": string,
}>

type ButtonStyles = Partial<CSSProperties & {
  "--button-bg-color": string,
  "--button-name-color": string,
}>

type ImageStyles = Partial<CSSProperties & {
  "--custom-image-width": string,
  "--custom-image-height": string,
  "--custom-image-border-radius": string,
}>

type TextAreaStyles = Partial<CSSProperties & {
  "--custom-textarea-border-color": string,
  "--custom-textarea-background-color": string,
  "--custom-textarea-top-border": string,
  "--custom-textarea-bottom-border": string,
  "--custom-textarea-left-border": string,
  "--custom-textarea-right-border": string,
  "--custom-textarea-border-radius": string,
  "--custom-textarea-height": string,
  "--custom-textarea-scrollbar-color": string,
}>

type BeastInfoPlotStyles = Partial<CSSProperties & {
  "--left-fade-border-color": string;
  "--blur-border-color": string;
  "--font-color": string;
}>;

type BeastCardFrameStyles = Partial<CSSProperties & {
  "--card-color": string;
}>

export type { BeastInfoPlotStyles, BeastCardFrameStyles, InputStyles, SelectStyles, ButtonStyles, ImageStyles, TextAreaStyles };
