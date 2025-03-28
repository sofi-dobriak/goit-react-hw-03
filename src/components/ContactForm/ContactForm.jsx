import s from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field } from 'formik';

const initialValues = {
    contactName: '',
    contactPhone: '',
};

const ContactForm = () => {
    const contactNameID = useId();
    const contactPhoneID = useId();

    const handleSubmit = (values, actions) => {
        actions.resetForm();
    };

    return (
        <section className={s.contactFormSection}>
            <Formik initialValues={{ initialValues }} onSubmit={handleSubmit}>
                <Form className={s.form}>
                    <div className={s.labelInputContainer}>
                        <label className={s.label} htmlFor={contactNameID}>
                            Name
                        </label>
                        <Field
                            className={s.input}
                            type='text'
                            name='contactName'
                            id={contactNameID}
                        />
                    </div>

                    <div className={s.labelInputContainer}>
                        <label className={s.label} htmlFor={contactPhoneID}>
                            Number
                        </label>
                        <Field
                            className={s.input}
                            type='tel'
                            name='contactPhone'
                            id={contactPhoneID}
                        />
                    </div>

                    <button>Add contact</button>
                </Form>
            </Formik>
        </section>
    );
};

export default ContactForm;
