import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import contacts from "../../contacts.json";
import { nanoid } from "nanoid";

function App() {
	const [contactList, setContactList] = useState(() => {
		if (localStorage.getItem("contacts")) {
			return JSON.parse(localStorage.getItem("contacts"));
		} else {
			return contacts;
		}
	});
	const [searchBoxValue, setSearchBoxValue] = useState("");

	const addNewContact = (contact) => {
		const newContact = {
			id: nanoid(),
			name: contact.contactName,
			number: contact.contactNumber,
		};

		setContactList((contactList) => {
			return [...contactList, newContact];
		});
	};

	const deleteContact = (contactId) => {
		setContactList((contactList) => {
			return contactList.filter((contact) => contact.id !== contactId);
		});
	};

	useEffect(() => {
		localStorage.setItem("contacts", JSON.stringify(contactList));
	}, [contactList]);

	const searchBoxOnChange = (e) => {
		setSearchBoxValue((prevValue) => e.target.value);
	};

	const filteredContacts = contactList.filter((contact) => {
		return contact.name.toLowerCase().includes(searchBoxValue.toLowerCase());
	});

	return (
		<>
			<div>
				<h1>Phonebook</h1>
				<ContactForm addNewContact={addNewContact} />
				<SearchBox
					value={searchBoxValue}
					searchBoxOnChange={searchBoxOnChange}
				/>
				<ContactList
					contacts={filteredContacts}
					deleteContact={deleteContact}
				/>
			</div>
		</>
	);
}

export default App;
