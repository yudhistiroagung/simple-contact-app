import axios from 'axios';

const endpoint = 'https://simple-contact-crud.herokuapp.com/contact';

const get = async () => {
  const { data } = await axios.get(`${endpoint}`);
  
  return data.data;
}

const remove = async (id) => {
  return axios.delete(`${endpoint}/${id}`);
}

const update = async (contact) => {
  const { id, ...updated } = contact;
  const { data } = await axios.put(`${endpoint}/id`, updated);

  return data.data;
}

const add = async (contact) => {
  const { data } = await axios.put(`${endpoint}/id`, contact);

  return data.data;
}

export default {
  add,
  get,
  update,
  remove,
}