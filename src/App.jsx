import Title from './components/Title/Title';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import data from './assets/data/contact-data.json';

function App() {
    return (
        <>
            <Title />
            <ContactForm />
            <SearchBox />
            <ContactList data={data} />
        </>
    );
}

export default App;
