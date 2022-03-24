import { FC } from 'react';

import CarouselArrowSVG from 'public/images/carousel-arrow-svg.svg';

import * as UI from 'styles/carousel/button';

interface IButtonProps {
	enabled: boolean;
	onClick: () => void;
	isRightButton?: boolean;
}

export const ArrowButton: FC<IButtonProps> = ({ enabled, onClick, isRightButton }) => (
	<UI.ButtonSlider onClick={onClick} disabled={!enabled} $isRightButton={isRightButton}>
		<CarouselArrowSVG />
	</UI.ButtonSlider>
);
