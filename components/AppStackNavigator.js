import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import BookDonateScreen from '../screens/BookDonateScreen';
import RecieverDetailsScreen from '../screens/RecieverDetails'


export const AppStackNavigator = createStackNavigator({
    BookDonateList:{
        screen:BookDonateScreen,
        navgationOptions:{
            headerShown:false
        }
    },
    RecieverDetails:{
        screen:RecieverDetailsScreen,
        navgationOptions:{
            headerShown:false
        }
    },
},
{
    initialRouteName:'BookDonateList'
})