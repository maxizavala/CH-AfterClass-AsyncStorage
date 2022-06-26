import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function App() {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState();

    const guardar = async (clave, valor) => {
        try {
            await AsyncStorage.setItem(clave, valor)
        } catch (e) {
            console.log(e)
        }
    }

    const leer = async (clave, hook) => {
        try {
            const valor = await AsyncStorage.getItem(clave)
            if(valor !== null) {
                hook(valor)
            }
            } catch(e) {
                console.log(e)
            }
    }

    const borrar = async (clave, hook) => {
        try {
            await AsyncStorage.removeItem(clave);
            Alert.alert(
                "Dato Eliminado",
                "Se ha eliminado con exito.",
            )
            hook('')
        }
        catch(e) {
            console.log(e)
        }
    }

    return (
        <>
            <View style={styles.container}>

                <Text style={{color: 'white', fontSize: 30, marginBottom: 50}}>Lista con AsyncStorage</Text>
                
                <Text style={styles.texto}>Nombre</Text>
                <View style={styles.block}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        value={nombre}
                        onChangeText={setNombre}
                    />
                    <Button
                        title="read"
                        color="#85929E"
                        onPress={() => leer('name', setNombre)}
                    />
                    <Button
                        title="save"
                        color="#85929E"
                        onPress={() => guardar('name', nombre)}
                    />
                    <Button
                        title="delete"
                        color="#85929E"
                        onPress={() => borrar('name', setNombre)}
                    />
                </View>

                <Text style={styles.texto}>Apellido</Text>
                <View style={styles.block}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        value={apellido}
                        onChangeText={setApellido}
                    />
                    <Button
                        title="read"
                        color="#85929E"
                        onPress={() => leer('lastName', setApellido)}
                    />
                    <Button
                        title="save"
                        color="#85929E"
                        onPress={() => guardar('lastName', apellido)}                   
                    />
                    <Button
                        title="delete"
                        color="#85929E"
                        onPress={() => borrar('lastName', setApellido)}                    
                    />
                </View>

                <Text style={styles.texto}>Edad</Text>
                <View style={styles.block}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        value={edad}
                        onChangeText={setEdad}
                    />
                    <Button
                        title="read"
                        color="#85929E"
                        onPress={() => leer('age', setEdad)}                   
                    />
                    <Button
                        title="save"
                        color="#85929E"
                        onPress={() => guardar('age', edad)}                    
                    />
                    <Button
                        title="delete"
                        color="#85929E"
                        onPress={() => borrar('age', setEdad)}                   
                    />
                </View>

            </View>
            
            <View style={styles.footer}>
            <Button
                title="read all"
                color="#85929E"
                onPress={() => null}            
            />
            <Button
                title="save all"
                color="#85929E"
                onPress={() => null}            
            />
            <Button
                title="delete all"
                color="#85929E"
                onPress={() => null}            
            />
        </View>

        <StatusBar style="light" />
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C4493',
        alignItems: 'center',
        justifyContent: 'center',
    },
    block: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 30,
    },
    input: {
        borderColor: '#CCD1D1',
        borderWidth: 1,
        borderRadius: 10,
        width: '50%',
        margin: 10,
        color: '#CCD1D1',
        textAlign: 'center',
    },
    texto: {
        color: '#CCD1D1',
        fontSize: 20,
    },
    footer: {
        backgroundColor: '#13326F',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '15%',
    },
    boton: {
        borderRadius: 15,
    }
});
