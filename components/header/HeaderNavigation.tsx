import { useRouter } from 'next/router';
import { HEADER_EXPLORE_TEXT } from 'src/constants/header-explore';

import { LoginButton, SignUpButton } from 'components/common';

import * as UI from 'styles/header/header-navigation';

const HeaderNavigation = () => {
	const { pathname } = useRouter();
	return (
		<UI.HeaderNavigationWrapper>
			<UI.CurrentPage>Explore</UI.CurrentPage>
			<UI.LinksWrapper>
				<UI.CurrentCategory>
					<UI.NavigatorSVGUI />
					<UI.CurrentPageText>Explore {HEADER_EXPLORE_TEXT[pathname]}</UI.CurrentPageText>
				</UI.CurrentCategory>
				<LoginButton />
				<SignUpButton />
			</UI.LinksWrapper>
		</UI.HeaderNavigationWrapper>
	);
};

export default HeaderNavigation;
