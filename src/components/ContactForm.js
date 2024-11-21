import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ContactForm.scss';


const ContactForm = () => {
    const initialValues = { name: '', email: '', message: '' };
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log('Form data', values);
        setSubmitting(false);
        resetForm();
    };

    return (
        <div className="contact-form">
            <h1>Contact Us</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field type="text" id="name" name="name" />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <Field as="textarea" id="message" name="message" />
                            <ErrorMessage name="message" component="div" className="error" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;
