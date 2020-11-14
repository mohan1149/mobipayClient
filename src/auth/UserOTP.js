import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    Text,
    View,
    Alert
} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { Button, Icon } from 'react-native-elements';
import I18n from './../../i18n/locales/i18n';
import Styles from './../../src/styles';
import auth from '@react-native-firebase/auth';
let confirmation = null;
export default class UserOTP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: "",
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
                            style={{marginTop:90}}
                        >
                            <Text
                                style={Styles.hi}
                            >
                                {I18n.t('hi')}
                            </Text>
                            <Text style={Styles.secret_pin_label}>{I18n.t('enterotptext')}</Text>
                            <View
                                style={Styles.logn_form}
                            >
                                <SmoothPinCodeInput
                                    codeLength={6}
                                    autoFocus={true}
                                    //password={true}
                                    //mask='*'
                                    cellStyle={{
                                        borderBottomWidth: 2,
                                        borderColor: 'gray',
                                    }}
                                    cellStyleFocused={{
                                        borderColor: 'black',
                                    }}
                                    containerStyle={{
                                        padding: 20,
                                        marginBottom: 20,
                                        marginTop:20,
                                        alignSelf: 'center'
                                    }}
                                    value={this.state.otp}
                                    onTextChange={otp => this.setState({ otp })}
                                />
                                <Button
                                    title={I18n.t('enter')}
                                    buttonStyle={Styles.login_button}
                                    titleStyle={Styles.login_button_text}
                                    onPress={() => this.moveToSecretScreen()}
                                />
                            </View>                            
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }

    async componentDidMount(){
        try{            
            let phone_number = this.props.route.params.client_data.client_full_phone;            
            confirmation = await auth().signInWithPhoneNumber(phone_number);
        }catch(error){
            console.log(error);
            Alert.alert(I18n.t('unabletosendotptitle'),I18n.t('unabletosendotpText'));
        }
        
    }
    
    async moveToSecretScreen(){ 
        try{
            await confirmation.confirm(this.state.otp);
            let client_data = this.props.route.params.client_data;
            this.props.navigation.navigate('user-secret',{client_data});            
        }catch(error){
            console.log(error);
            Alert.alert(I18n.t('invalidotp'),I18n.t('entercorrectotp'));            
        }        
    }
}
