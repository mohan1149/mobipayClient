import React,{ useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,    
    Text,
    View,
    TextInput,
    Dimensions
} from 'react-native';

import { Button } from 'react-native-elements';
import I18n from './../../i18n/locales/i18n';
import Styles from './../../src/styles';
import axios from 'axios';
import {CONSTANTS} from './../constants';
import PhoneInput from "react-native-phone-number-input";
import Icon from 'react-native-vector-icons/MaterialIcons';
import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';
export default class UserRegister extends React.Component {
    getPhoneRef = () => this.phone_code;
    constructor(props) {
        super(props);
        this.state = {
            isLoading:false,
            client_phone:'',
            client_country_code:'',
            client_full_phone:'',
            client_name:'',
            client_fcm_token:'',
        }
    }
    render() {    
        return (
            <>
                <SafeAreaView
                    style={Styles.main_theme}
                >
                    <StatusBar
                        backgroundColor="#fff"
                        barStyle="dark-content"
                    />

                    <ScrollView>
                        <View
                            style={{ marginTop: Dimensions.get('screen').height/7 }}
                        >
                            <Text
                                style={Styles.create_accont_text}
                            >
                                {I18n.t('create')}
                            </Text>
                            <Text style={Styles.create_accont_text}>
                                {I18n.t('account')}
                            </Text>
                            <View style={Styles.create_accont_wrapper}>
                                <PhoneInput   
                                     ref={ref => {
                                        this.phone_code = ref;
                                      }}                                                                     
                                    defaultCode="KW"
                                    placeholder={I18n.t('phonenumber')}
                                    onChangeText={(text) => {
                                        this.setState({client_phone:text})
                                    }}
                                    onChangeFormattedText={(text) => {
                                        this.setState({client_full_phone:text})
                                    }}
                                    textContainerStyle={{
                                        borderRadius: 0,
                                        backgroundColor:'#fff',
                                        borderBottomWidth:1,
                                        borderColor:'#CCC',
                                        //paddingBottom:5,                                                                                
                                    }}                                
                                />
                                <View style={{flex:1,flexDirection:'row',marginTop:20,marginLeft:10}}>
                                    <Icon name="person" size={35} />
                                    <TextInput placeholder="Your Name" style={Styles.create_accont_name} onChangeText={(text)=>this.setState({client_name:text})}/>
                                </View>
                            </View>
                            <View
                                style={Styles.logn_form}
                            >

                                <Button
                                    title={I18n.t('signup')}
                                    buttonStyle={Styles.signup_button}
                                    titleStyle={Styles.login_button_text}
                                    onPress={() => this.moveToOTP()}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }

    componentDidMount(){
        let firebase_service = firebase.messaging();
        firebase_service.getToken().then((token)=>{
            console.log(token);
            this.setState({
                client_fcm_token:token,
            });
        })
    }
    moveToOTP(){
        let client_data = {
            client_country_code : this.phone_code.getCountryCode(),
            client_name : this.state.client_name,
            client_phone : this.state.client_phone,
            client_full_phone:this.state.client_full_phone,
            client_fcm_token:this.state.client_fcm_token,
        }
        this.props.navigation.navigate('user-otp',{client_data});
        // let url = CONSTANTS.API_SEVER + CONSTANTS.CLIENT_SIGNUP;        
        // axios.post(
        //     url,
        //     client_data
        // )
        // .then((response)=>{
        //     console.log(response);
        // })
        // .catch((error)=>{
        //     console.log(error);
        // })     
    }

}
