import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import { COLORS,icons } from './../constants/theme';
import { View,Image } from 'react-native';
import HomeScreen from './../screens/HomeScreen';
import { search_icon,notification_icon,dashboard_icon,menu_icon } from './../constants/icons';
const Tab = createBottomTabNavigator();

const tabBarOptions = {
    showLabel: false,
    style: {
        height: "10%",
        backgroundColor:COLORS.black
    }
}

function MyTabs() {
  return (
      <Tab.Navigator
          tabBarOptions={tabBarOptions}
          screenOptions={({ route }) => ({
              tabBarIcon: ({ focused }) => {
                  const tintColor = focused ? COLORS.white : COLORS.gray;

                  switch (route.name) {
                      case 'Home':
                          return (
                              <Image
                                  source={dashboard_icon}
                                  resizeMode="contain"
                                  style={{
                                      tintColor: tintColor,
                                      width: 25,
                                      height:25
                                  }}
                              />
                          )
                          case 'Search':
                            return (
                                <Image
                                    source={search_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height:25
                                    }}
                                />
                          )
                          case 'Notification':
                            return (
                                <Image
                                    source={notification_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height:25
                                    }}
                              
                                />
                          )
                          case 'Settings':
                            return (
                                <Image
                                    source={menu_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height:25
                                    }}
                                />
                          )
                      
                 
                  }
              }
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Notification" component={HomeScreen} />
          <Tab.Screen name="Search" component={HomeScreen} />
          <Tab.Screen name="Settings" component={HomeScreen} />
          
    </Tab.Navigator>
  );
}

export default MyTabs;