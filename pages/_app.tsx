import { GlobalStyle } from 'styles/globalStyles';
import type { AppProps } from 'next/app';

import { MainLayout } from 'components/layouts';

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
