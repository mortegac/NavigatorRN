// ____________________________________________________________________

// Input Custom from common Library
// Se transforma a component de clase, ya que antes era stateless y 
// provoco error con React 16.x
// ____________________________________________________________________
import React,{Component} from 'react';
import { TouchableOpacity, Text  } from 'react-native';



class _Button extends Component {
  render() {
    
  ///const { placeholder, secureTextEntry, value, onChangeText } = this.props;
  // const _default = {
  //   style: styles.inputStyle,
  //   underlineColorAndroid: "transparent",
  //   placeholderTextColor: "white"
  // };

  // const _props = { ..._default, ...this.props }

  return (
        <TouchableOpacity  { ...this.props }>
          <Text style={{ color: this.props.textColor }}>{this.props.text}</Text>
        </TouchableOpacity>

      );
}}


// const _Button = ({
//  label, value, onChangeText, placeholder, secureTextEntry 
// }) => {
//   const { inputStyle, labelStyle, containerStyle } = styles;

//   return (
//     <TextInput
//       placeholder={placeholder}
//       autocorrect={false}
//       secureTextEntry={ !!(secureTextEntry) }
//       style={inputStyle}
//       underlineColorAndroid="transparent"
//       placeholderTextColor="white"
      
//       value={value}
//       onChangeText={onChangeText}
//     />
//   );
// };


// const styles = {
//   inputStyle: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//     borderColor: '#fff',
//     // borderWidth: 1,
//     lineHeight: 23,
//     padding: 10,
//     height: 60,
//     width: '100%',
//     marginBottom: 20,
//     color: '#fff',
//     borderBottomColor: '#fff',
//     borderBottomWidth: 1,
//     fontSize: 18,
//   },
// };

export { _Button };
