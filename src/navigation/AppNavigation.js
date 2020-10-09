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
import {CreateScreen} from "../screens/CreateScreen";




const MainStack = createStackNavigator();
const BookedStack = createStackNavigator();
const AboutStack = createStackNavigator();
const CreateStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const menu = navigation => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title='menu'
              iconName='ios-menu'
              onPress={() => navigation.toggleDrawer()}/>
    </HeaderButtons>)

const booked = (route) => {
    const toggleHandler = route.params.toggleHandler
    const booked = route.params.booked
    const iconName = booked ? 'ios-star' : 'ios-star-outline'
    return (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title='booked'
                  iconName={iconName}
                  onPress={toggleHandler}/>
        </HeaderButtons>)
}

const photo = navigation => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title='Take photo'
              iconName='ios-camera'
              onPress={() => {
                  navigation.navigate("CreateScreen",
                      {
                          screen: "CreateScreen"
                      })
              }}/>
    </HeaderButtons>)


const MainStackScreen = ({navigation}) => (
    <MainStack.Navigator>
        <MainStack.Screen name='MainScreen'
                          component={MainScreen}
                          options={{
                              title: 'Main Screen',
                              headerRight: () => photo(navigation),
                              headerLeft: () => menu(navigation)
                          }}/>
        <MainStack.Screen name='PostScreen' component={PostScreen} options={({route}) => ({
            title: route.params.name,
            headerRight: () => booked(route)
        })}/>
        <MainStack.Screen name='CreateScreen' component={CreateScreen} options={{
            title: 'Create Screen',
            headerLeft: () => menu(navigation)
        }}/>
    </MainStack.Navigator>
)

const BookedStackScreen = ({navigation}) => (
    <BookedStack.Navigator>
        <BookedStack.Screen name='BookedScreen' component={BookedScreen} options={{
            title: 'Booked Screen',
            headerLeft: () => menu(navigation),
        }}/>
        <BookedStack.Screen name='PostScreen' component={PostScreen} options={({route}) => ({
            title: route.params.name,
            headerRight: () => booked(route, navigation)
        })}/>
    </BookedStack.Navigator>
)
const AboutStackScreen = ({navigation}) => (
    <AboutStack.Navigator>
        <AboutStack.Screen name='AboutScreen' component={AboutScreen} options={{
            title: 'About Screen',
            headerLeft: () => menu(navigation)
        }}/>
    </AboutStack.Navigator>
)

const CreateStackScreen = ({navigation}) => (
    <CreateStack.Navigator>
        <CreateStack.Screen name='CreateScreen' component={CreateScreen} options={{
            title: 'Create Screen',
            headerLeft: () => menu(navigation)
        }}/>
    </CreateStack.Navigator>
)

const TabsScreen = () => (
    <Tabs.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
            let iconName;
            if (route.name === 'Post') {
                iconName = 'ios-albums'
            } else if (route.name === 'Booked') {
                iconName = 'ios-star'
            }
            return <Ionicons name={iconName} size={25} color={color}/>;
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
                <Drawer.Screen name='Main' component={TabsScreen}/>
                <Drawer.Screen name='About' component={AboutStackScreen}/>
                <Drawer.Screen name='New Post' component={CreateStackScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>)
}


