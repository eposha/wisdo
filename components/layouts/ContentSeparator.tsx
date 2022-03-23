import { FC, ReactChild, ReactElement } from 'react';

import styled from 'styled-components';

const ContentSeparatorWrapper = styled.div`
	display: flex;
`;

const LeftSide = styled.div`
	flex: 2;
`;

const RightSide = styled.div`
	flex: 5;
`;

interface IContentSeparator {
	LeftSideComponent?: ReactElement;
	RightSideComponent?: ReactElement | ReactChild;
}

const ContentSeparator: FC<IContentSeparator> = ({ LeftSideComponent, RightSideComponent }) => {
	return (
		<ContentSeparatorWrapper>
			<LeftSide>{LeftSideComponent || ''}</LeftSide>
			<RightSide>{RightSideComponent || ''}</RightSide>
		</ContentSeparatorWrapper>
	);
};

export default ContentSeparator;
