import { useCallback, useEffect, useState } from 'react';
import { useToast } from 'native-base';

import ContactApi from '../../api/ContactApi';

const useContactList = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const getContact = useCallback(async () => {
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
      getContact();
    } catch (e) {
      toast.show({ title: 'Terjadi kesalahan menghapus contact!' });
    }
  }, []);

  const onUpdateContact = (contact) => () => {
    navigation.push('AddUpdateContact', { contact });
  }

  const onAddContact = () => {
    navigation.push('AddUpdateContact');
  }

  useEffect(() => {
    getContact();
  }, []);

  return {
    data,
    loading,
    deleteItem,
    onAddContact,
    onUpdateContact
  };
};

export default useContactList;