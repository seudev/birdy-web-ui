import { FC } from 'react';
import cx from 'classnames';

import styles from './Copyright.module.scss';

interface CopyrightProps {
    className?: string;
}

const Copyright: FC<CopyrightProps> = ({ className }) => {
    const copyright = `Copyright © 2020 - ${new Date().getFullYear()} Seudev`;

    return (
        <section className={cx(styles.copyright, className)}>
            <span>{copyright}</span>
        </section>
    );
};

export default Copyright;
