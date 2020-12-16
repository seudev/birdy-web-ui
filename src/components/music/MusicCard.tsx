import { FC, memo, useState, useEffect } from 'react';
import cx from 'classnames';

import Music, { Image, Artist } from '../../model/music';

import Arrow from '../arrow/Arrow';
import styles from './Music.module.scss';

const idealImageSize = 64;

interface MusicProps {
    music: Music;
    className?: string;
    expanded?: boolean;
    onExpand: (music?: Music, expanded?: boolean) => void;
}

interface MusicDetailProps {
    music: Music;
    open: boolean;
}

interface EmbedContainerProps {
    description: string;
    embedUrl?: string;
    externalUrl?: string;
    className?: string;
}

const getIdealImage = (images?: Image[]): Image => {
    return images
        ?.filter((i: Image) => i.width >= idealImageSize)
        .reduce((x: Image, y: Image) => (x.width <= y.width ? x : y));
};

const getArtistNames = (artists?: Artist[]): string => {
    if (artists) {
        const firstArtistName = artists?.[0].name;

        return artists.length > 1 ? `${firstArtistName} and others` : firstArtistName;
    }
    return null;
};

const EmbedContainer: FC<EmbedContainerProps> = memo(({ className, description, embedUrl, externalUrl }) => {
    if (!embedUrl) {
        return null;
    }

    return (
        <div className={className}>
            <h4>
                <span>{description}</span>
                <a className={styles.externalLink} target='_blank' href={externalUrl}>
                    <img src='/link.png' width={16} height={16} />
                </a>
            </h4>

            <iframe className={styles.iframe} src={embedUrl} />
        </div>
    );
});

const MusicDetail: FC<MusicDetailProps> = memo(({ open, music }) => {
    const [render, setRender] = useState<boolean>(open);

    useEffect(() => {
        if (!render && open) {
            setRender(true);
        }
    }, [open]);

    if (!render) {
        return null;
    }

    return (
        <div className={cx(styles.detail, open ? styles.open : '')}>
            <EmbedContainer
                className={styles.embedMusic}
                description='Music'
                embedUrl={music.embedUrl}
                externalUrl={music.externalUrl}
            />
            <EmbedContainer
                className={styles.embedAlbum}
                description='Album'
                embedUrl={music.album?.embedUrl}
                externalUrl={music.album?.externalUrl}
            />
        </div>
    );
});

const MusicCard: FC<MusicProps> = memo(({ music, className, expanded, onExpand }) => {
    const image = getIdealImage(music.album?.images);
    const artists = getArtistNames(music.artists);

    return (
        <div className={cx(styles.card, className)}>
            <div className={styles.summary} onClick={() => onExpand(music, expanded)}>
                <div className={styles.left}>
                    <img src={image.url} alt='Picture of the album' width={image.width} height={image.heigth} />
                </div>
                <div className={styles.right}>
                    <h3 className={styles.name}>{music.name}</h3>
                    <div className={styles.artists}>{artists}</div>
                </div>
                <Arrow direction={expanded ? 'up' : 'down'} />
            </div>
            <MusicDetail open={expanded} music={music} />
        </div>
    );
});

export default MusicCard;
