import React from 'react';
import { ScrollView } from 'react-native';
import connector from './connector/connector';
import config from "./config.json"
import productListFactory from "./container/ProductList"
import ProductListView from './component/ProductListView';

connector.baseUrl = config.baseUrl;

const ProductList = productListFactory({View: ProductListView});

export default function App() {

  return (
    <ScrollView>

      <ProductList />
      
    </ScrollView>
  );
}

