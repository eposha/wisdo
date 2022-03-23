import { LoginButton, SignUpButton } from 'components/common';

import * as UI from 'styles/header/header-navigation';

const HeaderNavigation = () => {
	return (
		<UI.HeaderNavigationWrapper>
			<UI.CurrentPage>Explore</UI.CurrentPage>
			<UI.LinksWrapper>
				<UI.CurrentCategory>
					<UI.NavigatorSVGUI />
					<UI.CurrentPageText>Explore communities</UI.CurrentPageText>
				</UI.CurrentCategory>
				<LoginButton />
				<SignUpButton />
			</UI.LinksWrapper>
		</UI.HeaderNavigationWrapper>
	);
};

export default HeaderNavigation;
