import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { Button, Icon } from 'react-native-elements';
import I18n from './../../i18n/locales/i18n';
import Styles from './../../src/styles';
export default class UserLogin extends React.Component {
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
                            style={{marginTop:150}}
                        >
                            <Text
                                style={Styles.welcome_back}
                            >
                                {I18n.t('welcomeback')}
                            </Text>
                            <Text style={Styles.secret_pin_label}>{I18n.t('entersecretpin')}</Text>
                            <View
                                style={Styles.logn_form}
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
                                        marginTop:20,
                                        alignSelf: 'center'
                                    }}
                                    value={this.state.secret_pin}
                                    onTextChange={secret_pin => this.setState({ secret_pin })}
                                />
                                <Button
                                    title={I18n.t('login')}
                                    buttonStyle={Styles.login_button}
                                    titleStyle={Styles.login_button_text}
                                    onPress={() => this.props.navigation.navigate('home')}
                                />
                            </View>
                            {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity style={Styles.login_footer_links}>
                                    <Text style={Styles.login_footer_links_text}>{I18n.t('forgotpassword')}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={Styles.login_footer_links}>
                                    <Text style={Styles.login_footer_links_text}>{I18n.t('newaccount')}</Text>
                                </TouchableOpacity>
                            </View> */}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }

}
