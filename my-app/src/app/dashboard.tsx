import { Text, View, StyleSheet, ScrollView } from "react-native";
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
  const [users, setUsers] = useState<UserResponse[]>([]);

  useEffect(() => {
    const getUser = async () => {
      const response = await api.get("users/");

      setUsers(response.data);
    };

    getUser();
  }, []);

  return (
    <ScrollView style={Styles.container}>
      <Text style={Styles.title}>Dashboard</Text>

      <Button title="Voltar" onPress={() => router.navigate("/")} />

      {users.map((user, index) => (
        <View>
          <Text key={user.id}>Name: {user.name}</Text>
          <Text key={user.id}>Email: {user.email}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "#FFF",
    gap: 30,
  },

  title: {
    color: "#00000",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
});
