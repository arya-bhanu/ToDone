import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';
import icons from '../../constants/icons';
import clsx from 'clsx';

const TabIcon = ({ icon, color, name, focused }: any) => {
	return (
		<View className='flex flex-col items-center gap-1'>
			<Image
				source={icon}
				resizeMode='contain'
				tintColor={color}
				className='w-7 h-7'
			/>
			<Text
				className={clsx(
					'text-xs text-white',
					`${focused ? 'font-psemibold' : 'font-pregular'}`
				)}
			>
				{name}
			</Text>
		</View>
	);
};

const TabsLayout = () => {
	return (
		<>
			<Tabs
				screenOptions={{
					tabBarShowLabel: false,
					tabBarActiveTintColor: '#ff8001',
					tabBarInactiveTintColor: '#CDCDE0',
					tabBarStyle: {
						backgroundColor: '#161622',
						height: 65,
					},
				}}
			>
				<Tabs.Screen
					key={1}
					name='home'
					options={{
						title: 'Home',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => {
							return (
								<TabIcon
									icon={icons.home}
									color={color}
									name='Home'
									focused={focused}
								/>
							);
						},
					}}
				/>
				<Tabs.Screen
					key={2}
					name='bookmark'
					options={{
						title: 'Bookmark',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => {
							return (
								<TabIcon
									icon={icons.bookmark}
									color={color}
									name='Bookmark'
									focused={focused}
								/>
							);
						},
					}}
				/>
				<Tabs.Screen
					key={3}
					name='create'
					options={{
						title: 'Create',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => {
							return (
								<TabIcon
									icon={icons.plus}
									color={color}
									name='Create'
									focused={focused}
								/>
							);
						},
					}}
				/>
				<Tabs.Screen
					key={4}
					name='profile'
					options={{
						title: 'Profile',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => {
							return (
								<TabIcon
									icon={icons.profile}
									color={color}
									name='Profile'
									focused={focused}
								/>
							);
						},
					}}
				/>
			</Tabs>
		</>
	);
};

export default TabsLayout;
