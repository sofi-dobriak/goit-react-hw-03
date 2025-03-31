import s from './SearchBox.module.css';
import { useId } from 'react';

const SearchBox = ({ value, onFilter }) => {
    const filterInputID = useId();
    return (
        <section className={s.searchFormSection}>
            <label className={s.label} htmlFor={filterInputID}>
                Find contacts by name
            </label>
            <input
                className={s.input}
                placeholder='Mark'
                id={filterInputID}
                value={value}
                onChange={e => onFilter(e.target.value)}
            ></input>
        </section>
    );
};

export default SearchBox;
