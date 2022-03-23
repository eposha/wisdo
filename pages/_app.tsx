import { GlobalStyle } from 'styles/globalStyles';
import type { AppProps } from 'next/app';

import { MainLayout } from 'components/layouts';

import Axios from 'axios';

Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</>
	);
}

export default MyApp;
