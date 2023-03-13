import style from './App.module.css';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../redux/contacts/contacts-slice';
import { setFilter } from '../redux/filter/filter-slice';
import {
  getAllContacts,
  getFilteredContacts,
} from '../redux/contacts/contacts-selectors';
import { getFilter } from '../redux/filter/filter-selectors';

export default function App() {
  const contacts = useSelector(getAllContacts);
  const visibleContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onAddContact = ({ name, number }) => {
    dispatch(addContact({ name, number }));
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const onChangeFilter = ({ currentTarget }) => {
    dispatch(setFilter(currentTarget.value));
  };

  return (
    <div className={style.App}>
      <h1 className={style.title}>
        React homework "Phonebook" by Anatoliia Riabchenko
      </h1>
      <div className={style.section}>
        <h2 className={style.subtitle}>Phonebook</h2>
        <Form onSubmit={onAddContact} contacts={contacts} />

        <h2 className={style.subtitle}>Contacts</h2>
        <Filter value={filter} onChange={onChangeFilter} />
        <ContactList contacts={visibleContacts} onDelete={onDeleteContact} />
      </div>
    </div>
  );
}
