import { useState, useCallback } from 'react';

import { NextPage } from 'next';

import Copyright from '../components/copyright/Copyright';
import Loader from '../components/loader/Loader';
import SearchBar from '../components/search-bar/SearchBar';
import Music from '../model/music';
import MusicContainer from '../components/music/MusicContainer';

import styles from './Index.module.scss';

const Index: NextPage = () => {
    const [query, setQuery] = useState<string>('');
    const [musics, setMusics] = useState<Music[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [responseInfo, setResponseInfo] = useState<string>('');

    const onSearch = useCallback((query) => {
        setQuery(query);
        setResponseInfo('');
        setMusics([]);
        setLoading(true);
        fetch(`${process.env.NEXT_PUBLIC_BIRDY_API_BASE_URL}/music/suggestion?q=${query}`)
            .then(async (res) => {
                if (res.ok) {
                    const musics = await res.json().then();
                    setResponseInfo(musics.length === 0 ? 'No musics related to your search were found.' : '');
                    setMusics(musics);
                } else {
                    setResponseInfo(`${res.status} Sorry, an error occurred while searching.`);
                    console.error(res);
                }
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className={styles.root}>
            <header className={styles.headerWrapper}>
                <div className={styles.header}>
                    <img className={styles.brand} src='/birdy.png' />
                    <div className={styles.search}>
                        <h1>Birdy</h1>
                        <SearchBar onSearch={onSearch} placeholder='type a city name or a geo coordinate' />
                        <div className={styles.responseInfo}>{responseInfo}</div>
                    </div>
                </div>
            </header>
            <main className={styles.bodyWrapper}>
                <div className={styles.body}>
                    <Loader
                        className={styles.loader}
                        enabled={loading}
                        size='120px'
                        borderSize='8px'
                        primaryColor='black'
                    />
                    <MusicContainer musics={musics} />
                    {!loading && musics.length > 0 && (
                        <button className={styles.loadMore} type='button' onClick={() => onSearch(query)}>
                            Load more
                        </button>
                    )}
                </div>
            </main>
            <footer className={styles.footer}>
                <Copyright />
            </footer>
        </div>
    );
};

export default Index;
