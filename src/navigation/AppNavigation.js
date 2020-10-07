import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'
import React from "react";
import {MainScreen} from "../screens/MainScreen";
import {BookedScreen} from "../screens/BookedScreen";
import {PostScreen} from "../screens/PostScreen";
import {AboutScreen} from "../screens/AboutScreen";
import {Text, Button} from "react-native";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from "../components/AppHeaderIcon";


const MainStack = createStackNavigator();
const BookedStack = createStackNavigator();
const AboutStack = createStackNavigator();
const PostStack = createStackNavigator();

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const MainStackScreen = ({navigation}) => (
    <MainStack.Navigator>
        <MainStack.Screen name='MainScreen'
                          component={MainScreen}
                          options={{
                              title: 'Main Screen',
                              headerRight: () => (
                                  <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                      <Item title='Take photo' iconName='ios-camera' onPress={() => {}}/>
                                  </HeaderButtons>),
                              headerLeft: () => (
                                  <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                      <Item title='Take photo' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
                                  </HeaderButtons>),
                          }}/>
        <MainStack.Screen name='PostScreen' component={PostScreen} options={({route}) => ({
            title: route.params.name
        })}/>
    </MainStack.Navigator>
)

const BookedStackScreen = () => (
    <BookedStack.Navigator>
        <BookedStack.Screen name='BookedScreen' component={BookedScreen} options={{title: 'Booked Screen'}}/>
    </BookedStack.Navigator>
)
const AboutStackScreen = () => (
    <AboutStack.Navigator>
        <AboutStack.Screen name='AboutScreen' component={AboutScreen} options={{title: 'About Screen'}}/>
    </AboutStack.Navigator>
)

const PostStackScreen = () => (
    <PostStack.Navigator>
        <PostStack.Screen name='PostScreen' component={PostScreen} options={{title: 'Post Screen'}}/>
    </PostStack.Navigator>
)

const TabsScreen = () => (
    <Tabs.Navigator>
        <Tabs.Screen name='Tab1' component={MainStackScreen}/>
        <Tabs.Screen name='Tab2' component={BookedStackScreen}/>
    </Tabs.Navigator>
)


export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Tabs' component={TabsScreen}/>
                <Drawer.Screen name='About' component={AboutStackScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>)
}


