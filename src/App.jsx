import Title from './components/Title/Title';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import data from './assets/data/contact-data.json';
import { useEffect, useState } from 'react';

function App() {
    const [contacts, setContacts] = useState(
        () => JSON.parse(localStorage.getItem('contacts-key')) ?? data
    );

    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('contacts-key', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = newContact => {
        setContacts(prevContacts => {
            return [...prevContacts, newContact];
        });
    };

    const deleteContacts = contactID => {
        setContacts(prevContacts => {
            return prevContacts.filter(contact => contact.id !== contactID);
        });
    };

    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <Title />
            <ContactForm onAddContact={addContact} />
            <SearchBox value={filter} onFilter={setFilter} />
            <ContactList contacts={visibleContacts} onDelete={deleteContacts} />
        </>
    );
}

export default App;
