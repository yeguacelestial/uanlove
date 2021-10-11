import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import useAuth from '@hooks/useAuth';
import User from '@shared/User';

// TODO: Test component.
const ProfileEditScreen: React.FC = () => {
  const { user, setUser } = useAuth();

  const {
    control,
    handleSubmit
    /*formState: { errors }*/
  } = useForm();

  const onSubmit: SubmitHandler<User> = user => {
    setUser(user);
  };

  // TODO: Handle without user.
  if (!user)
    return (
      <View>
        <Text>Without user</Text>
      </View>
    );

  // TODO: Change age type to string.
  return (
    <View>
      <Text>Name</Text>
      <Controller
        control={control}
        defaultValue={user.name}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            autoCompleteType="name"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        rules={{
          required: true
        }}
      />
      <Text>Age</Text>
      <Controller
        control={control}
        defaultValue={user.age}
        name="age"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            keyboardType="numeric"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        rules={{
          required: true
        }}
      />
      <Text>Description</Text>
      <Controller
        control={control}
        defaultValue={user.bio}
        name="bio"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput value={value} onBlur={onBlur} onChangeText={onChange} />
        )}
      />
      <Button title="Save" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default ProfileEditScreen;
