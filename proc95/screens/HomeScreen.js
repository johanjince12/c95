import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config/config';




export default class HomeScreen extends React.Component {

render(){
  return(
    <View>
    <AppHeader/>
    <Text style={styles.studentChartContainer}>Johan</Text>
    </View>
  )
}


  johanApressed() {
    var johan = db.ref('Johan/' + '/');
    johan.update({
      absent: 'true',
    });
  }

  johanPpressed() {
    var johan = db.ref('Johan/' + '/');
    johan.update({
      present: 'true',
    });
  }

  jimApresed() {
    var jim = db.ref('Jim/' + '/');
    jim.update({
      absent: 'true',
    });
  }
  jimPpresed() {
    var jim = db.ref('Jim/' + '/');
    jim.update({
      present: 'true',
    });
  }
  carlApressed() {
    var carl = db.ref('Carl/' + '/');
    carl.update({
      absent: 'true',
    });
  }
  carlPpressed() {
    var carl = db.ref('Carl/' + '/');
    carl.update({
      present: 'true',
    });
  }
  bobApressed() {
    var bob = db.ref('Bob/' + '/');
    bob.update({
      absent: 'true',
    });
  }
  bobPpressed() {
    var bob = db.ref('Bob/' + '/');
    bob.update({
      present: 'true',
    });
  }
  markApressed() {
    var mark = db.ref('Mark/' + '/');
    mark.update({
      absent: 'true',
    });
  }
  markPpressed() {
    var mark = db.ref('Mark/' + '/');
    mark.update({
      present: 'true',
    });
  }
  goToBuzzerScreen = (buzzercolor)=>{
    this.props.navigation.navigate('BuzzerScreen', {color:buzzercolor} );
  };
}
















