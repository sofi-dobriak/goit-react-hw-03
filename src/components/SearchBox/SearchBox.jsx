import s from './SearchBox.module.css';
import { useId } from 'react';

const SearchBox = ({ value, onFilter }) => {
    const findInputId = useId();

    return (
        <section className={s.searchFormSection}>
            <label htmlFor={findInputId} className={s.label}>
                Find contacts by name
            </label>
            <input
                className={s.input}
                id={findInputId}
                value={value}
                onChange={e => onFilter(e.target.value)}
            ></input>
        </section>
    );
};

export default SearchBox;
