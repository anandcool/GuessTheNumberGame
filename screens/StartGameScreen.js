import React from 'react'
import { StyleSheet,View,Text, TextInput, Button } from 'react-native'
import Card from '../components/Card'
import color from '../constants/color'

const StartGameScreen = props =>{

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game !</Text>
            <View>
            <Card style={styles.inputContainer}>
            <Text>Select a Number!</Text>
            <TextInput/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}><Button title="Reset" onPress={()=>{}} color={color.primary}/></View>
                <View style={styles.button}><Button title="Confirm" onPress={()=>{}} color={color.accent}/></View>
            </View>
            </Card>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',
        paddingHorizontal:15
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center'
    },
    title:{
        fontSize:20,
        marginVertical:10
    },
    button:{
        flex:1,
        width:100,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default StartGameScreen