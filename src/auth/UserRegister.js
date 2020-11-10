import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    Text,
    View,
    TextInput
} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { Button } from 'react-native-elements';
import I18n from './../../i18n/locales/i18n';
import Styles from './../../src/styles';

export default class UserRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secret_pin: "",
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
                            style={{marginTop:30}}
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
                                <TextInput placeholder="Your Name" style={Styles.create_accont_name}/>
                                <TextInput placeholder="Phone" style={Styles.create_accont_phone} keyboardType="decimal-pad"/>
                            </View>
                            <View
                                style={Styles.logn_form}
                            >
                                
                                <Button
                                    title={I18n.t('login')}
                                    buttonStyle={Styles.login_button}
                                    titleStyle={Styles.login_button_text}
                                    onPress={() => this.props.navigation.navigate('home')}
                                />
                            </View>                            
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }

}
