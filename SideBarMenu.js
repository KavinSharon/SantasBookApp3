import * as React from 'react';

import { View,Text,StyleSheet,TouchableOpacity} from 'react-native';

import {DrawerItems} from 'react-navigation-drawer';

import firebase from 'firebase'

export default class SideBarMenu extends React.Component{
    render(){
        return(
            <View
            style = {styles.container}>
                <View
                style = {styles.drawerItemContainer}>
                    <DrawerItems
                    {...this.props}/>
                </View>
                <View
                style = {styles.logoutContainer}>
                    <TouchableOpacity
                    style = {styles.logoutButton}>
                        <Text
                        style = {styles.logoutText}
                        
                        onPress = {()=>{
                            this.props.navigation.navigate('WelcomeScreen')
                            firebase.auth().signOut()
                            
                        }}>
                            Logout
                        </Text>
                    </TouchableOpacity>  
                </View>
            </View>
        )
    }
    
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
       },
    drawerItemContainer:{
        flex:0.8,
        paddingTop:30,
    },
    logoutContainer:{
        flex:0.2,
        justifyContent:'flex-end',
        paddingBottom:20,
    },
    logoutButton:{
        height:30,
        width:'100%',
        justifyContent:'center',
        padding:10,
    },
    logoutText:{
        fontSize:30,
        fontWeight:'bold',
    },
})     