import React, {useMemo, useCallback, useRef, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  HStack,
  Text,
  Avatar,
  VStack,
  IconButton,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

import { Fab } from '../Fab';
import { DeleteModal } from '../DeleteModal';
import useContactList from './ContactList.hook';

const ContactList = (props) => {
  const deletedItem = useRef(undefined);
  const [open, setOpen] = useState(false);
  const { data, loading, deleteItem, onAddContact, onUpdateContact } = useContactList(props);

  const onDeleteClick = (contact) => () => {
    deletedItem.current = contact;
    setTimeout(() => {
      setOpen(true);
    }, 100);
  };

  const onDeleteConfirm = () => {
    deleteItem(deletedItem.current);
    setOpen(false);
  };

  const header = useMemo(() => (
    <HStack
        h={54}
        px={4}
        mb={4}
        alignItems="center"
        borderBottomColor="#e6e6e6"
        borderBottomWidth={1}
      >
        <Text
          bold
          fontSize="lg"
          color="#333333"
        >Contact List</Text>
      </HStack>
    ), []);

  const renderItem = useCallback(({ item }) => {
    return (
      <TouchableOpacity onPress={onUpdateContact(item)} >
        <HStack
          p={4}
          borderBottomWidth={1}
          borderBottomColor="#e6e6e6"
          justifyContent="space-between"
        >
          <Avatar source={{ uri: item.photo }} />
          <VStack px={4} flex={1} space={1}>
            <Text color="#333333">{`${item.firstName} ${item.lastName}`}</Text>
            <Text color="#999999">{`${item.age} years old`}</Text>
          </VStack>
          <IconButton
            onPress={onDeleteClick(item)}
            icon={<MaterialIcons size={24} name="delete-outline" />} />
        </HStack>
      </TouchableOpacity>
    );
  }, []);

  return (
    <SafeAreaView>
      <VStack height="100%" _web={{ height: '100vh' }}>
        {header}
        {loading && <ActivityIndicator color="#999999" size="large" />}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={({ id }) => id}
        />
        <Fab onPress={onAddContact} />
        <DeleteModal
          isOpen={open}
          onClose={() => setOpen(false)}
          contact={deletedItem.current}
          onConfirm={onDeleteConfirm}
        />
      </VStack>
    </SafeAreaView>
  );
};

export default ContactList;
