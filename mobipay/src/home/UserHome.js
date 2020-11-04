import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    RefreshControl,
    Pressable
} from 'react-native';
import Styles from './../styles';
import { Header, Avatar, ListItem } from 'react-native-elements';
import { Card } from 'react-native-ui-lib';
import I18n from './../../i18n/locales/i18n';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
export default class UserHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadActivity: true,
            walletBalance: 0,
            transactions: [],
            userId: 0,
            refresh: false,
        }
    }
    render() {
        return (
            <>
                <Header
                    containerStyle={{
                        marginTop: 5,
                        padding:5,
                        borderBottomWidth: 0,
                        backgroundColor:'#fff'
                    }}
                    backgroundColor='#fff'
                    leftComponent={                        
                        <Pressable
                            android_ripple={{
                                color: '#bcbcbc',
                                radius: 25,
                                borderless: true
                            }}
                        >
                            <TouchableOpacity onPress={()=>{console.log('open side drawer')}}>
                                <Icon name="sort" size={35} />
                            </TouchableOpacity>
                        </Pressable>
                    }
                    centerComponent={<Image source={require('./../../assets/bell/bell.png')} style={{ width: 30, height: 30 }} />}
                    rightComponent={
                        <Avatar
                            rounded
                            source={{
                                uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                            }}
                        />
                    }
                    placement="right"
                />
                <SafeAreaView
                    style={Styles.main_theme}
                >
                    <ScrollView
                        refreshControl={
                            <RefreshControl refreshing={this.state.refresh} onRefresh={() => this.loadTransactions(this.state.userId)} />
                        }
                    >
                        <View>
                            <View style={{
                                margin: 15
                            }}>
                                <View style={{marginBottom:10}}>
                                    <Text style={Styles.aval_bal}>{I18n.t('availablebalance')}</Text>
                                    <Text style={Styles.aval_bal_val}>{this.state.walletBalance} KWD</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                    <Card style={Styles.hero_grid} onPress={() => this.moveToRecharge()}>
                                        <View style={Styles.hero_grid_image_wrapper}>
                                            <Icon name="add" color="black" size={35} />
                                        </View>
                                        <Text style={Styles.hero_grid_title}>{I18n.t('recharge')}</Text>
                                    </Card>
                                    <Card style={Styles.hero_grid} onPress={() => this.moveToSend()}>
                                        <View style={Styles.hero_grid_image_wrapper}>
                                            <Icon name="north-east" color="black" size={35} />
                                        </View>
                                        <Text style={Styles.hero_grid_title}>{I18n.t('send')}</Text>
                                    </Card>
                                    <Card style={Styles.hero_grid} onPress={() => this.moveToRequest()} >
                                        <View style={Styles.hero_grid_image_wrapper}>
                                            <Icon name="south-east" color="black" size={35} />
                                        </View>
                                        <Text style={Styles.hero_grid_title}>{I18n.t('request')}</Text>
                                    </Card>
                                    <Card style={Styles.hero_grid} onPress={() => this.moveToPayment()}>
                                        <View style={Styles.hero_grid_image_wrapper}>
                                            <Icon name="qr-code" color="black" size={35} />
                                        </View>
                                        <Text style={Styles.hero_grid_title}>{I18n.t('pay')}</Text>
                                    </Card>
                                </View>
                            </View>
                            {!this.state.loadActivity && this.state.transactions.length === 0 &&
                                <View style={Styles.no_transactions}>
                                    <Icon name="qr-code-scanner" size={120} color="#bcbcbc"></Icon>
                                    <Text style={Styles.no_transactions_text}>{I18n.t('noactivity')}</Text>
                                </View>

                            }
                            {this.state.loadActivity &&
                                <SkeletonPlaceholder>
                                    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" margin={15}>
                                        <SkeletonPlaceholder.Item width={60} height={60} borderRadius={20} />
                                        <SkeletonPlaceholder.Item marginLeft={20}>
                                            <SkeletonPlaceholder.Item width={Dimensions.get('screen').width - 150} height={20} borderRadius={4} />
                                            <SkeletonPlaceholder.Item
                                                marginTop={6}
                                                width={Dimensions.get('screen').width - 200}
                                                height={20}
                                                borderRadius={4}
                                            />
                                        </SkeletonPlaceholder.Item>
                                    </SkeletonPlaceholder.Item>
                                    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" margin={15}>
                                        <SkeletonPlaceholder.Item width={60} height={60} borderRadius={20} />
                                        <SkeletonPlaceholder.Item marginLeft={20}>
                                            <SkeletonPlaceholder.Item width={Dimensions.get('screen').width - 150} height={20} borderRadius={4} />
                                            <SkeletonPlaceholder.Item
                                                marginTop={6}
                                                width={Dimensions.get('screen').width - 200}
                                                height={20}
                                                borderRadius={4}
                                            />
                                        </SkeletonPlaceholder.Item>
                                    </SkeletonPlaceholder.Item>
                                </SkeletonPlaceholder>
                            }
                            {this.state.loadActivity &&
                                <View
                                    style={Styles.actvity_view}
                                >
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <Text style={Styles.actvity_title}>{I18n.t('youractivity')}</Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginTop: 6 }} onPress={() => this.props.navigation.navigate('user-activity')}>
                                                <Text style={Styles.actvity_history}>{I18n.t('checkhistory')}</Text>
                                                <Icon name="chevron-right" color="#fff" size={22} style={{ marginTop: 0 }} ></Icon>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Text style={Styles.day_label}>{I18n.t('today')}</Text>
                                    <View>
                                        <ListItem containerStyle={Styles.balck_listitem} >
                                            <View style={Styles.black_listitem_avatar}>
                                                <Icon name="expand-less" color="#FCFCFC" size={36}></Icon>
                                            </View>
                                            <ListItem.Content>
                                                <ListItem.Title style={Styles.black_listitem_title}>Diet care</ListItem.Title>
                                                <ListItem.Subtitle style={Styles.black_listitem_subtitle}>Restaurent</ListItem.Subtitle>
                                            </ListItem.Content>
                                            <Text style={Styles.black_listitem_right_title}>$100</Text>
                                        </ListItem>
                                        <ListItem containerStyle={Styles.balck_listitem} >
                                            <View style={Styles.black_listitem_avatar}>
                                                <Icon name="expand-more" color="#FCFCFC" size={36}></Icon>
                                            </View>
                                            <ListItem.Content>
                                                <ListItem.Title style={Styles.black_listitem_title}>Diet care</ListItem.Title>
                                                <ListItem.Subtitle style={Styles.black_listitem_subtitle}>Restaurent</ListItem.Subtitle>
                                            </ListItem.Content>
                                            <Text style={Styles.black_listitem_right_title}>$100</Text>
                                        </ListItem>
                                    </View>
                                    <Text style={Styles.day_label}>{I18n.t('yesterday')}</Text>
                                    <View>
                                        <ListItem containerStyle={Styles.balck_listitem} >
                                            <View style={Styles.black_listitem_avatar}>
                                                <Icon name="expand-less" color="#FCFCFC" size={36}></Icon>
                                            </View>
                                            <ListItem.Content>
                                                <ListItem.Title style={Styles.black_listitem_title}>Diet care</ListItem.Title>
                                                <ListItem.Subtitle style={Styles.black_listitem_subtitle}>Restaurent</ListItem.Subtitle>
                                            </ListItem.Content>
                                            <Text style={Styles.black_listitem_right_title}>$100</Text>
                                        </ListItem>
                                        <ListItem containerStyle={Styles.balck_listitem} >
                                            <View style={Styles.black_listitem_avatar}>
                                                <Icon name="expand-less" color="#FCFCFC" size={36}></Icon>
                                            </View>
                                            <ListItem.Content>
                                                <ListItem.Title style={Styles.black_listitem_title}>Diet care</ListItem.Title>
                                                <ListItem.Subtitle style={Styles.black_listitem_subtitle}>Restaurent</ListItem.Subtitle>
                                            </ListItem.Content>
                                            <Text style={Styles.black_listitem_right_title}>$100</Text>
                                        </ListItem>
                                        <ListItem containerStyle={Styles.balck_listitem} >
                                            <View style={Styles.black_listitem_avatar}>
                                                <Icon name="expand-more" color="#FCFCFC" size={36}></Icon>
                                            </View>
                                            <ListItem.Content>
                                                <ListItem.Title style={Styles.black_listitem_title}>Diet care</ListItem.Title>
                                                <ListItem.Subtitle style={Styles.black_listitem_subtitle}>Restaurent</ListItem.Subtitle>
                                            </ListItem.Content>
                                            <Text style={Styles.black_listitem_right_title}>$100</Text>
                                        </ListItem>
                                    </View>
                                </View>
                            }
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginRight: 15, marginLeft: 15, marginTop: 5 }}>
                                <View>
                                    <Text style={Styles.offer_title}>{I18n.t('offers')}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginTop: 6 }}>
                                        <Text style={Styles.offers_list}>{I18n.t('seeall')}</Text>
                                        <Icon name="chevron-right" color="black" size={22} style={{ marginTop: 0 }} ></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>Offers with slider</Text>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
    loadTransactions(userId) {
        this.setState({
            refresh: true,
        });
    }
    componentDidMount() {
        AsyncStorage.getItem('wallet_balance').then((response) => {
            console.log(response);
        });
    }
    moveToPayment() {
        this.props.navigation.navigate('create-payment');
    }
    moveToRecharge() {

    }
    moveToSend() {

    }
    moveToRequest() {

    }
}