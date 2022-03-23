import { FC, ReactChild } from 'react';

import { MainContainer } from 'styles/common/main-container';

import Header from '../header/Header';
import Footer from 'components/footer/Footer';

import * as UI from 'styles/common/main-layout';
import Sidebar from 'components/sidebar/Sidebar';
import ContentSeparator from './ContentSeparator';

interface IMainLayout {
	children: ReactChild;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
	return (
		<UI.MainLayoutWrapper>
			<Header />
			<MainContainer>
				<ContentSeparator LeftSideComponent={<Sidebar />} RightSideComponent={children} />
			</MainContainer>
			<Footer />
		</UI.MainLayoutWrapper>
	);
};

export default MainLayout;
