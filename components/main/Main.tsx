import { MainContainer } from 'styles/common/main-container';

import { ContentSeparator } from '../layouts';
import Sidebar from '../sidebar/Sidebar';

const Main = () => {
	return (
		<MainContainer>
			<ContentSeparator
				LeftSideComponent={<Sidebar />}
				// RightSideComponent={<HeaderNavigation />}
			/>
		</MainContainer>
	);
};

export default Main;
