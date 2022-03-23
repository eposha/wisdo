import CommunitiesSVG from 'public/images/communities-svg.svg';
import MentorsSVG from 'public/images/mentors-svg.svg';
import styled, { css } from 'styled-components';

export const SidebarWrapper = styled.aside`
	padding: 43px 20px;
`;

export const SidebarNavigationList = styled.ul`
	display: flex;
	flex-direction: column;
`;

export const SidebarNavigationItem = styled.li`
	margin-bottom: 10px;
`;

export const SidebarNavigationLink = styled.a<{ $isActive: boolean }>`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 223px;
	height: 48px;
	padding: 14px 13px 14px 10px;
	border-radius: 3px;
	font-size: 18px;
	font-weight: 700;
	letter-spacing: 0.8px;
	color: #403d37;

	${({ $isActive }) =>
		$isActive &&
		`color: #8b58ff;
         background-color: #f1edff;    
         svg path {
             fill: #8B58FF;
             
         }  
        `};

	&:hover {
		color: #8b58ff;
		background-color: #f1edff;
		svg path {
			fill: #8b58ff;
		}
	}
`;

export const IconCSS = css`
	margin-right: 10px;
`;

export const CommunitiesSVGUI = styled(CommunitiesSVG)`
	${IconCSS}
`;
export const MentorsSVGUI = styled(MentorsSVG)`
	${IconCSS}
`;
