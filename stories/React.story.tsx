import * as React from 'react'
import {Page} from './components';
import styled from 'styled-components'
import Container from '@material-ui/core/Container'

export const Card = styled.div`
margin-bottom: 10px;
  margin-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  border: 0px;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  border-radius: 8px;
  box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, 0.05);
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-color: #fff;
  background-clip: border-box;`


export const ReactCustom =()=>{

 return(
   <Page>
     <Container maxWidth="lg">
     <Card>
       <h2>Workflow Rules</h2>
       <div>Workflow rules allow you to perform certain automatic actions on specific records based on filter criteria. Workflow automations can send emails, update fields, create records and much more.</div>
     
      </Card>
     </Container>
     
   </Page>
 )
}