import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Başlık-1'} />
        <Header headerText={"Başlık-2"} />
        <AlbumList />
    </View>
);


AppRegistry.registerComponent('albums', () => App);
