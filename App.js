import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
    return (
        <>
            <View style={styles.container}>

                <Text style={{color: 'white', fontSize: 30, marginBottom: 50}}>Lista con AsyncStorage</Text>
                
                <Text style={styles.texto}>Nombre</Text>
                <View style={styles.block}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                    />
                    <Button
                        title="read"
                        color="#85929E"
                        onPress={() => null}
                    />
                    <Button
                        title="save"
                        color="#85929E"
                        onPress={() => null}
                    />
                    <Button
                        title="delete"
                        color="#85929E"
                        onPress={() => null}
                    />
                </View>

                <Text style={styles.texto}>Apellido</Text>
                <View style={styles.block}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                    />
                    <Button
                        title="read"
                        color="#85929E"
                        onPress={() => null}
                    />
                    <Button
                        title="save"
                        color="#85929E"
                        onPress={() => null}                    
                    />
                    <Button
                        title="delete"
                        color="#85929E"
                        onPress={() => null}                    
                    />
                </View>

                <Text style={styles.texto}>Edad</Text>
                <View style={styles.block}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                    />
                    <Button
                        title="read"
                        color="#85929E"
                        onPress={() => null}                    
                    />
                    <Button
                        title="save"
                        color="#85929E"
                        onPress={() => null}                    
                    />
                    <Button
                        title="delete"
                        color="#85929E"
                        onPress={() => null}                    
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
