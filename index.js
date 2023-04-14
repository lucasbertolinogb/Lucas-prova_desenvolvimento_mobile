import {  Image, View } from "react-native";

import styles from "./styles";


export default function Arma(){
    return(
        <View style={styles.container}>
            <View style={styles.viewImagem}>
                <Image style={styles.poster} 
                source={{ uri: "https://i.pinimg.com/236x/80/09/18/800918a3a391e55bf201a70a8219734c--black-roses-rpg-items.jpg" }} /> 
            </View>
            <View style={styles.vieDados}>
                <Text>Nome: espada espinho dolor</Text>
                <Text>Atributo: 100 de força, 100 destreza
                    150 de ataque especial
                </Text>
            </View>
        </View>
    )
}


