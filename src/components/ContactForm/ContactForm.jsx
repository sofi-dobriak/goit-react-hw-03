import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({
    contactName: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!').required('Required'),
    contactPhone: Yup.string()
        .matches(/^[\d-]+$/, 'Phone number must contain only digits')
        .min(5, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
});

const initialValues = {
    contactName: '',
    contactPhone: '',
};

const ContactForm = ({ onAddContact }) => {
    const handleSubmit = (values, actions) => {
        onAddContact({
            id: nanoid(),
            name: values.contactName,
            number: values.contactPhone,
        });

        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
            <Form className={s.form}>
                <div className={s.labelInputContainer}>
                    <label className={s.label} htmlFor='contactName'>
                        Name
                    </label>
                    <Field className={s.input} type='text' name='contactName' />
                    <ErrorMessage name='contactName' component='span' className={s.error} />
                </div>

                <div className={s.labelInputContainer}>
                    <label className={s.label} htmlFor='contactPhone'>
                        Number
                    </label>
                    <Field className={s.input} type='tel' name='contactPhone' />
                    <ErrorMessage name='contactPhone' component='span' className={s.error} />
                </div>

                <button type='submit'>Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
