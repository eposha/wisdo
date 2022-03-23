/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StyledComponent } from 'styled-components';
import * as UI from 'styles/sidebar/sidebar';

const navListItem: { path: string; linkName: string; LinkIcon: StyledComponent<any, any> }[] = [
	{ path: '/', linkName: 'Communities', LinkIcon: UI.CommunitiesSVGUI },
	{ path: '/mentors', linkName: 'Mentors', LinkIcon: UI.MentorsSVGUI },
];

const Sidebar = () => {
	const { pathname } = useRouter();

	return (
		<UI.SidebarWrapper>
			<UI.SidebarNavigationList>
				{navListItem.map(({ path, linkName, LinkIcon }) => (
					<UI.SidebarNavigationItem key={linkName}>
						<Link href={path} passHref>
							<UI.SidebarNavigationLink $isActive={pathname === path}>
								<LinkIcon />
								{linkName}
							</UI.SidebarNavigationLink>
						</Link>
					</UI.SidebarNavigationItem>
				))}
			</UI.SidebarNavigationList>
		</UI.SidebarWrapper>
	);
};

export default Sidebar;
