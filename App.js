
import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  TextInput,
  Platform,
  TouchableOpacity
  }
  from 'react-native';

export default class App extends React.Component{
  static navigationOptions = {title: 'MainActivity',};

  constructor(props){
      super(props)

      this.state = {
          TextInputStudentName: '',
          TextInputStudentClass: '',
          TextInputPhoneNumber: '',
          TextInputEmail: ''
      };
  }

  InsertStudentRecordsToServer = () => {
      fetch('https://localhost/jmc_react/students/insertstudent.php', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              name: this.state.TextInputStudentName,
              studentClass: this.state.TextInputStudentClass,
              phoneNumber: this.state.TextInputPhoneNumber,
              email: this.state.TextInputEmail
          })
      }).then((response) => response.json())
          .then((responseJson) => {
              Alert.alert(responseJson);
          }).catch((error) => {
              console.error(error);
          })
  }

  render() {
      return(
          <View>
              <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 20, marginTop: 15}}>
                  Student Registration Form
              </Text>

             <TextInput 
                  placeholder="Enter Student Name"
                  style={styles.TextInputStyleClass}
                  onChangeText={TextInputValue => this.setState({TextInputStudentName:TextInputValue})}
                  underlineColorAndroid='transparent'
                  
             />

              <TextInput 
                  placeholder="Enter Student Class"
                  style={styles.TextInputStyleClass}
                  onChangeText={TextInputValue => this.setState({TextInputStudentName:TextInputValue})}
                  underlineColorAndroid='transparent'
                  
             />

              <TextInput 
                  placeholder="Enter Student Phone Number"
                  style={styles.TextInputStyleClass}
                  onChangeText={TextInputValue => this.setState({TextInputStudentName:TextInputValue})}
                  underlineColorAndroid='transparent'
                  
             />

              <TextInput 
                  placeholder="Enter Student Email"
                  style={styles.TextInputStyleClass}
                  onChangeText={TextInputValue => this.setState({TextInputStudentName:TextInputValue})}
                  underlineColorAndroid='transparent'
                  
             />
            <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InsertStudentRecordsToServer}>
              <Text style={styles.TextStyle}>Insert Student</Text>
            </TouchableOpacity>
          </View>
      );
  }
}

const styles = StyleSheet.create({

  MainContainer :{

    alignItems: 'center',
    flex:1,
    paddingTop: 30,
    backgroundColor: '#fff'

  },

  MainContainer_For_Show_StudentList_Activity :{
    
    flex:1,
    paddingTop: (Platform.OS == 'ios') ? 20 : 0,
    marginLeft: 5,
    marginRight: 5
    
    },

  TextInputStyleClass: {

  textAlign: 'center',
  width: '90%',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  padding: 5,
  alignSelf: 'center',
  borderColor: '#B15',
  borderRadius: 5 ,

  },

  TouchableOpacityStyle: {

    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom:7,
    width: '90%',
    backgroundColor: '#00BCD4'

  },

  TextStyle:{
    color:'#fff',
    textAlign:'center',
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  }

});
