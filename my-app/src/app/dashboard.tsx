import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useQuery } from "@tanstack/react-query"

import { router } from "expo-router";
import { Button } from "@/components/button";
import { api } from "@/api/api";
import { useEffect, useState } from "react";

type UserResponse = {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
};

export default function Dashboard() {

  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await api.get("/users")

      return response.data
    }
  })

  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.card}>
        <Text style={Styles.title}>Lista de Usuários</Text>

      
        {users.map((user: UserResponse, index: number) => (
        <View style={Styles.listUser} key={user.id}>
          <Text>Nome: {user.name}</Text>
          <Text>Email: {user.email}</Text>
        </View>
        ))}
      

        <Button title="Voltar" onPress={() => router.navigate("/")} />
      </View>
    </ScrollView>
  );
}

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "#FFF",
  },

  title: {
    color: "#00000",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },

  card: {
    gap: 10
  },

  listUser: {
    gap: 1
  }
});
