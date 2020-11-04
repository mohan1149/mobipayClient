
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import I18n from './../i18n/locales/i18n';
enableScreens();
const Stack = createNativeStackNavigator();

import WalkThrough from './walkthrough/WalkThrough';
import UserHome from './home/UserHome';
import UserLogin from './auth/UserLogin';
import Loading from './Loading';
import UserActivity from './home/UserAcitivity';
import CreatePayment from './payment/CreatePayment';
import MakePayment from './payment/MakePayment';
export default class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFirstTime: false,
            isLogged: true,
        }
    }
    render() {
        let Initail = Loading;
        if(this.state.isFirstTime){
            Initail = WalkThrough;
        }else if(!this.state.isLogged){
            Initail = UserLogin;
        }
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Initail" component={Initail} options={{ headerShown: false }} />
                    <Stack.Screen name="home" component={UserHome} options={{ headerShown: false }} />
                    <Stack.Screen name="user-activity" component={UserActivity} 
                        options={{                             
                            headerTitle:I18n.t('youractivity'),
                            headerTintColor:'black',
                            headerHideShadow:true,
                            headerBackTitleVisible:false
                        }} 
                    />
                    <Stack.Screen name="create-payment" component={CreatePayment}
                        options={{
                            headerShown:false,
                            headerHideShadow:false,
                            headerTintColor:'black',                                                     
                        }} 
                    />
                    <Stack.Screen name="make-payment" component={MakePayment}
                        options={{
                            headerShown:false,
                            headerHideShadow:false,
                            headerTintColor:'black',                                                                            
                        }} 
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
    componentDidMount() {
        //AsyncStorage.clear();
        AsyncStorage.multiGet(['isFirstTime', 'isLogged']).then((response) => {
            this.setState({
                isFirstTime: response[0][1] === null ? true : false,
                isLogged: response[1][1] === null ? false : true,
            });
        });
    }
}