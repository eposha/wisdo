import styled, { css } from 'styled-components';

export const MainContentUI = styled.main`
	display: flex;
	flex-direction: column;
	margin-top: 30px;
`;

export const Category = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 26px;
`;

export const TitleCSS = css`
	margin: 0;
	opacity: 0.7;
	font-weight: 600;

	letter-spacing: 1.1px;
	color: #403d37;
`;

export const Title = styled.h2`
	${TitleCSS}
	margin-bottom: 20px;
	font-size: 18px;
	line-height: 1.56;
`;

export const Subtitle = styled.h3`
	${TitleCSS}
	margin-bottom: 13px;
	font-size: 14px;
	line-height: 1.14;
`;
