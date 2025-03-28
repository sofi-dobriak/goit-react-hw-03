import { Field, Form, Formik } from 'formik';
import s from './SearchBox.module.css';
import { useId } from 'react';

const SearchBox = () => {
    const findInputId = useId();

    return (
        <section className={s.searchFormSection}>
            <Formik>
                <Form className={s.form}>
                    <label htmlFor={findInputId} className={s.label}>
                        Find contacts by name
                    </label>
                    <Field className={s.input} id={findInputId}></Field>
                </Form>
            </Formik>
        </section>
    );
};

export default SearchBox;
