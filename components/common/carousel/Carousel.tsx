import React, { FC, useState, useEffect, useCallback } from 'react';

import { IWisdoItem } from 'src/types/wisdo';
import { ArrowButton } from 'components/common/carousel/Buttons';
import useEmblaCarousel from 'embla-carousel-react';
import { convertNumberToCounts } from 'src/helpers/convertNumberToCounts';

import * as UI from 'styles/carousel/carousel';

interface ICarousel {
	slides: IWisdoItem[];
}

const Carousel: FC<ICarousel> = ({ slides }) => {
	const [viewportRef, embla] = useEmblaCarousel({
		slidesToScroll: 4,
		skipSnaps: false,
	});
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
	const onSelect = useCallback(() => {
		if (!embla) return;
		setPrevBtnEnabled(embla.canScrollPrev());
		setNextBtnEnabled(embla.canScrollNext());
	}, [embla]);

	useEffect(() => {
		if (!embla) return;
		embla.on('select', onSelect);
		onSelect();
	}, [embla, onSelect]);

	return (
		<UI.Embla>
			<UI.Viewport ref={viewportRef}>
				<UI.Container>
					{slides.map(({ title, image, membersCount }) => (
						<UI.Slide key={image}>
							<UI.SlideInner>
								<UI.ImageWrapper>
									<UI.Image
										src={image}
										objectFit="cover"
										layout="fill"
										alt="image"
										priority
									/>
								</UI.ImageWrapper>
								<UI.CardTitle>{title}</UI.CardTitle>
								<UI.CountMembers>
									{convertNumberToCounts(membersCount) + ' Members'}
								</UI.CountMembers>
							</UI.SlideInner>
						</UI.Slide>
					))}
				</UI.Container>
			</UI.Viewport>
			{slides.length > 4 && (
				<>
					<ArrowButton onClick={scrollPrev} enabled={prevBtnEnabled} />
					<ArrowButton onClick={scrollNext} enabled={nextBtnEnabled} isRightButton />
				</>
			)}
		</UI.Embla>
	);
};

export default Carousel;
