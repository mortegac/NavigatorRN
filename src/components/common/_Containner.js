import React, { Component } from 'react';
import { View, Platform  } from 'react-native';
import styled from 'styled-components/native';
import {marginHorizontal, marginVertical} from '../../constants/screenConf'

const Containner = styled.View`
  flex: 1;
  flex-Direction: column;  
  margin-top: ${marginHorizontal};
  padding-left : ${marginVertical};  
  padding-right : ${marginVertical};
  `;

class _Containner extends Component {
  render(){
    return(
      <Containner { ...this.props } />
    )
  }
}
export { _Containner };