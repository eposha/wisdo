import { MainContainer } from 'styles/common/main-container';

import { ContentSeparator } from '../layouts';
import { MainLogo } from 'components/logo';
import HeaderNavigation from './HeaderNavigation';

import * as UI from 'styles/header/header';

const Header = () => {
	return (
		<UI.HeaderContainer>
			<MainContainer>
				<ContentSeparator
					LeftSideComponent={<MainLogo />}
					RightSideComponent={<HeaderNavigation />}
				/>
			</MainContainer>
		</UI.HeaderContainer>
	);
};

export default Header;
