import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import Styles from './../styles';
import { Button, SearchBar, ListItem } from 'react-native-elements';
import I18n from './../../i18n/locales/i18n';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class UserActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAll: true,
            isPaid: false,
            isReceived: false,
        }
    }
    render() {
        return (
            <>
                <SafeAreaView
                    style={Styles.main_theme}
                >
                    <ScrollView>
                        <SearchBar
                            placeholder="Type Here..."
                            onChangeText={this.updateSearch}
                            value='Search'
                            round={true}
                            containerStyle={{
                                backgroundColor: '#fefefe',
                                borderTopWidth: 0,
                                borderBottomWidth: 0,
                                margin: 5
                            }}
                            inputContainerStyle={{
                                backgroundColor: '#fff',
                                borderWidth: 2,
                                borderBottomWidth: 2,
                            }}
                        />
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            margin: 10,
                            marginLeft: 20
                        }}>
                            <Button title={I18n.t('all')}
                                onPress={()=>this.chnageComponent('all')}
                                buttonStyle={{
                                    backgroundColor: this.state.isAll ? 'black' : '#f4f4f4',
                                    padding: 15,
                                    marginRight: 15,
                                    borderRadius: 10
                                }}
                                titleStyle={{
                                    color:this.state.isAll ? '#fff' : 'black',
                                    fontSize:18
                                }}
                            />
                            <Button title={I18n.t('paid')}
                                onPress={()=>this.chnageComponent('paid')}
                                buttonStyle={{
                                    backgroundColor: this.state.isPaid ? 'black' : '#f4f4f4',
                                    padding: 15,
                                    marginRight: 15,
                                    borderRadius: 10
                                }}
                                titleStyle={{
                                    color:this.state.isPaid ? '#fff' : 'black',
                                    fontSize:18
                                }}
                            />
                            <Button title={I18n.t('received')}
                                onPress={()=>this.chnageComponent('received')}
                                buttonStyle={{
                                    backgroundColor: this.state.isReceived ? 'black' : '#f4f4f4',
                                    padding: 15,
                                    marginRight: 15,
                                    borderRadius: 10
                                }}
                                titleStyle={{
                                    color:this.state.isReceived ? '#fff' : 'black',
                                    fontSize:18
                                }}
                            />
                        </View>
                        <View>
                            <View style={{ margin: 15 }}>
                                <Text style={Styles.actvity_title_black}>{I18n.t('youractivity')}</Text>
                                <Text style={Styles.day}>{I18n.t('today')}</Text>
                                <View>
                                    <ListItem>
                                        <View style={Styles.black_listitem_avatar}>
                                            <Icon name="expand-less" color="#FCFCFC" size={36}></Icon>
                                        </View>
                                        <ListItem.Content>
                                            <ListItem.Title style={Styles.white_listitem_title}>Diet care</ListItem.Title>
                                            <ListItem.Subtitle style={Styles.black_listitem_subtitle}>Restaurent</ListItem.Subtitle>
                                        </ListItem.Content>
                                        <Text style={Styles.white_listitem_right_title}>$100</Text>
                                    </ListItem>
                                    <ListItem>
                                        <View style={Styles.black_listitem_avatar}>
                                            <Icon name="expand-less" color="#FCFCFC" size={36}></Icon>
                                        </View>
                                        <ListItem.Content>
                                            <ListItem.Title style={Styles.white_listitem_title}>Diet care</ListItem.Title>
                                            <ListItem.Subtitle style={Styles.black_listitem_subtitle}>Restaurent</ListItem.Subtitle>
                                        </ListItem.Content>
                                        <Text style={Styles.white_listitem_right_title}>$100</Text>
                                    </ListItem>
                                </View>
                                <Text style={Styles.day}>{I18n.t('yesterday')}</Text>
                                <View>
                                    <ListItem>
                                        <View style={Styles.black_listitem_avatar}>
                                            <Icon name="expand-less" color="#FCFCFC" size={36}></Icon>
                                        </View>
                                        <ListItem.Content>
                                            <ListItem.Title style={Styles.white_listitem_title}>Diet care</ListItem.Title>
                                            <ListItem.Subtitle style={Styles.black_listitem_subtitle}>Restaurent</ListItem.Subtitle>
                                        </ListItem.Content>
                                        <Text style={Styles.white_listitem_right_title}>$100</Text>
                                    </ListItem>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }

    componentDidMount(){

    }
    chnageComponent(component){
        this.setState({
            isAll : component === 'all' ? true : false,
            isPaid : component === 'paid' ? true: false,
            isReceived: component === 'received' ? true : false,
        });
    }
}