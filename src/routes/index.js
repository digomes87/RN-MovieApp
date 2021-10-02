import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackRoutes from "./stackRoutes";
import Movie from "../pages/Movies";
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Drawer = createDrawerNavigator();

function Routes() {
    return (
        // create the routes
        <Drawer.Navigator
            screenOptions={{
                heeaderShow: false,
                drawerStyle: {
                    backgroundColor: '#090A0E',
                    paddingTop: 20,
                },

                drawerActiveBackgroundColor: '#E72F49',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#fff',
            }}
        >
            <Drawer.Screen
                name="HomeDrawer"
                component={StackRoutes}
                options={{
                    title: 'Home',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'movie-open' : 'movie-outline'}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Movie"
                component={Movie}
                options={{
                    title: 'Movie',

                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons 
                            name={focused ? 'archive' : 'archive-outline'}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

export default Routes;