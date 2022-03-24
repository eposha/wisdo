export const convertNumberToCounts = (membersCount: number) => {
	switch (true) {
		case membersCount < 1000:
			return membersCount;

		case membersCount >= 1000:
		case membersCount < 1000_000:
			return Math.round(membersCount / 1000) + 'K';

		default:
			return Math.round(membersCount / 1000_000) + 'M';
	}
};
