import * as React from 'react';

import { View,Text,StyleSheet,TouchableOpacity,TextInput,Image,FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import MyHeader from '../components/MyHeader'

import{Card} from 'react-native-elements'
import db from '../config'
import firebase from 'firebase'
export default class MyReceivedBookListScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            userID:firebase.auth().currentUser.email,
            receivedBookList:[],
            donorName:'',
        }
        this.requestRef = null;
    }

    getReceivedBookList = ()=>{
        this.requestRef = db.collection("RequestedBooks").where('userID','==',this.state.userID)
        .where('bookStatus','==',"Received")
        .onSnapshot((snapshot)=>{
            var receivedBookList = snapshot.docs.map((doc)=>doc.data())
            this.setState({
                receivedBookList:receivedBookList
            })
        })
    }

    componentDidMount(){
        this.getReceivedBookList()
    }

    componentWillUnmount(){
        this.requestRef()
    }

    keyExtractor = (item,index)=>index.toString()
    renderItem = ({item,i})=>{
        return(
            <ListItem 
            key={i} bottomDivider> 
                <ListItem.Content> 
                    <ListItem.Title style = {{ color: 'black', fontWeight: 'bold' }}>{item.bookName} </ListItem.Title> 
                    <ListItem.Subtitle>{item.bookStatus}</ListItem.Subtitle> 
                </ListItem.Content>  
            </ListItem>

        )
    }
    render(){
        return(
            <View
            style = {{flex:1}}>
                <MyHeader 
                    title = "Recieved Books"
                    navigation = {this.props.navigation}/>
                <View
                style = {{flex:1}}>
                    {
                        this.state.receivedBookList.length === 0 ? (
                            <View 
                            style = {styles.container}>
                                <Text
                                style = {{fontSize:15}}>
                                    List Of All Received Books
                                </Text>
                            </View>
                        )
                        :(
                            <FlatList 
                            keyExtractor = {this.keyExtractor}
                            data = {this.state.receivedBookList}
                            renderItem = {this.renderItem}/>
                        )
                    }
                </View>     
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        backgroundColor:"#00f8fc",
       },

    button:{
        height:40,
        width:200,
        borderRadius:10,
        borderWidth:1,
        marginTop:10,
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:"#2a229c",
    },
})     
