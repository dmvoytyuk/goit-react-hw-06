import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
	return (
		<ul className={styles.contactList}>
			{contacts.map((contact) => {
				return (
					<Contact
						key={contact.id}
						contact={contact}
						deleteContact={deleteContact}
					/>
				);
			})}
		</ul>
	);
};

export default ContactList;
