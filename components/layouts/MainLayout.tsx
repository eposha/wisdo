import { FC, ReactChild } from 'react';

import { MainContainer } from 'styles/common/main-container';

import Header from '../header/Header';
import Footer from 'components/footer/Footer';

import * as UI from 'styles/common/main-layout';

interface IMainLayout {
	children: ReactChild;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
	return (
		<UI.MainLayoutWrapper>
			<Header />
			<MainContainer>{children}</MainContainer>
			<Footer />
		</UI.MainLayoutWrapper>
	);
};

export default MainLayout;
