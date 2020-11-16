import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,    
    Text,
    View,
    Alert,
    Dimensions,
    ActivityIndicator,
    BackHandler
} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { Button } from 'react-native-elements';
import I18n from './../../i18n/locales/i18n';
import Styles from './../../src/styles';
import axios from 'axios';
import {CONSTANTS} from './../constants';
import Modal from 'react-native-modal';
export default class UserSecretSet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secret_pin: "",
            isLoading:false,
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
                            style={{ marginTop: Dimensions.get('screen').height / 7 }}
                        >
                            <Text
                                style={Styles.setup_secretpin}
                            >
                                {I18n.t('setupa')}
                            </Text>
                            <Text style={Styles.setup_secretpin}>
                                {I18n.t('secretpin')}
                            </Text>
                            {/* <Text style={Styles.secret_pin_label}>{I18n.t('enterotptext')}</Text> */}
                            <View
                                style={Styles.setup_secret_pin}
                            >
                                <SmoothPinCodeInput
                                    codeLength={5}
                                    autoFocus={true}
                                    password={true}
                                    mask='*'
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
                                        marginTop: 20,
                                        alignSelf: 'center'
                                    }}
                                    value={this.state.secret_pin}
                                    onTextChange={secret_pin => this.setState({ secret_pin })}
                                />
                                <Button
                                    buttonStyle={Styles.signup_button}
                                    titleStyle={Styles.login_button_text}
                                    title={I18n.t('save')}
                                    onPress={()=>this.saveClient()}
                                />

                            </View>
                        </View>
                        <Modal
                            isVisible={this.state.isLoading}
                        >
                            <View>
                                <ActivityIndicator size="large" color="#fff"/>
                            </View>
                        </Modal>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress",()=>{
            Alert.alert(I18n.t('wait'),I18n.t('waittext'));
        })
    }
    componentWillUnmount(){
        BackHandler.removeEventListener("hardwareBackPress");
    }
    saveClient() {
        this.setState({isLoading:true});
        let client_data = this.props.route.params.client_data;
        let url = CONSTANTS.API_SEVER + CONSTANTS.CLIENT_SIGNUP;        
        axios.post(
            url,
            client_data
        )
        .then((response)=>{            
            console.log(response);
            this.setState({isLoading:true});
            this.props.navigation.navigate('home');
        })
        .catch((error)=>{            
            console.log(error);
            this.setState({isLoading:false});
            Alert.alert(I18n.t('networkerror'),I18n.t('accountfailed')); 
            this.props.navigation.navigate('home');           
        })        
    }
}
