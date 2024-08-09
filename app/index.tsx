import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';

const HomeIndex = () => {
	return (
		<SafeAreaView className='bg-primary h-full'>
			<ScrollView contentContainerStyle={{ height: '100%' }}>
				<View className='h-full w-full items-center justify-center'>
					<Text className='font-pextrabold text-4xl'>index</Text>
					<Link href={'/home'}>Go To home</Link>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeIndex;
