import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';
import {
  CurrencyRupeeIcon,
  FilmIcon,
  HomeIcon,
  MegaphoneIcon,
  PlusIcon,
  ShoppingCartIcon,
} from 'react-native-heroicons/outline';
import Social from '../Component/Social/Social';
import {
  CartComponent,
  Doctor,
  ECommerce,
  FunNdEarn,
  Landing,
} from '../Component/index';
import Colors from '../utils/Colors';
import { ScreenName, ScreenTitle } from '../utils/Strings';

const Bottom = createBottomTabNavigator();

const bottomNavigationTab = [
  {
    id: 1,
    name: ScreenName.LANDING,
    component: Landing,
    icon: focused => <HomeIcon color={focused ? Colors.WHITE : Colors.BLACK} size={28} />,
    label: focused => (
      <Text style={{ color: focused ? Colors.WHITE : Colors.BLACK }} className="text-xs">
        {ScreenTitle.HOME}
      </Text>
    ),
  },
  {
    id: 2,
    name: ScreenName.E_COMMERCE,
    component: ECommerce,
    icon: focused => (
      <MegaphoneIcon color={focused ? Colors.WHITE : Colors.BLACK} size={28} />
    ),
    label: focused => (
      <Text style={{ color: focused ? Colors.WHITE : Colors.BLACK }} className="text-xs">
        {ScreenTitle.E_COM}
      </Text>
    ),
  },
  // {
  //   id: 3,
  //   name: 'Pets',
  //   component: Pets,
  //   icon: focused => <BugAntIcon color={focused ? Colors.WHITE : Colors.BLACK} size={28} />,
  //   label: focused => (
  //     <Text style={{color: focused ? Colors.WHITE : Colors.BLACK}} className="text-xs">
  //       Pets
  //     </Text>
  //   ),
  // },
  {
    id: 4,
    name: ScreenName.SOCIAL,
    component: Social,
    icon: focused => <FilmIcon color={focused ? Colors.WHITE : Colors.BLACK} size={28} />,
    label: focused => (
      <Text style={{ color: focused ? Colors.WHITE : Colors.BLACK }} className="text-xs">
        {ScreenTitle.SOCIAL}
      </Text>
    ),
  },
  {
    id: 5,
    name: ScreenName.CART,
    component: CartComponent,
    icon: focused => (
      <ShoppingCartIcon color={focused ? Colors.WHITE : Colors.BLACK} size={28} />
    ),
    label: focused => (
      <Text style={{ color: focused ? Colors.WHITE : Colors.BLACK }} className="text-xs">
        {ScreenTitle.SHOPPING}
      </Text>
    ),
  },
  {
    id: 6,
    name: ScreenName.DOCTOR_ONLINE,
    component: Doctor,
    icon: focused => <PlusIcon color={focused ? 'red' : '#000'} size={28} />,
    label: focused => (
      <Text style={{ color: focused ? Colors.WHITE : Colors.BLACK }} className="text-xs">
        {ScreenTitle.DOCTOR}
      </Text>
    ),
  },
  {
    id: 7,
    name: ScreenName.FUN_AND_EARN,
    component: FunNdEarn,
    icon: focused => (
      <CurrencyRupeeIcon color={focused ? Colors.WHITE : Colors.BLACK} size={28} />
    ),
    label: focused => (
      <Text style={{ color: focused ? Colors.WHITE : Colors.BLACK }} className="text-xs">
        {ScreenName.FUN_AND_EARN}
      </Text>
    ),
  },
];

const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      {bottomNavigationTab.map((item, index) => {
        return (
          <Bottom.Screen
            name={item.name}
            component={item.component}
            key={index}
            options={{
              tabBarActiveBackgroundColor: Colors.ACTIVE_TAB_BACKGROUND,
              tabBarInactiveBackgroundColor: Colors.INACTIVE_TAB_BACKGROUND,
              headerShown: false,
              tabBarIcon: ({ focused }) => item.icon(focused),
              tabBarLabel: ({ focused }) => item.label(focused),
            }}
          />
        );
      })}
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
