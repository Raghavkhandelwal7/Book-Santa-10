import React, {Component} from 'react';
import { View , Text, StyleSheet} from 'react-native';
import {Header,Icon,Badge} from 'react-native-elements';
import ThemedListItem from 'react-native-elements/dist/list/ListItem';

export default class MyHeader extends Component{
    constructor(props){
        super(props)
        this.state = {
            value:''
        }
    }

    getNumberOfUnreadNotifications(){
        db.collection('all_notifications').where('notification_status','==',"unread")
        .onSnapshot((snapshot) => {
            var unreadNotifications = snapshot.docs.map((doc)=>doc.data())
            this.setState({
                value:unreadNotifications.length
            })
        })
    }

    componentDidMount(){
        this.getNumberOfUnreadNotifications()
    }

    BellIconWithBadge = () => {
        return(
            <View>
                <Icon name = 'bell' type = 'font-awesome' color = '#676767' size ={25}
                onPress ={()=>{
                    props.navigation.navigate('Notification')
                }} />
                <Badge
                value={this.state.value}
                containerStyle={{position:'absolute',top:-4,right:-4}}/>
            </View>
        )
    }

    render(){
        return(
            <Header
            leftComponent = {<Icon name = 'bars' type = 'font-awesome' color = '#676767'
            onPress ={()=>{
                this.props.navigation.toggleDrawer()
            }} />}
            centerComponent = {{text:this.props.title,  style:{color:'#98A5AE', fontSize:20, fontWeight:'bold', }}}
            rightComponent = {<this.BellIconWithBadge {...this.props}/>}
            backgroundColor = '#eafafe'
            />
        ); 
    }
}