import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
     

        <ImageBackground 
            style={styles.background}
            source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logodog} source={require('../assets/logo-dog.jpg')} />
                <Text>Welcome Home!</Text>
            </View>
            <View style={styles.loginButton}>
            </View>
            <View style={styles.registerButton}>
            </View>
        </ImageBackground>

     
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1, 
        justifyContent: "flex-end",
        alignItems: "center", 
    }, 
    loginButton: {
        width: '100%', 
        height: 70, 
        backgroundColor: '#fc5c65',
    },
    logodog: {
        width: 100, 
        height: 100, 
        borderRadius: 50,
        
    },
    logoContainer: {
        position: 'absolute', 
        top: 70, 
        alignItems: "center",
    },
    registerButton: {
        width: '100%', 
        height: 70, 
        backgroundColor: '#4ecdc4',
    },
})

export default WelcomeScreen;