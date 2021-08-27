import React from 'react';
import { View, Text } from 'react-native';

export interface UserCardProps {
  name: string;
  age: number;
}

const UserCard: React.FC<UserCardProps> = ({ name, age }: UserCardProps) => {
  return (
    <View>
      <Text>UserCard</Text>
    </View>
  );
};

export default UserCard;
