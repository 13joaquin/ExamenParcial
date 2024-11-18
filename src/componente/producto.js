import React, {useState} from 'react'
import { Pressable, StyleSheet, Text, View, Modal } from 'react-native';

const producto = ({item}) => {
    console.log(item );
    const {noproducto, esnombre, noSerie, bodega, proEstado,esfechaV, id} = item;
    const [modalInformacion, setModalInformacion] = useState(false);
    const FormatearFecha = esfechaV =>{
        const nuevoFecha = new Date(esfechaV);
        const opcionesF = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return nuevoFecha.toLocaleDateString('es-ES', opcionesF);
    };
  return (
    <View style={style.contenedor}>
        <Text style={style.label}>No. de Producto:</Text>
        <Text style={style.texto}>{noproducto}</Text>
        <Text style={style.label}>Nombre del Producto:</Text>
        <Text style={style.texto}>{esnombre}</Text>
        <Text style={style.label}>No. de Serie:</Text>
        <Text style={style.texto}>{noSerie}</Text>
        <Text style={style.label}>Fecha de Vencimiento:</Text>
        <Text style={style.Esfecha}>{FormatearFecha(esfechaV)}</Text>
        <Text style={style.label}>Bodega en la que se encuentra:</Text>
        <Text style={style.texto}>{bodega}</Text>
        <Text style={style.label}>Estado del producto:</Text>
        <Text style={style.texto}>{proEstado}</Text>
        <View style={style.contenedorBotones}>
        <Pressable style={[style.btn, style.btnEditar]}
            onPress={() => setModalInformacion(true)}>
            <Text style={style.btnTexto}>Ver Informacion</Text>
        </Pressable>
        <Pressable style={[style.btn, style.btnEliminar]}>
           <Text style={style.btnTexto}>Eliminar</Text>
        </Pressable>
        </View>
        <Modal animationType='slide'
        visible={modalInformacion}
        onRequestClose={() => {
        Alert.alert('La ventana se cerro');
        setModalInformacion(!modalInformacion)
      }}>
        <View style={style.centerView}>
          <View style={style.modalView}>
          <Text style={style.label}>Informacion del Producto</Text>
            <View style={style.campo}>
              <Text style={style.label}>No. de Producto: <Text style={style.texto}>{noproducto}</Text></Text>
              <Text style={style.label}>Nombre del Producto: <Text style={style.texto}>{esnombre}</Text></Text>
              <Text style={style.label}>No. de Serie: <Text style={style.texto}>{noSerie}</Text></Text>
              <Text style={style.label}>Fecha de Vencimiento: <Text style={style.texto}>{FormatearFecha(esfechaV)}</Text></Text>
              <Text style={style.label}>Bodega en la que se encuentra: <Text style={style.texto}>{bodega}</Text></Text>
              <Text style={style.label}>Estado del producto: <Text style={style.texto}>{proEstado}</Text></Text>
            </View>
            <Pressable style={[style.btn, style.btnEliminar]}
              onPress={() => setModalInformacion(!modalInformacion)}>
                <Text style={style.btnTexto}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
};
const style = StyleSheet.create({
    contenedor: {
        backgroundColor: '#FFF',
       padding: 20,
       borderBlockColor: '#054e9c',
       borderBottomWidth: 1,
      },
      label: {
        color: '#054e9c',
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 10,
      },
      texto: {
        textTransform: 'uppercase',
        color: '#054e9c',
        fontWeight: '700',
        fontSize: 24,
        marginBottom: 10,
      },
      fecha: {
        color: '#054e9c',
        fontSize: 16,
      },
      contenedorBotones:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:20,
      },
      btn:{
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      btnTexto:{
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 12,
        color: '#FFF',
      },
      btnEditar:{
        backgroundColor: '#F59E0B',
      },
      btnEliminar:{
        backgroundColor: '#EF4444',
      },
});
export default producto;
