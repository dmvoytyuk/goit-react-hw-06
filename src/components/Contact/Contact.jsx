import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice.js";

// @ts-ignore
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
	const dispatch = useDispatch();

	return (
		<li className={styles.contact}>
			<div>
				<p>{contact.name}</p>
				<p>{contact.number}</p>
			</div>
			<button onClick={() => dispatch(deleteContact(contact.id))}>
				Delete
			</button>
		</li>
	);
};

export default Contact;
