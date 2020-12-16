import { FC, memo } from 'react';
import cx from 'classnames';

import styles from './Loader.module.scss';

interface LoaderProps {
    enabled: boolean;
    className?: string;
    size?: string;
    borderSize?: string;
    primaryColor?: string;
    secondaryColor?: string;
}

const Loader: FC<LoaderProps> = memo(
    ({
        enabled,
        className,
        size = '50px',
        borderSize = '5px',
        primaryColor = '#3498db',
        secondaryColor = '#f3f3f3',
    }) => {
        if (!enabled) {
            return null;
        }
        return (
            <div
                className={cx(styles.loader, className)}
                style={{
                    width: size,
                    height: size,
                    borderColor: secondaryColor,
                    borderTopColor: primaryColor,
                    borderWidth: borderSize,
                }}
            />
        );
    }
);

export default Loader;
