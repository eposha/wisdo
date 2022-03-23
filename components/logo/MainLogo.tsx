import MainLogoSVG from '/public/images/main-logo-svg.svg';

import styled from 'styled-components';

const MainLogoWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const LogoText = styled.span`
	margin-left: 10px;
	font-size: 21px;
	font-weight: 700;
`;

const MainLogo = () => (
	<MainLogoWrapper>
		<MainLogoSVG />
		<LogoText>Wisdo</LogoText>
	</MainLogoWrapper>
);

export default MainLogo;
