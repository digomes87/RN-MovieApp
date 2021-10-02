import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../pages/Home";
import Movie from "../pages/Movies";


const Drawer = createDrawerNavigator();

function Routes(){
    return(
        // create the routes
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Movie" component={Movie} />
        </Drawer.Navigator>
    )
}

export default Routes;