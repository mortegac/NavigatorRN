import React, { Component } from 'react';
import styled from 'styled-components/native';
import { navigation } from 'react-navigation';
import {_Containner, _TitleText} from '../components/common'

const Body = styled.View`
  height: 94%;
`;

class AuthHome extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <_Containner style={{alignItems: 'center', justifyContent: 'center'}}>
        <_TitleText text="Home"/>
      </_Containner>
    )}



}


export default AuthHome;

