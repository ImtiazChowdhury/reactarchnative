import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import connector from '../connector/connector'

function ProductCardView(props) {

    const { product } = props;

    return (
        <View style={style.card}>
            <Image source={connector.joinWithBase(product.cover.medium)} style={style.image}/>
            <Text style={style.name}>{product.name}</Text>
            <Text style={style.price}>{product.price.regular}</Text>
        </View>
    )
}
export default ProductCardView

const style=StyleSheet.create({
    card:{
        borderWidth: 1,
        borderColor: "#3333",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        // justifyContent:"center",
        alignItems: "center"
    },
    image: {
        height: 250,
        width: "80%",
        resizeMode: "contain"
    },
    name:{
        textAlign: "center",
        fontFamily: "serif",
        fontSize: 14
    },
    price:{
        textAlign: "center",
        fontFamily: "serif",
        fontSize: 14
    }
    
})
