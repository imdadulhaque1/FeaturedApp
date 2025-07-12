import React, { FC } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {}

const Icon: FC<Props> = props => {
  return (
    <MaterialIcon name="access-point-network-off" size={30} color="#900" />
  );
};

export default Icon;
