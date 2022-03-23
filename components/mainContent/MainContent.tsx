import { FC } from 'react';
import Carousel from 'components/common/carousel/Carousel';
import { IMain } from 'src/types/wisdo';

import styled, { css } from 'styled-components';

const MainContentUI = styled.main`
	display: flex;
	flex-direction: column;
	margin-top: 30px;
`;

const Category = styled.div`
	display: flex;
	flex-direction: column;
`;

const TitleCSS = css`
	margin: 0;
	opacity: 0.7;
	font-weight: 600;

	letter-spacing: 1.1px;
	color: #403d37;
`;

const Title = styled.h2`
	${TitleCSS}
	margin-bottom: 20px;
	font-size: 18px;
	line-height: 1.56;
`;

const Subtitle = styled.h3`
	${TitleCSS}
	font-size: 14px;
	line-height: 1.14;
`;

const CarouserWrapper = styled.div`
	width: 630px;
`;

const ItemsCards = styled.div`
	display: flex;
`;

const MainContent: FC<IMain> = ({ wisdoList }) => {
	console.log(wisdoList);
	return (
		<MainContentUI>
			{wisdoList.map(({ categoryName, items }) => (
				<Category key={categoryName}>
					<Title>{categoryName.toUpperCase()}</Title>
					<Subtitle>{'IDENTITY'}</Subtitle>
					<Carousel slides={items} />
				</Category>
			))}
		</MainContentUI>
	);
};

export default MainContent;
