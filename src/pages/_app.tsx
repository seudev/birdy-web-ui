import { FC } from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/app.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => {
    const canonicalUrl = process.env.NEXT_PUBLIC_URL;

    return (
        <>
            <Head>
                <title>Birdy</title>
                <meta charSet='utf-8' />
                <link rel='canonical' href={canonicalUrl} />
                <meta name='robots' content='index, follow' />
                <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />

                {/* Open Graph protocol meta tags. http://ogp.me | https://opengraphcheck.com */}
                <meta property='og:title' content='Birdy' />
                <meta property='og:site_name' content='Birdy' />
                <meta
                    property='og:description'
                    content='An app to search musics suggestion based in a given location.'
                />
                <meta property='og:type' content='website' />
                <meta property='og:url' content={canonicalUrl} />
                <meta property='og:locale' content='en' />

                <meta property='og:image' content='/birdy.jpg' />
                <meta property='og:image:width' content='512' />
                <meta property='og:image:height' content='512' />
                <meta property='og:image:type' content='image/jpg' />
                <meta property='og:image:alt' content='Birdy' />

                {/* https://realfavicongenerator.net/ */}
                <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                <link rel='manifest' href='/site.webmanifest' />
                <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#292929' />
                <meta name='msapplication-TileColor' content='#292929' />
                <meta name='theme-color' content='#292929' />

                {/* Roboto font. https://fonts.google.com/specimen/Roboto?sidebar.open=true&selection.family=Roboto:wght@400;500;900 */}
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&amp;display=swap'
                    rel='stylesheet'
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
