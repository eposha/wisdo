import styled from 'styled-components';

export const FooterContainer = styled.footer`
	display: flex;
	justify-content: center;
	margin-top: auto;
	padding: 20px 0;
	background-color: #f1edff;
`;

export const FooterDataTextWrapper = styled.div`
	margin-right: 50px;
`;

export const FooterDataWrapper = styled.div`
	display: flex;
	margin: 0 38px;
`;

export const FooterDataText = styled.div<{ $isTitle?: boolean }>`
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;

	color: #403d36;

	${({ $isTitle }) => $isTitle && `font-weight: 700`}
`;
