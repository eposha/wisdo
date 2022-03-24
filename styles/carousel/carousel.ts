import NextImage from 'next/image';
import styled from 'styled-components';

export const Embla = styled.div`
	position: relative;
	margin-left: 0;
	min-height: 190px;
	width: 732px;
	background-color: #f7f7f7;
`;

export const Viewport = styled.div`
	overflow: hidden;
	width: 100%;
`;

export const Container = styled.div`
	display: flex;
	margin-left: -20px;
	user-select: none;
	-webkit-touch-callout: none;
	-khtml-user-select: none;
	-webkit-tap-highlight-color: transparent;
`;

export const Slide = styled.div`
	position: relative;
	padding-left: 20px;
	min-width: 25%;
`;

export const SlideInner = styled.div`
	position: relative;
	height: 100%;
	overflow: hidden;
`;

export const ImageWrapper = styled.div`
	position: relative;
	height: 117px;
`;

export const Image = styled(NextImage)`
	border-radius: 8px;
`;

export const CardTitle = styled.div`
	margin-top: 13px;
	font-size: 16px;
	font-weight: 700;
	line-height: 1.25;
	color: #403d36;
`;

export const CountMembers = styled.div`
	margin-top: 1px;
	opacity: 0.7;
	font-size: 12px;
	line-height: 1.58;
	color: #373c3f;
`;
