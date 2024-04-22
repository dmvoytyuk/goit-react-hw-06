import styles from "./Contact.module.css";

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={styles.contact}>
      <div className={styles.contactInfo}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </li>
  );
};

export default Contact;
