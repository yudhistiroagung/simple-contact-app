import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { VStack } from 'native-base';

const AddUpdateContact = (props) => {
  console.log('AddUpdate', props.route.params);
  return (
    <SafeAreaView>
      <VStack height="100%" bg="#999999" />
    </SafeAreaView>
  );
}

export default AddUpdateContact;
