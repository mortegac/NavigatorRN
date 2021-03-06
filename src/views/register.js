import React, { Component } from 'react';
import styled from 'styled-components/native';
import { navigation } from 'react-navigation';
import {_Containner, _TitleText, _Button} from '../components/common'

const Body = styled.View`
  height: 94%;
`;

class register extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <_Containner style={{alignItems: 'center', justifyContent: 'center'}}>
        <_TitleText text="REGISTER"/>
        <_Button
            onPress={() => navigation.navigate('login') }
            style={{ 
              backgroundColor: 'gray', 
              width:'50%' ,
              height: 50, 
              justifyContent: 'center',
              alignItems: 'center', 
              marginBottom:20, 
            }}
            text="VOLVER"
            textColor='#000'
          />
      </_Containner>
    )}



}


export default register;

