import { Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const HomeIndex = () => {
	return (
		<View className='flex min-h-full items-center justify-center'>
			<Text className='font-pextrabold text-4xl'>index</Text>
			<Link href={'/profile'}>Go To Profile</Link>
		</View>
	);
};

export default HomeIndex;
