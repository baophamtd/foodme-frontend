import React from 'react';
//import API from '../../utilities/api';

import { AsyncStorage, Modal, StyleSheet, Text, TextInput, View, Dimensions, Image, ImageBackground, Animated, PanResponder, TouchableOpacity, TouchableHighlight, Button, ScrollView, SafeAreaView, StatusBar, FlatList} from 'react-native';
import { List, ListItem, SearchBar, Icon } from 'react-native-elements';
import Swiper from 'react-native-deck-swiper';
import ImageViewer from 'react-native-image-zoom-viewer';
import {LoginManager} from 'react-native-fbsdk';


const API = require('../../utilities/api');
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class AddingFriends extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 5,
      error: null,
      refreshing: false,
      searchText: ''
    };

    this.arrayholder = [];

  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest(){
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
        this.arrayholder = res.results;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  updateSearch = searchText => {
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.title.toUpperCase()}
      ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
       const textData = searchText.toUpperCase();

       return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
      searchText: searchText
     });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: "#CED0CE",
          marginLeft: "5%"
        }}
      />
    );
  };

  render() {
    const { searchText } = this.state;
    return (
      <View style={{ flex: 1 , backgroundColor: '#efede6', flexDirection: 'column'}}>
        <View style={{ flex: 1 ,backgroundColor: '#ffa600', justifyContent: 'center',}}>
          <Text style={styles.headerText}>Form Group
          </Text>
        </View>
        <View style={{ flex: 8 , backgroundColor: 'white'}}>
          <SearchBar placeholder= "Name, @username, phone or email"
          onChangeText={searchText => this.updateSearch(searchText)}
          lightTheme
          round
          platform='default'
          value={searchText}
          inputStyle={{color:'black'}}
          autoCorrect={false}
          />
          <View style={{flex: 0.45, backgroundColor: '#ffc250',justifyContent: 'center',}}>
            <Text style = {{color:'white',fontSize: 20, fontWeight: '500', textAlign: 'left', marginLeft: '2%'}}>Top People</Text>
          </View>
          <View style={{flex: 8}}>
            <FlatList
              data={this.state.data}
              keyExtractor={item => item.email}
              ItemSeparatorComponent={this.renderSeparator}
              renderItem={({ item }) => (
                <ListItem
                  roundAvatar
                  title={`${item.name.first} ${item.name.last}`}
                  subtitle={<Text style={{color:'grey'}}>{'@'+item.email.substring(0,item.email.indexOf('@'))}</Text>}
                  leftAvatar={{source: {uri:item.picture.thumbnail}}}
                  rightIcon={
                    <View style={{backgroundColor: '#ffc250', borderRadius: 100}}>
                      <Icon name={'done'} size={20} color='white'/>
                    </View>}
                />
              )}
              />
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerText: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: 'white',
    marginTop: '5%'
  },

});
