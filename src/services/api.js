import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6411be285d0c49b7c5b8be74.mockapi.io/api/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
