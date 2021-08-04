import React, {useMemo, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { VStack, HStack, IconButton, Text, FormControl, Input, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const AddUpdateContact = (props) => {

  const [values, setValues] = useState({});

  const handleChange = (name) => value => {
    setValues((state) =>({
      ...state,
      [name]: value
    }));
  };

  const isButtonEnabled = !!values.firstName && !!values.lastName && !!values.age;
  
  const header = useMemo(() => (
    <HStack
      h={54}
      px={4}
      mb={4}
      alignItems="center"
      borderBottomColor="#e6e6e6"
      borderBottomWidth={1}
      justifyContent="space-between"
    >
      <HStack alignItems="center">
        <IconButton icon={<MaterialIcons size={24} name="arrow-back" />} />
        <Text
          bold
          fontSize="lg"
          color="#333333"
          ml={2}
        >Add Contact</Text>
      </HStack>
      <IconButton
        icon={<MaterialIcons size={24} name="delete-outline" />}
      />
    </HStack>
  ), []);

  const firstName = useMemo(() => (
    <FormControl>
      <FormControl.Label>First Name</FormControl.Label>
      <Input
        onChangeText={handleChange('firstName')}
        placeholder="Please input first name"
      />
    </FormControl>
  ), []);

  const lastName = useMemo(() => (
    <FormControl>
      <FormControl.Label>Last Name</FormControl.Label>
      <Input
        onChangeText={handleChange('lastName')}
        placeholder="Please input last name"
      />
    </FormControl>
  ), []);

  const age = useMemo(() => (
    <FormControl>
      <FormControl.Label>Age</FormControl.Label>
      <Input
        onChangeText={handleChange('age')}
        placeholder="Please input age"
        keyboardType="numeric"
      />
    </FormControl>
  ), []);

  const button = useMemo(() => (
    <Button disabled={!isButtonEnabled}>ADD</Button>
  ), [isButtonEnabled]);

  return (
    <SafeAreaView>
      <VStack height="100%" _web={{ height: '100vh' }}>
        {header}
        <VStack p={4} space={4}>
          {firstName}
          {lastName}
          {age}
          {button}
        </VStack>
      </VStack>
    </SafeAreaView>
  );
}

export default AddUpdateContact;
