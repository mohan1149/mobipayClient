import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import I18n from './../../i18n/locales/i18n';
import Styles from './../styles';
import { Header } from 'react-native-elements';
import { HeaderBackButton } from '@react-navigation/stack';
export default class CreatePayment extends React.Component {
    onSuccess = e => {
        this.props.navigation.navigate('make-payment', { 'data': e });
    };
    render() {
        return (
            <>
                <Header
                    containerStyle={{
                        borderBottomWidth: 0
                    }}
                    backgroundColor='#fff'
                    leftComponent={
                        <HeaderBackButton tintColor="black" onPress={() => { this, this.props.navigation.goBack() }} />
                    }
                    centerComponent={
                        <Text style={Styles.scan_qr_code_title}>
                            {I18n.t('scanqrcodetopay')}
                        </Text>
                    }
                />
                <SafeAreaView style={Styles.main_theme}>
                    <QRCodeScanner
                        onRead={this.onSuccess}
                        fadeIn={true}
                        showMarker={true}
                        cameraStyle={{
                            width: Dimensions.get('screen').width - 50,
                            alignSelf: 'center',
                            marginTop: -90,
                        }}
                    //flashMode={RNCamera.Constants.FlashMode.torch}                
                    />
                </SafeAreaView>
            </>
        );
    }
}