import Link from 'next/link';

import * as UI from 'styles/common/login-button';

const LoginButton = () => {
	return (
		<Link href="/auth/login" passHref>
			<UI.LinkButton>Log in</UI.LinkButton>
		</Link>
	);
};

export default LoginButton;
