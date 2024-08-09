import { Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Profile = () => {
	return (
		<View>
			<Text className='text-blue-500'>profile</Text>
			<Link href={'/'}>Go to hello</Link>
		</View>
	);
};

export default Profile;
