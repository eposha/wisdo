import NavigatorSVG from 'public/images/navigator-svg.svg';

import styled from 'styled-components';

export const HeaderNavigationWrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CurrentPage = styled.div`
	display: flex;
	align-items: center;
	font-size: 21px;
	font-weight: 700;
`;

export const NavigatorSVGUI = styled(NavigatorSVG)`
	margin-right: 10px;
`;

export const LinksWrapper = styled.div`
	display: flex;
`;

export const CurrentCategory = styled.div`
	display: flex;
	padding: 10px 15px;
	border-radius: 20px;
	background-color: #f1edff;
`;

export const CurrentPageText = styled.span`
	font-family: 'Open Sans', sans-serif;
	line-height: 20px;
	font-size: 15px;
	font-weight: 700;
	color: #8b5fff;
`;
