import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class WalkThrough extends React.Component {
    render() {
        return (
            <>
                <SafeAreaView>
                    <View>
                        <Button
                            title="button on last slide"
                            onPress={() => this.moveToUserRegister()}
                        ></Button>
                    </View>
                </SafeAreaView>

            </>
        );
    }
    moveToUserRegister() {
        this.props.navigation.navigate('user-register');
        AsyncStorage.setItem('isFirstTime', 'no');
    }
}

