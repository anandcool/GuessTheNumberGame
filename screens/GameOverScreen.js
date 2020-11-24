import React from 'react'
import {View,Text,StyleSheet, Button, Image} from 'react-native'
import BodyText from '../components/BodyText'
import MainButton from '../components/MainButton'
import color from '../constants/color'

const GameOverScreen = props =>{

    return (
        <View style={styles.screen}>
    <BodyText>The Game is Over!!!</BodyText>
    <View style={styles.imgContainer}>
    <Image 
    source={require('../assets/success.png')}
    style={styles.image} resizeMode="cover"/>
    </View>
    <View style={styles.resultContainer}>
    <BodyText style={styles.resultContainer}>Your phone needed <Text style={styles.highlight}>{props.numOfRounds}</Text> rounds to guess the number... <Text style={styles.highlight}>{props.userNumber}</Text> </BodyText>
    <MainButton onPress={()=>{props.onRestart()}}>NEW GAME</MainButton>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:'100%',
        height:'100%',
    },
    imgContainer:{
        borderRadius:150,
        borderWidth:3,
        borderColor:'black',
        width:300,
        height:300,
        overflow:'hidden',
        marginVertical:30
    },
    resultContainer:{
        marginHorizontal:30,
        marginVertical:20
    },
    highlight:{
        color:color.primary,
        fontFamily:"open-sans-bold"

    },
    resultText:{
        color:color.primary,
        fontSize:20
    },
    userNumberState:{
        justifyContent:'center',
        alignItems:'center'
    }
})

export default GameOverScreen