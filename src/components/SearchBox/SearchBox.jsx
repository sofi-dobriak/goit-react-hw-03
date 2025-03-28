import s from './SearchBox.module.css';
import { useId } from 'react';

const SearchBox = () => {
    const findInputId = useId();

    return (
        <section className={s.searchFormSection}>
            <label htmlFor={findInputId} className={s.label}>
                Find contacts by name
            </label>
            <input className={s.input} id={findInputId}></input>
        </section>
    );
};

export default SearchBox;
