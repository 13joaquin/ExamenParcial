import React from 'react'
import { useState } from 'react';
import { Alert, 
    Modal, 
    Pressable, 
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput, 
    View } from 'react-native';
import Producto from './producto';
import DatePicker from 'react-native-date-picker';

const Fproducto = (modalVProduto, setModalVProducto, producto, setProducto) => {
    const [noproducto, setNoProducto] = useState('');
    const [esnombre, setEsNombre] = useState('');
    const [noSerie, setnoSerie] = useState('');
    const [bodega, setBodega] = useState('');
    const [proEstado, setproEstado] = useState('');
    const [esfechaV, setEsFechaV] = useState(new Date());
    
    const handleAgregar = () => {
        if([ noproducto, esnombre, noSerie, bodega, proEstado,esfechaV].includes(''))
            {
                Alert.alert('Error', 'Todos los campos son obligatorios');
                return;
            }

        const nuevoProduto = {
            id: Date.now(),
            noproducto, 
            esnombre, 
            noSerie, 
            bodega, 
            proEstado,
            esfechaV
        }
        console.log(nuevoProduto);
        
        setProducto([...producto, nuevoProduto]);
        setModalVProducto(!modalVProduto);
        setNoProducto('');
        setEsCarnet('');
        setnoSerie('');
        setBodega('');
        setproEstado('');
        setEsFechaV(new Date());

    };
    return (
        <Modal animationType='slide' visible={modalVProduto}>
        <SafeAreaView style = {style.contenido}>
            <ScrollView>
                <Text>Desde la ventana de Modal</Text>
                <Pressable 
                style = {style.btnCancelar} 
                onPress={() => setModalVProducto(!modalVProduto)}>
                        <Text style = {style.btnTxTCancelar}>Regresar</Text>
                </Pressable>
                <View style={style.campo}>
                    <Text style={style.label}>No. de Producto</Text>
                    <TextInput 
                        style={style.input}
                        placeholder="No. de Producto"
                        placeholderTextColor={'#666'}
                        value={noproducto}
                        onChangeText={setNoProducto}
                    />
                </View>
                <View style={style.campo}>
                    <Text style={style.label}>Nombre del Producto</Text>
                    <TextInput 
                        style={style.input}
                        placeholder="Nombre del Producto"
                        placeholderTextColor={'#666'}
                        value={esnombre}
                        onChangeText={setEsNombre}
                    />
                </View>
                <View style={style.campo}>
                    <Text style={style.label}>No. de Serie</Text>
                    <TextInput 
                        style={style.input}
                        placeholder="No. de Serie"
                        placeholderTextColor={'#666'}
                        value={noSerie}
                        onChangeText={setnoSerie}
                    />
                </View>
                <View style={style.campo}>
                    <Text style={style.label}>Fecha de Vencimiento</Text>
                    <View style={style.fechaContenedor}>
                    <DatePicker
                        date={esfechaV}
                        locale="es"
                        onDateChange={date => setEsFechaV(date)}
                    />
                    </View>
                </View>
                <View style={style.campo}>
                    <Text style={style.label}>Bodega en la que se encuentra</Text>
                    <TextInput 
                        style={style.input}
                        placeholder="Bodega en la que se encuentra"
                        placeholderTextColor={'#666'}
                        value={bodega}
                        onChangeText={setBodega}
                    />
                </View>
                <View style={style.campo}>
                    <Text style={style.label}>Estado del producto</Text>
                    <TextInput 
                        style={style.input}
                        placeholder="Estado del producto"
                        placeholderTextColor={'#666'}
                        value={proEstado}
                        onChangeText={setproEstado}
                    />
                </View>
                <Pressable style={style.btnAgregarET}
                    onPress={handleAgregar}>
                        <Text style={style.btnTXTAgregarET}> Agregar Producto</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    </Modal>
  )
};
const style = StyleSheet.create({
    contenido:{
        backgroundColor:'#33beff',
        flex: 1,
    },
    btnCancelar:{
        marginVertical: 30,
        backgroundColor:'#4234ca',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
    },
    btnTxTCancelar:{
        color: '#090a0a',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    campo:{
        marginTop: 10,
        marginHorizontal: 30,
    },
    label: {
        color: '#090a0a',
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    },
    input:{
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    btnAgregarET:{
        marginVertical: 50,
        backgroundColor: '#4234ca', 
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10,
    },
    btnTXTAgregarET:{
        color: '090a0a',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    fechaContenedor:{
        backgroundColor:'#FFF',
        borderRadius: 10,
    },
});

export default Fproducto;
