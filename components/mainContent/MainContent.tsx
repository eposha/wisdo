import { FC } from 'react';
import Carousel from 'components/common/carousel/Carousel';
import { IMain } from 'src/types/wisdo';

import * as UI from 'styles/main-content';

const MainContent: FC<IMain> = ({ wisdoList }) => {
	return (
		<UI.MainContentUI>
			{wisdoList.map(({ categoryName, items }) => (
				<UI.Category key={categoryName}>
					<UI.Title>{categoryName.toUpperCase()}</UI.Title>
					<UI.Subtitle>{'IDENTITY'}</UI.Subtitle>
					<Carousel slides={items} />
				</UI.Category>
			))}
		</UI.MainContentUI>
	);
};

export default MainContent;
