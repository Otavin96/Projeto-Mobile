import { View, Text, ScrollView, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form"

import { Button } from "@/components/button";
import { Styles } from "./styles";
import { router } from "expo-router";
import { useState } from "react";
import { Input } from "@/components/input";
import { api } from "@/api/api";

type IUser = {
    name: string,
    email: string,
    password: string
}

export default function InsertUser() {

    const {control, handleSubmit, formState: {errors}} = useForm<IUser>({})

    async function onSubmit(data: IUser) {
        try {

            const response = await api.post("/users", data)

            alert("Usuário cadastrado com sucesso!")
            router.navigate("/dashboard")

        } catch (error) {
            console.error("Erro ao cadastrar o usuário", error)
        }
    }

    return (
        <ScrollView style={Styles.container}>
            <View style={Styles.formUser}>
                <Text style={Styles.title}>Cadastrar Usuário</Text>

                <Controller control={control} rules={{required: true}} render={({field: {onChange, onBlur, value } }) => (
                    <Input placeholder="Digite seu nome..." placeholderTextColor={"#000"} onChangeText={onChange} onBlur={onBlur} value={value} />    
                )} name="name" />
                {errors.name && <Text>This is required</Text>}
                
                <Controller control={control} rules={{required: true}} render={({field: {onChange, onBlur, value } }) => (
                    <Input placeholder="Digite seu E-mail..." placeholderTextColor={"#000"} onChangeText={onChange} onBlur={onBlur} value={value} />    
                )} name="email" />
                {errors.email && <Text>This is required</Text>}

                <Controller control={control} rules={{required: true}} render={({field: {onChange, onBlur, value } }) => (
                    <Input placeholder="Digite uma senha...." placeholderTextColor={"#000"} onChangeText={onChange} onBlur={onBlur} value={value} />    
                )} name="password" />
                {errors.password && <Text>This is required</Text>}

                <Button title="Cadastrar" onPress={() => handleSubmit(onSubmit)} />
                <Button title="Voltar" onPress={() => router.navigate("/")} />
            </View>
        </ScrollView>
    )
}