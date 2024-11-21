import './ContactPage.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactPage = () => {
const initialValues = {
name: '',
email: '',
message: '',
}
const validationSchema = Yup.object({
name: Yup.string().required('Name is required'),
email: Yup.string().email('Invalid email').required('Email is required'),
message: Yup.string().required('Message is required'),
})

const handleSubmit = (values, {setSubmitting, resetForm}) => {
console.log('Form values:', values);
setSubmitting(false);
resetForm();
}

return (
<div className="contact-form">
<h1>Contact</h1>
<Formik
initialValues={initialValues}
validationSchema={validationSchema}
onSubmit={handleSubmit}
>
{({isSubmitting}) => (
<Form>
    <div>
        <label htmlFor="name">Name: </label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name ="name" component = "div" className = "error" />
    </div>
    <div>
        <label htmlFor="email">Email: </label>
        <Field type="text" id="email" name="email" />
        <ErrorMessage name ="email" component = "div" className = "error" />
    </div>
    <div>
        <label htmlFor="message">Message: </label>
        <Field as="textarea" id="message" name="message" />
        <ErrorMessage name ="message" component = "div" className = "error" />
    </div>
    <button type="submit" disabled = {isSubmitting}>Submit</button>
</Form>

)}
</Formik>
</div>
)
}

export default ContactPage