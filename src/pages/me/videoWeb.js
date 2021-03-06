/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  WebView,
  Platform
} from 'react-native';

const {width,height}=Dimensions.get('window');
import TopTitleCell from '../common/topTitleCell';

export default class VideoWeb extends Component {
    constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <TopTitleCell title='视屏介绍' goBack={this.toback} leftTitle="返回"/>
        <WebView
         source={{uri: 'http://v.qq.com/page/x/5/z/x017958ub5z.html'}}
         style={{marginTop:Platform.OS == 'ios' ? 55:35,}}
       />
       </View>
    );
  }
  toback=()=>{
    const {navigator}=this.props;
    if (navigator) {
      navigator.pop()
    }
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor:'white'
   },
   text:{
     color:'green',
     fontSize:14,
   }

});
