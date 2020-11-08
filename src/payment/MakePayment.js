import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    TextInput
} from 'react-native';
import I18n from './../../i18n/locales/i18n';
import Styles from './../styles';
import { Header, Button } from 'react-native-elements';
import { HeaderBackButton } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card } from 'react-native-ui-lib';
export default class MakePayment extends React.Component {
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
                            {I18n.t('paymentdetails')}
                        </Text>
                    }
                />
                <SafeAreaView style={Styles.main_theme}>
                    <ScrollView>
                        <Card style={Styles.vendor_info}>
                            <View style={Styles.vendor_icon}>
                                <Icon name="shopping-bag" color="#fff" size={60} />
                            </View>
                            <View>
                                <Text style={Styles.vendor_name}>{this.props.route.params.data.data}</Text>
                                <Text style={{ textAlign: 'center' }}>Kuwait</Text>
                            </View>
                        </Card>
                        <View style={Styles.amount_input}>
                            <TextInput keyboardType="decimal-pad" placeholder="Enter Amount" style={Styles.amount_input_field} />
                        </View>
                        <View style={Styles.footer_view}>
                            <Button
                                title="Pay Now"
                                buttonStyle={Styles.pay_button}
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>

        );
    }
    componentDidMount() {
        //console.log(this.props.route.params.data.data);
    }
}