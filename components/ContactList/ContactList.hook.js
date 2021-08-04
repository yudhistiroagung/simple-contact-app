import { useCallback, useEffect, useState } from 'react';
import { useToast } from 'native-base';
import { useFocusEffect } from '@react-navigation/native';

import ContactApi from '../../api/ContactApi';

const useContactList = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const getContacts = useCallback(async () => {
    setLoading(true);
    try {
      const result = await ContactApi.get();
      setData([
        ...data.slice(0,0),
        ...result
      ]);
    } catch (e) {
      toast.show({ title: 'Terjadi kesalahan!' });
    } finally {
      setLoading(false);
    }
  }, [setData, setLoading]);

  const deleteItem = useCallback(async (contact) => {
    try {
      await ContactApi.remove(contact.id);
      getContacts();
      toast.show({ title: 'Berhasil menghapus contact!' });
    } catch (e) {
      toast.show({ title: 'Terjadi kesalahan saat menghapus contact!' });
    }
  }, []);

  const onUpdateContact = (contact) => () => {
    navigation.push('AddUpdateContact', { contact });
  }

  const onAddContact = () => {
    navigation.push('AddUpdateContact');
  }

  useFocusEffect(
    useCallback(() => {
      getContacts();
    }, []),
  );

  return {
    data,
    loading,
    deleteItem,
    onAddContact,
    onUpdateContact
  };
};

export default useContactList;