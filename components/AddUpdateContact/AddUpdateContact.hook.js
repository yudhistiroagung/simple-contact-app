import { useCallback, useState } from 'react';
import { useToast } from 'native-base';

import ContactApi from '../../api/ContactApi';

const useAddUpdateContact = ({ navigation, route }) => {
  const { contact } = route.params || {};
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  
  const isUpdate = !!contact;
  const initialValues = isUpdate
    ? { firstName: contact.firstName, lastName: contact.lastName, age: contact.age }
    : {};

  const goBack = () => navigation.goBack();

  const deleteContact = useCallback(async () => {
    setLoading(true);
    try {
      await ContactApi.remove(contact.id);
      goBack();
      toast.show({ title: `${newContact.firstName} berhasil dihapus!` })
    } catch (e) {
      toast.show({ title: 'Terjadi kesalahan dalam menghapus contact!' })
    } finally {
      setLoading(false);
    }
  }, [contact, goBack, setLoading]);

  const addContact = useCallback(async (newContact) => {
    setLoading(true);
    try {
      await ContactApi.add(newContact);
      goBack();
      toast.show({ title: `${newContact.firstName} berhasil ditambahkan!` })
    } catch(e) {
      toast.show({ title: 'Terjadi kesalahan!' })
    } finally {
      setLoading(false);
    }
  }, [goBack, setLoading]);

  const updateContact = useCallback(async (updatedContact) => {
    try {
      const payload = {
        ...contact,
        ...updatedContact
      };
      await ContactApi.update(payload);
      goBack();
      toast.show({ title: `${payload.firstName} berhasil di update!` })
    } catch(e) {
      toast.show({ title: 'Terjadi kesalahan!' })
    }
  }, [contact, goBack]);

  return {
    initialValues,
    isUpdate,
    loading,
    contact,
    goBack,
    addContact,
    updateContact,
    deleteContact,
  };
};

export default useAddUpdateContact;
