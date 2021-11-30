import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import styles from './styles'

const CarItem = (props) =>{
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={require("../../assets/images/child2.jpeg")}
                style={styles.image}
            >
            </ImageBackground>
            <View style={styles.titles}>

                <Text style={styles.title}>Børnenes huskeliste</Text>
                <Text style={styles.subtitle}>Opret en konto i dag. Helt gratis!</Text>
            </View>

        </View>
    );
};

export default CarItem;