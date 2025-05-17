import { Button } from "@/components/button";
import { View, Text, ScrollView } from "react-native";
import { Styles } from "./styles";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Input } from "@/components/input";
import { api } from "@/api/api";

export default function InsertUser() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    
    async function handleSubmit() {

        const data = [
            name,
            email,
            password
        ]
       const response = await api.post("/users/", data) 
    }

    return(
        <ScrollView style={Styles.container}>
        <View style={Styles.formUser}>
            <Text style={Styles.title}>Cadastrar Usuário</Text>
            <Input placeholder="Digite seu nome..." placeholderTextColor={"#000"} onChangeText={(text) => setName(text)} />
            <Input placeholder="Digite seu E-mail..." placeholderTextColor={"#000"} onChangeText={(text) => setEmail(text)} />
            <Input placeholder="Digite uma senha...." placeholderTextColor={"#000"} onChangeText={(text) => setPassword(text)} />
            <Button title="Cadastrar" onPress={() => handleSubmit()} />
            <Button title="Voltar" onPress={() => router.navigate("/")} />  
        </View>  
    </ScrollView>
    )
}