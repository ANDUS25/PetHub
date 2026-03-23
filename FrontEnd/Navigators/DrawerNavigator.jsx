import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import LottieView from 'lottie-react-native';
import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import {
  ArrowLeftStartOnRectangleIcon,
  BugAntIcon,
  Cog6ToothIcon,
  HomeIcon,
  MoonIcon,
  PhoneIcon,
  PlusIcon,
  SunIcon,
  UserCircleIcon,
} from 'react-native-heroicons/outline';
import { useDispatch, useSelector } from 'react-redux';
import {
  AboutUs,
  ContactUs,
  Pets,
  Profile,
  ServicesDetail,
  Settings,
  UpdateProfile,
} from '../Component';
import InnerProduct from '../Component/ECommerce/InnerProduct';
import InnerPetScreen from '../Component/Pets/InnerPetScreen';
import { auth } from '../config/Config';
import { Theme } from '../store/Slices/ThemeSlice';
import { ScreenRouteName, Title } from '../utils/Strings';
import BottomNavigator from './BottomNavigator';
import Colors from '../utils/Colors';

const drawerData = [
  {
    id: 1,
    routeName: 'Home',
    routeComponent: BottomNavigator,
    drawerIcon: focused => (
      <HomeIcon size={24} color={focused ? Colors.WHITE : Colors.BLACK} />
    ),
  },

  {
    id: 2,
    routeName: 'Profile',
    routeComponent: Profile,
    drawerIcon: focused => (
      <UserCircleIcon size={24} color={focused ? Colors.WHITE : Colors.BLACK} />
    ),
  },
  {
    id: 3,
    routeName: 'About Us',
    routeComponent: AboutUs,
    drawerIcon: focused => (
      <PlusIcon size={24} color={focused ? Colors.WHITE : Colors.BLACK} />
    ),
  },
  {
    id: 4,
    routeName: 'Contact',
    routeComponent: ContactUs,
    drawerIcon: focused => (
      <PhoneIcon size={24} color={focused ? Colors.WHITE : Colors.BLACK} />
    ),
  },
  {
    id: 5,
    routeName: 'Pets',
    routeComponent: Pets,
    drawerIcon: focused => (
      <BugAntIcon size={24} color={focused ? Colors.WHITE : Colors.BLACK} />
    ),
  },
  {
    id: 6,
    routeName: 'Settings',
    routeComponent: Settings,
    drawerIcon: focused => (
      <Cog6ToothIcon size={24} color={focused ? Colors.WHITE : Colors.BLACK} />
    ),
  },
];

const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  const theme = useSelector(state => state.ThemeReducer.value);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <>
      <StatusBar hidden={true} />
      <DrawerContentScrollView
        contentContainerStyle={{
          flex: 1,
          backgroundColor:
            theme === 'light'
              ? Colors.BackgroundMainLight
              : Colors.BackgroundMainDark,
        }}>
        <View>
          <LottieView
            source={require('../assets/animations/drawerCat.json')}
            className="h-40 mx-4"
            style={{ aspectRatio: 1 }}
            autoPlay
            loop
          />
          <View
            style={{
              backgroundColor:
                theme === 'light'
                  ? Colors.BackgroundMainLight
                  : Colors.BackgroundMainDark,
            }}
            className="flex flex-row justify-center p-4 bg-slate-500">
            {theme === 'light' ? (
              <TouchableOpacity onPress={() => dispatch(Theme())}>
                <MoonIcon color={Colors.black} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => dispatch(Theme())}>
                <SunIcon color={Colors.White} />
              </TouchableOpacity>
            )}
          </View>
          <View>
            <DrawerItemList {...props} />
          </View>
        </View>
      </DrawerContentScrollView>

      <View
        className="py-3"
        style={{
          backgroundColor:
            theme === 'light'
              ? Colors.BackgroundMainLight
              : Colors.BackgroundMainDark,
        }}>
        <TouchableOpacity
          onPress={handleSignOut}
          className="flex flex-row items-center h-12 rounded-xl bg-white mx-4 pl-2">
          <ArrowLeftStartOnRectangleIcon size={22} color={Colors.black} />
          <Text className="text-xl ml-6" style={{ color: Colors.black }}>
            {Title}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: 230,
        },
        drawerType: 'slide',
        swipeEdgeWidth: 70,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      {drawerData.map(item => {
        return (
          <Drawer.Screen
            name={item.routeName}
            component={item.routeComponent}
            options={({ route }) => ({
              headerShown: false,
              drawerIcon: ({ focused }) => item.drawerIcon(focused),
              drawerActiveBackgroundColor: '#11009E',
              drawerInactiveBackgroundColor: '#EEF5ff',
              drawerActiveTintColor: '#fff',
              drawerLabelStyle: {
                fontSize: 16,
                fontFamily: 'Raleway-Medium',
              },
              drawerItemStyle: {
                borderRadius: 15,
                backgroundColor:
                  getFocusedRouteNameFromRoute(route) === 'Home'
                    ? '#090a0a'
                    : '#80a9e1',
              },
            })}
          />
        );
      })}

      {/* -----------------------Off Screens --------------- */}
      <Drawer.Screen
        name={ScreenRouteName.SERVICES_DETAIL}
        component={ServicesDetail}
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={ScreenRouteName.UPDATE_PROFILE}
        component={UpdateProfile}
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={ScreenRouteName.INNER_PET_SCREEN}
        component={InnerPetScreen}
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={ScreenRouteName.INNER_PRODUCT}
        component={InnerProduct}
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
