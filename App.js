import React, { useState } from 'react';
import axios from 'axios';
import {
  Text,
  Button,
  View,
  FlatList,
} from 'react-native';
import Category from './src/Category';

function App() {

  const [datas, setDatas] = useState([]);


  async function getDataCategory() {

    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    setDatas(response.data.categories);
  }

  const gelenData = ({ item }) => <Category item={item} />;

  return (
    <View>
      <FlatList
        data={datas}
        renderItem={gelenData}
      />
      <Button title='Get Data' onPress={getDataCategory} />
    </View>
  );
};


export default App;
