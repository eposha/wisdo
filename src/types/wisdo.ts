export interface IWisdoItem {
	title: string;
	image: string;
	description: string;
	membersCount: number;
	lifeChallengeIds: string;
}

export interface IWisdo {
	categoryName: string;
	items: IWisdoItem[];
}

export interface IMain {
	wisdoList: IWisdo[];
}
