import React, {useMemo, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { VStack, HStack, IconButton, Text, FormControl, Input, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import useAddUpdateContact from './AddUpdateContact.hook';
import { ActivityIndicator } from 'react-native';

const AddUpdateContact = (props) => {
  const {
    addContact,
    updateContact,
    goBack,
    loading,
    isUpdate,
    initialValues
  } = useAddUpdateContact(props);
  const [values, setValues] = useState({...initialValues});

  const handleChange = (name) => value => {
    setValues((state) =>({
      ...state,
      [name]: value
    }));
  };

  const isButtonEnabled = !!values.firstName && !!values.lastName && !!values.age;

  const onButtonClick = () => {
    const handler = isUpdate ? updateContact : addContact;
    const payload = {
      ...values,
      age: parseInt(values.age)
    }
    handler(payload);
  };
  
  const header = useMemo(() => (
    <HStack
      h={54}
      pr={4}
      mb={4}
      alignItems="center"
      borderBottomColor="#e6e6e6"
      borderBottomWidth={1}
      justifyContent="space-between"
    >
      <HStack alignItems="center">
        <IconButton
          onPress={goBack}
          icon={<MaterialIcons size={24} name="arrow-back" />}
        />
        <Text
          bold
          fontSize="lg"
          color="#333333"
          ml={2}
        >{isUpdate ? 'Update Contact' : 'Add Contact'}</Text>
      </HStack>
      {isUpdate && <IconButton
        icon={<MaterialIcons size={24} name="delete-outline" />}
      />}
    </HStack>
  ), [isUpdate, goBack]);

  const firstName = useMemo(() => (
    <FormControl>
      <FormControl.Label>First Name</FormControl.Label>
      <Input
        value={values.firstName}
        onChangeText={handleChange('firstName')}
        placeholder="Please input first name"
      />
    </FormControl>
  ), [values.firstName]);

  const lastName = useMemo(() => (
    <FormControl>
      <FormControl.Label>Last Name</FormControl.Label>
      <Input
        value={values.lastName}
        onChangeText={handleChange('lastName')}
        placeholder="Please input last name"
      />
    </FormControl>
  ), [values.lastName]);

  const age = useMemo(() => (
    <FormControl>
      <FormControl.Label>Age</FormControl.Label>
      <Input
        value={values.age}
        onChangeText={handleChange('age')}
        placeholder="Please input age"
        keyboardType="numeric"
      />
    </FormControl>
  ), [values.age]);

  const button = useMemo(() => (
    <Button
      onPress={onButtonClick}
      disabled={!isButtonEnabled}
    >
      {isUpdate ? 'UPDATE' : 'ADD'}
    </Button>
  ), [isButtonEnabled, isUpdate, onButtonClick]);

  return (
    <SafeAreaView>
      <VStack height="100%" _web={{ height: '100vh' }}>
        {header}
        {loading && <ActivityIndicator color="#999999" size="large"/>}
        {!loading && <VStack p={4} space={4}>
          {firstName}
          {lastName}
          {age}
          {button}
        </VStack>}
      </VStack>
    </SafeAreaView>
  );
}

export default AddUpdateContact;
