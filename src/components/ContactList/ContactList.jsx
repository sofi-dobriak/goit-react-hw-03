import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ data }) => {
    return (
        <ul className={s.contactsList}>
            {data.map(({ id, name, number }) => (
                <Contact key={id} name={name} number={number} />
            ))}
        </ul>
    );
};

export default ContactList;
