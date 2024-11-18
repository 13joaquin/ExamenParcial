import React from 'react';
import { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, FlatList, Pressable, } from 'react-native';
import FormularioPro from './src/componente/Fproducto';
import Producto from './src/componente/producto';

const App = () => {
  const [modalProducto, setModalProducto] = useState(false);
  const[producto, setProducto] = useState([]);

  return (
    <SafeAreaView style={AppStyle.container}>
      <View style={AppStyle.rowContainer}>
      <Image 
      style={AppStyle.imagenLogo}
      source={require('./images/LOGO-LA-TORRE.png')}/>
      <Text style={AppStyle.Title1}>
        Registros de Productos</Text>
      </View>
      <View>
      <Text style={AppStyle.Title2}>Productos</Text>
      <Pressable style = {AppStyle.btnNewProducto} 
      onPress={()=> setModalProducto(!modalProducto)}>
        <Text style = {AppStyle.btnTxtNewEstudiantes}>Nuevos Productos</Text>
      </Pressable> 
      </View>
    
      {producto.length === 0?(
        <Text style={AppStyle.NoEstudiantes}> Noo hay Estudiantes</Text>
      ):(
        <FlatList
        style={AppStyle.listado}
          data={producto}
          keyExtractor={ item => item.id}
          renderItem={({item})=>{
            return(
              <Producto
                item = {item}
              />
         )
        }}
        />)
     
    }
    <FormularioPro
      modalProdcuto = {modalProducto}
      setModalProducto = {setModalProducto}
      producto = {producto}
      setProducto= {setProducto}
      />
    </SafeAreaView>
  );
};
const AppStyle = StyleSheet.create({
  container:{
    backgroundColor: '#7c32af',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  imagenLogo:{
    borderRadius: 100,
    width: 100,
    height: 100,
    marginRight: 10,
  },
  Title1: {
    textAlign: 'center',
    fontSize: 50,
    color: '#',
    fontWeight: '900',
  },
 Title2: {
  textAlign: 'left',
  fontSize: 25,
  fontWeight: '900',
  color: '#',
 },
 btnNewProducto:{
  backgroundColor: '#4234ca',
  padding: 20,
  marginTop: 25,
  marginHorizontal: 20,
  borderRadius: 10,
},
btnTxtNewEstudiantes:{
  textAlign: 'center',
  color: '#090a0a',
  fontSize: 19,
  fontWeight: '900',
  textTransform: 'uppercase'
},
NoEstudiantes:{
  marginTop: 40,
  textAlign: 'center',
  fontSize: 24,
  fontWeight: '600',
},
listado:{
  marginTop: 50,
  marginHorizontal: 30,
},
});
export default App;
