export interface IWisdoItem {
	titles: string;
	image: string;
	descriptions: string;
	membersCounts: number;
	lifeChallengeIds: string;
}

export interface IWisdo {
	categoryName: string;
	items: IWisdoItem[];
}

export interface IMain {
	wisdoList: IWisdo[];
}
