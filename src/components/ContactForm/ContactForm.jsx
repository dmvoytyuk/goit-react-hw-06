import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {nanoid} from "nanoid";
import {addContact} from "../../redux/contactsSlice.js";

import styles from "./ContactForm.module.css";

const INIT_CONTACT_FORM = {
	contactName: "",
	contactNumber: "",
};

const contactValidationScheme = Yup.object({
	contactName: Yup.string()
		.min(3, "Too short")
		.max(50, "Too long")
		.required("Required"),
	contactNumber: Yup.string()
		.min(3, "Too short")
		.max(50, "Too long")
		.required("Required"),
});

const ContactForm = () => {
	const dispatch = useDispatch();
	const handleSubmit = (formValues, actions) => {
		const newContact = {
			id: nanoid(),
			name: formValues.contactName,
			number: formValues.contactNumber,
		};
		dispatch(addContact(newContact));
		actions.resetForm();
	};

	return (
		<Formik
			initialValues={INIT_CONTACT_FORM}
			validationSchema={contactValidationScheme}
			onSubmit={handleSubmit}
		>
			<Form className={styles.contactForm}>
				<label className={styles.contactLabel}>
					{"Name"}
					<Field type="text" name="contactName" />
					<ErrorMessage
						className={styles.contactValidationError}
						component="p"
						name="contactName"
					/>
				</label>
				<label className={styles.contactLabel}>
					{"Number"}
					<Field type="tel" name="contactNumber" />
					<ErrorMessage
						className={styles.contactValidationError}
						component="p"
						name="contactNumber"
					/>
				</label>
				<button type="submit">Add contact</button>
			</Form>
		</Formik>
	);
};

export default ContactForm;
