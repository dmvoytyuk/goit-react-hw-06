import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice";

import styles from "./ContactList.module.css";

const ContactList = () => {
	const contacts = useSelector(selectContacts);
	const filter = useSelector(selectNameFilter);
	const filteredContacts = contacts.filter((contact) => {
		return contact.name.toLowerCase().includes(filter.toLowerCase());
	});
	return (
		<ul className={styles.contactList}>
			{filteredContacts.map((contact) => {
				return <Contact key={contact.id} contact={contact} />;
			})}
		</ul>
	);
};

export default ContactList;
