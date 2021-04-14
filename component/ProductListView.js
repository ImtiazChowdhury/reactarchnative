import React from 'react'
import { Image, ScrollView, Text, View, StyleSheet } from 'react-native';
import loaderGif from "../assets/loading-min.gif"
import ProductCardView from './ProductCardView';

function ProductListView(props = {}) {
    const { products, loading } = props;

    return (
        <ScrollView>

            {loading && <Image source={loaderGif} />}
            {products && products.length > 0 &&
                <>
                    <Text style={style.title}>Total {products && products.length || 0} Products Found</Text>
                    <View>
                        {products.map(product=><ProductCardView product={product} />)}
                    </View>
                </>
            }


        </ScrollView>
    )
}

const style= StyleSheet.create({
    title:{
        fontSize: 16,
        color: "#333",
        padding: 10,
        marginBottom: 10,
        textAlign: "center",
        // fontWeight: "bold"
    }
})

export default ProductListView
