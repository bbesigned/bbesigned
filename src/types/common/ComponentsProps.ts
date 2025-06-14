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
	smallLogo?: boolean;
	dark?: boolean;
}

export interface IControlButtons {
	classnames?: string;
}

export interface ISelectActivityProps {
	selected: string[];
	onChange: (selected: string[]) => void;
	onClose: () => void;
}

export interface IModalLetsTalkProps {
	visible: boolean;
	onClose: () => void;
}

export interface ISubmitLetsTalkButtonProps {
	submit: boolean;
	agree: boolean;
}

export interface ILetsTalkButtonProps {
	dark?: boolean;
}

export interface IBurgerButtonProps {
	dark?: boolean;
}

export interface IBannerHeaderProps {
	dark?: boolean;
	smallLogo?: boolean;
}
