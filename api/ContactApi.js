import axios from 'axios';

const baseUrl = 'https://simple-contact-crud.herokuapp.com/';

const get = async () => {
  const { data } = await axios.get(`${baseUrl}contact`);
  
  return data.data;
}

const remove = async (id) => {
  const result = await axios.delete(`${baseUrl}contact/${id}`);
}

export default {
  get,
  remove
}