import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
export default class Loading extends React.Component{
    render(){
        return(
            <>
            <SafeAreaView style={{
                padding:30,
            }}>
                <View>
                    <Text>Loading</Text>
                </View>
                </SafeAreaView>            
            </>
        );
    }
}