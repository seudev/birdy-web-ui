import { FC, useState, memo, useCallback } from 'react';

import Music from '../../model/music';

import MusicCard from './MusicCard';
import styles from './Music.module.scss';

interface ContainerProps {
    musics: Music[];
}

const MusicContainer: FC<ContainerProps> = memo(({ musics }) => {
    const [expandedCard, setExpanded] = useState<string>();
    const onExpand = useCallback((music, expanded) => setExpanded(expanded ? null : music.id), []);

    return (
        <div className={styles.container}>
            {musics.map((music) => (
                <MusicCard key={music.id} music={music} expanded={music.id === expandedCard} onExpand={onExpand} />
            ))}
        </div>
    );
});

export default MusicContainer;
