import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {MainScreen} from "../screens/MainScreen";
import {BookedScreen} from "../screens/BookedScreen";
import {PostScreen} from "../screens/PostScreen";
import {AboutScreen} from "../screens/AboutScreen";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {Ionicons} from "@expo/vector-icons";
import {THEME} from "../theme";
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
                                      <Item title='Take photo'
                                            iconName='ios-camera'
                                            onPress={() => console.log('press camera')}/>
                                  </HeaderButtons>),
                              headerLeft: () => (
                                  <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                      <Item title='Take photo'
                                            iconName='ios-menu'
                                            onPress={() => navigation.toggleDrawer()}/>
                                  </HeaderButtons>),
                          }}/>
        <MainStack.Screen name='PostScreen' component={PostScreen} options={({route}) => ({
            title: route.params.name,
            headerRight: () => {
                const booked = route.params.booked
                const iconName = booked ? 'ios-star' : 'ios-star-outline'
                return (
                    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                        <Item title='Take photo'
                              iconName={iconName}
                              onPress={() => console.log('press favorites')}/>
                    </HeaderButtons>)
            },
        })}/>
    </MainStack.Navigator>
)

const BookedStackScreen = ({navigation}) => (
    <BookedStack.Navigator >
        <BookedStack.Screen name='BookedScreen' component={BookedScreen} options={{
            title: 'Booked Screen',
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title='Take photo'
                          iconName='ios-menu'
                          onPress={() => navigation.toggleDrawer()}/>
                </HeaderButtons>),
        }}/>
        <MainStack.Screen name='PostScreen' component={PostScreen} options={({route}) => ({
            title: route.params.name,
            headerRight: () => {
                const booked = route.params.booked
                const iconName = booked ? 'ios-star' : 'ios-star-outline'
                return (
                    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                        <Item title='Take photo'
                              iconName={iconName}
                              onPress={() => console.log('press favorites')}/>
                    </HeaderButtons>)
            },
        })}/>
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
    <Tabs.Navigator    screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'Post') {
                iconName = 'ios-albums'
            } else if (route.name === 'Booked') {
                iconName = 'ios-star'
            }
            return <Ionicons name={iconName} size={25} color={color} />;
        },
    })}
                       tabBarOptions={{
                           activeTintColor: 'black',
                           inactiveTintColor: 'gray',
                       }}>
        <Tabs.Screen name='Post' component={MainStackScreen}/>
        <Tabs.Screen name='Booked' component={BookedStackScreen}/>
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


