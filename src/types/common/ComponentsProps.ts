export type ExampleType = {
	type1: string;
};

export interface IBannerContent {
	leftText: string[];
	rightText: string[];
}

export interface IVectorLetter {
	letter: string;
	height?: string | number;
	fill?: string;
	textX?: string;
	textY?: string;
	dominantBaseline?: string;
	textAnchor?: string;
	withShadow?: boolean;
}

export interface IBannerLogo {
	smallLogo: boolean;
}

export interface IControlButtons {
	classnames?: string;
}
