import * as React from 'react'
import styled from 'styled-components'
import { INode, REACT_FLOW_CHART } from '../../src'
import MessageIcon from '@material-ui/icons/Message';
import ContactsIcon from '@material-ui/icons/Contacts';
import ScheduleIcon from '@material-ui/icons/Schedule';
import EventIcon from '@material-ui/icons/Event';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import SmsIcon from '@material-ui/icons/Sms';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import MailOutlineIcon from '@material-ui/icons/MailOutline';



const Outer = styled.div`
  padding: 10px 10px;
  display: flex;   
  margin-top: 3px;
  margin: 6px;
  font-size: 14px;
  background: #f3f2f2;
  cursor: move;
  border-radius: 8px;
`
const mystyle = {
  marginRight: "14px",
  alignContent: "space-between"

};


export interface ISidebarItemProps {
  type: string,
  ports: INode['ports'],
  properties?: any,
}

export const SidebarItem = ({ type, ports, properties }: ISidebarItemProps) => {
  

 if (type==="Message"){
  return (
    
    <Outer
      draggable={true}
      onDragStart={ (event) => {
        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties }))
      } }
    >

        
        <MessageIcon style={mystyle}/>
        Message body is 
    
    
    </Outer>

  )
 }
 else if (type==="Send-Email"){
  return (
    
    <Outer
      draggable={true}
      onDragStart={ (event) => {
        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties }))
      } }
    >

        <MailOutlineIcon style={mystyle}/> 
        Send Email
    </Outer>

  )
 }
 else if (type==="Send-SMS-Message"){
  return (
    
    <Outer
      draggable={true}
      onDragStart={ (event) => {
        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties }))
      } }
    >

        <SmsIcon style={mystyle}/> 
        Send SMS Message
    </Outer>

  )
 }
 else if (type==="Contact"){
  return (
    
    <Outer
      draggable={true}
      onDragStart={ (event) => {
        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties }))
      } }
    >

        <ContactsIcon style={mystyle}/> 
        Contact data is
    </Outer>

  )
 }
 else if (type==="Incoming-SMS"){
  return (
    
    <Outer
      draggable={true}
      onDragStart={ (event) => {
        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties }))
      } }
    >

        <SmsIcon style={mystyle}/> 
        Incoming SMS
    </Outer>

  )
 }
 else if (type==="Contact-Subscribed"){
  return (
    
    <Outer
      draggable={true}
      onDragStart={ (event) => {
        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties }))
      } }
    >

        <GroupAddIcon style={mystyle}/> 
        Contact Subscribed
    </Outer>

  )
 }
 else if (type==="Contact-Tagged"){
  return (
    
    <Outer
      draggable={true}
      onDragStart={ (event) => {
        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties }))
      } }
    >

        <LocalOfferIcon style={mystyle}/> 
        Contact Tagged
    </Outer>

  )
    }
 else if (type==="Time"){
  return (
    
    <Outer
      draggable={true}
      onDragStart={ (event) => {
        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties }))
      } }
    >
       
        <ScheduleIcon style={mystyle}/>
        Time is
     
    
    </Outer>

  )
 }
 else if (type==="Date-Time"){
  return (
    
    <Outer
      draggable={true}
      onDragStart={ (event) => {
        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties }))
      } }
    >
     
        <EventIcon style={mystyle}/>
        Date-time is
     
    
    </Outer>

  )
 }
 else if (type==="Day"){
  return (
    
    <Outer
      draggable={true}
      onDragStart={ (event) => {
        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties }))
      } }
    >
      
        <CalendarTodayIcon style={mystyle}/>
        Day is
      
    
    </Outer>

  )
 }
 else if (type==="AB-Split"){
  return (
    
    <Outer
      draggable={true}
      onDragStart={ (event) => {
        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties }))
      } }
    >
      
        <CallSplitIcon style={mystyle}/>
        AB Split
      
    
    </Outer>

  )
 }
  else return (
    
    <Outer
      draggable={true}
      onDragStart={ (event) => {
        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties }))
      } }
    >
      {type}
      
    </Outer>

  )
}
