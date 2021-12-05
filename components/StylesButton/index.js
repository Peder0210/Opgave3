import  React from 'react'
import {View, Text, Pressable} from 'react-native'
import styles from './styles'

const StylesButton = (props) =>{

    const type = props.type
    const text = props.text
    const backgroundColor = type ==='primary' ? 'black' : 'white';
    const textColor = type === 'primary' ? 'white':'black';

    return (
        <View style={styles.container}>
<Pressable style={[styles.button, {backgroundColor: backgroundColor}]}  onPress={() => {
    console.warn('Du er nu oprettet dig')
}}>

<Text style={[styles.text, {color: textColor}]}> Opret dig som {text}</Text>
</Pressable>
        </View>
    );
};

export default StylesButton;