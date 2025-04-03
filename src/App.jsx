import Title from './components/Title/Title';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useEffect, useState } from 'react';

function App() {
    const [contacts, setContacts] = useState(
        () => JSON.parse(localStorage.getItem('contacts-key')) ?? []
    );
    const [filter, setFilter] = useState('');

    const addContacts = newContact => {
        setContacts(prevContacts => {
            return [...prevContacts, newContact];
        });
    };

    useEffect(() => {
        localStorage.setItem('contacts-key', JSON.stringify(contacts));
    }, [contacts]);

    const deleteContacts = contactID => {
        setContacts(prevContacts => {
            return prevContacts.filter(contact => contact.id !== contactID);
        });
    };

    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const hasContacts = visibleContacts.length > 0;

    return (
        <>
            <Title />
            <ContactForm onAddContacts={addContacts} />
            <SearchBox value={filter} onFilter={setFilter} />

            {hasContacts && <ContactList contacts={visibleContacts} onDelete={deleteContacts} />}
            {!hasContacts && <p className='noContacts'>No contacts</p>}
        </>
    );
}

export default App;
