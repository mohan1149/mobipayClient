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
import { Button } from 'react-native-elements';
import I18n from './../../i18n/locales/i18n';
import Styles from './../../src/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class UserSecretSet extends React.Component {
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
                            style={{ marginTop: 50 }}
                        >
                            <Text
                                style={Styles.setup_secretpin}
                            >
                                {I18n.t('setupa')}
                            </Text>
                            <Text style={Styles.create_accont_text}>
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

                                <View 
                                    style={{
                                        marginTop:150,
                                        zIndex:5,
                                        alignSelf:'flex-end',
                                        right:30,
                                    }}
                                >
                                    <Button
                                        buttonStyle={Styles.setup_secret_pin_button}
                                        icon={
                                            <Icon
                                                name="arrow-forward"
                                                size={40}
                                                color="white"
                                            />
                                        }
                                    />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
    componentDidMount() {
        //console.log(this.props.route.params.client_data);
    }
    saveClient() {

    }
}
