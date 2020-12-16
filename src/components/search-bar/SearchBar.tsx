import { FC, memo, useState, KeyboardEvent, ChangeEvent } from 'react';

import styles from './SearchBar.module.scss';

interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
    minLength?: number;
}

const SearchBar: FC<SearchBarProps> = memo(({ onSearch, placeholder, minLength = 1 }) => {
    const [query, setQuery] = useState<string>('');

    const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && query.length > minLength) {
            onSearch(query);
        }
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type='text'
                placeholder={placeholder}
                value={query}
                onKeyUp={onKeyUp}
                onChange={onChange}
            />
        </div>
    );
});

export default SearchBar;
