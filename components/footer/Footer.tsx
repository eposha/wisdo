import { MainContainer } from 'styles/common/main-container';

import { ContentSeparator } from '../layouts';

import { SignUpButton } from 'components/common';

import * as UI from 'styles/footer/footer';

const FooterData = () => {
	return (
		<UI.FooterDataWrapper>
			<UI.FooterDataTextWrapper>
				<UI.FooterDataText $isTitle>Join the conversation!</UI.FooterDataText>
				<UI.FooterDataText>
					Sign in to talk to real people, whom have been there and can help.
				</UI.FooterDataText>
			</UI.FooterDataTextWrapper>
			<SignUpButton />
		</UI.FooterDataWrapper>
	);
};

const Footer = () => {
	return (
		<UI.FooterContainer>
			<MainContainer>
				<ContentSeparator RightSideComponent={<FooterData />} />
			</MainContainer>
		</UI.FooterContainer>
	);
};

export default Footer;
