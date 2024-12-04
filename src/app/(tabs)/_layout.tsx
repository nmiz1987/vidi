import { Box } from '@/components/Box/Box';
import { Stack, Tabs, Redirect } from 'expo-router';
import { Text, Image, ImageSourcePropType } from 'react-native';
import { icons } from '@/constants';

const TabIcon = ({ name, color, icon, focused }: { name: string; color: string; icon: ImageSourcePropType; focused: boolean }) => {
  return (
    <Box className="items-center justify-center gap-2">
      <Image source={icon} resizeMode="contain" tintColor={color} className="h-6 w-20" />
      <Text style={{ color }} className={`${focused ? 'font-psemibold' : 'font-pregular'} w-20 text-center text-xs`}>
        {name}
      </Text>
    </Box>
  );
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: { backgroundColor: '#161622', borderTopWidth: 1, borderTopColor: '#232533', height: 90, paddingTop: 10 },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.home} name="home" color={color} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.bookmark} name="bookmark" color={color} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.profile} name="profile" color={color} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.plus} name="create" color={color} focused={focused} />,
        }}
      />
    </Tabs>
  );
}
