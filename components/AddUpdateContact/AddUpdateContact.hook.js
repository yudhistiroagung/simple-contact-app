
const useAddUpdateContact = ({ navigation, route }) => {
  const { contact } = route.params || {};
  
  const isUpdate = !!contact;
  const initialValues = isUpdate
    ? { firstName: contact.firstName, lastName: contact.lastName, age: contact.age }
    : {};

  const goBack = () => navigation.goBack();

  return {
    initialValues,
    isUpdate,
    goBack,
  };
};

export default useAddUpdateContact;
