import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { VStack } from 'native-base';

const AddUpdateContact = (props) => {
  console.log('AddUpdate', props.route.params);
  return (
    <SafeAreaView>
      <VStack bg="#e6e6e6" />
    </SafeAreaView>
  );
}

export default AddUpdateContact;
