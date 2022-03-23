import { FC, ReactElement } from 'react';

import styled from 'styled-components';

const ContentSeparatorWrapper = styled.div`
	display: flex;
`;

const LeftSide = styled.div`
	flex: 1;
`;

const RightSide = styled.div`
	flex: 3;
`;

interface IContentSeparator {
	LeftSideComponent?: ReactElement;
	RightSideComponent?: ReactElement;
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
