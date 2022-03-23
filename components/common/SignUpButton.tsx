import Link from 'next/link';

import * as UI from 'styles/common/signup-button';

const SignUpButton = () => {
	return (
		<Link href="/auth/signUp" passHref>
			<UI.LinkButton $isSignUp>Sign up</UI.LinkButton>
		</Link>
	);
};

export default SignUpButton;
