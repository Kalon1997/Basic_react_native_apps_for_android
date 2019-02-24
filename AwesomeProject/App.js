import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class UselessTextInput extends Component {
  constructor() {
    super()
    this.state = {
        restext: "",
        calculationtext: ""
    }
  }

    calculatee(){
        const text = this.state.restext
        this.setState({
             //lc = this.state.text.split('').pop()
            //if(lc != '+' && lc != '-' && lc != '/' && lc == '*')
            calculationtext: eval(text)

        })
    }


  validate() {
  const text = this.state.restext
  switch(text.slice(-1)) {
    case '+':
    case '-':
    case '/':
    case '*':
            return false
  }
            return true
  }

  buttonPressed(text) {

    if(text == '=') {
        return this.validate && this.calculatee()
     }
    this.setState({
        restext: this.state.restext+text
    })


  }

  operate(operations) {
        switch(operations) {
               case 'D':
                    let text = this.state.restext.split('')
                    text.pop()
                    this.setState({
                        restext: text.join('')
                    })

                    break
                case '+':
                case '-':
                case '*':
                case '/':
                     const lastchar = this.state.restext.split('').pop()
                     if(lastchar == '+' || lastchar == '-' || lastchar == '/' || lastchar == '*')  return
                    if(this.state.text == "") return
                    this.setState({
                        restext: this.state.restext + operations
                    })

        }

  }


  render() {
     return(
        <View style={styles.container}>
             <View style={styles.result}>
                <Text style={styles.restext}>{this.state.restext}</Text>
             </View>
             <View style={styles.calculation}>
                <Text style={styles.caltext}>{this.state.calculationtext}</Text>
             </View>
             <View style={styles.buttons}>
                    <View style={styles.numbers}>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => this.buttonPressed('7')}><Text style={styles.btntxt}>7</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.buttonPressed('8')}><Text style={styles.btntxt}>8</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.buttonPressed('9')}><Text style={styles.btntxt}>9</Text></TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => this.buttonPressed('4')}><Text style={styles.btntxt}>4</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.buttonPressed('5')}><Text style={styles.btntxt}>5</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.buttonPressed('6')}><Text style={styles.btntxt}>6</Text></TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => this.buttonPressed('1')}><Text style={styles.btntxt}>1</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.buttonPressed('2')}><Text style={styles.btntxt}>2</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.buttonPressed('3')}><Text style={styles.btntxt}>3</Text></TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => this.buttonPressed('0')}><Text style={styles.btntxt}>0</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.operate('D')}><Text style={styles.btntxt}>D</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.buttonPressed('.')}><Text style={styles.btntxt}>.</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.operations}>
                       <TouchableOpacity onPress={() => this.operate('+')}><Text style={styles.col}>+</Text></TouchableOpacity>
                       <TouchableOpacity onPress={() => this.operate('-')}><Text style={styles.col}>-</Text></TouchableOpacity>
                       <TouchableOpacity onPress={() => this.operate('*')}><Text style={styles.col}>*</Text></TouchableOpacity>
                       <TouchableOpacity onPress={() => this.operate('/')}><Text style={styles.col}>/</Text></TouchableOpacity>
                       <TouchableOpacity onPress={() => this.buttonPressed('=')}><Text style={styles.col}>=</Text></TouchableOpacity>
                    </View>
             </View>
      </View>
     );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    result: {
        flex: 2,
        backgroundColor: 'black',
        borderWidth: 5,
        borderColor: 'white'
    },
    restext: {
        color: 'white',
        fontSize: 50
    },
    calculation: {
        flex: 1,
        backgroundColor: 'black',
        borderWidth: 3,
        borderColor: 'white'
     },
     caltext: {
             color: 'white',
             fontSize: 30
      },
     buttons: {
        flex: 7,
        flexDirection: 'row'
     },
     btntxt: {
        fontSize: 35
     },
     numbers: {
        flex: 3,
        backgroundColor: 'gray',
        borderWidth: 3,
        borderColor: 'white'
     },
     col: {
        fontSize: 25,
        color: 'white'
     },
     operations: {
         flex: 1,
         justifyContent: 'space-around',
         alignItems: 'center',
         backgroundColor: 'black',
         borderWidth: 3,
         borderColor: 'white'
     }
})














































/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
/*
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

*/



/*
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello world!</Text>
      </View>
    );
  }
}
*/
/*
//import React from 'react';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
class App extends React.Component {
    render(){
    return (
         <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}>
           <Text>Hello world!</Text>
         </View>
    );
    }
}

export default App

*/