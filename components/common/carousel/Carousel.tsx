import React, { FC, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

import { IWisdoItem } from 'src/types/wisdo';

import styled from 'styled-components';

import useEmblaCarousel from 'embla-carousel-react';

const Embla = styled.div`
	position: relative;
	background-color: #f7f7f7;

	width: 732px;
	margin-left: 0;
`;

const Viewport = styled.div`
	overflow: hidden;
	width: 100%;
`;

const Container = styled.div`
	display: flex;
	user-select: none;
	-webkit-touch-callout: none;
	-khtml-user-select: none;
	-webkit-tap-highlight-color: transparent;
`;

const Slide = styled.div`
	position: relative;
	width: 168px;
	max-width: 168px;
	height: 117px;
	min-width: 25%;
`;

const SlideInner = styled.div`
	position: relative;
	margin-right: 20px;
	overflow: hidden;

	height: 117px;
`;

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
		<Embla>
			<Viewport ref={viewportRef}>
				<Container>
					{slides.map(({ image }) => (
						<Slide key={image}>
							<SlideInner>
								<Image src={image} objectFit="cover" layout="fill" alt="image" />
							</SlideInner>
						</Slide>
					))}
				</Container>
			</Viewport>
			{/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
			<NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
		</Embla>
	);
};

export default Carousel;
