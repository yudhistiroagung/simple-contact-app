import { useCallback, useEffect, useState } from 'react';

import ContactApi from '../../api/ContactApi';

const useContactList = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getContact = useCallback(async () => {
    setLoading(true);
    try {
      const result = await ContactApi.get();
      setData([
        ...data.slice(0,0),
        ...result
      ]);
    } catch (e) {
      //
    } finally {
      setLoading(false);
    }
  }, [data, setData, setLoading]);

  const deleteItem = useCallback(async (contact) => {
    try {
      await ContactApi.remove(contact.id);
      getContact();
    } catch (e) {
      // setError(e);
    }
  }, []);

  useEffect(() => {
    getContact();
  }, []);

  return {
    data,
    loading,
    deleteItem
  };
};

export default useContactList;