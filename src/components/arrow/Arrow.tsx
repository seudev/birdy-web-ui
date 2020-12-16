import { FC } from 'react';
import cx from 'classnames';

import styles from './Arrow.module.scss';

interface ArrowProps {
    direction: 'up' | 'left' | 'down' | 'right';
    className?: string;
    color?: string;
    size?: string;
}

const Arrow: FC<ArrowProps> = ({ direction, className, size, color }) => {
    return (
        <i
            className={cx(styles.arrow, styles[direction], className)}
            style={{
                borderColor: color,
                padding: size,
                borderRightWidth: size,
                borderBottomWidth: size,
            }}
        />
    );
};

export default Arrow;
