export interface IVectorLetterProps {
  letter: string;
  width?: string | number;
  height?: string | number;
  fill?: string;
  textX?: string;
  textY?: string;
  dominantBaseline?: string;
  textAnchor?: string;
  withShadow?: boolean;
  letterSizes?: { [key: string]: string };
  sizeSet?: "default" | "logo";
}