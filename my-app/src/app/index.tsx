import { Text, View } from "react-native";
import { useState } from "react";
import { Styles } from "./styles";

import { router } from "expo-router";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function Index() {
  const [task, setTask] = useState<string>("");
  const [listTask, setListTask] = useState<string[]>([]);

  function handleTask(task: string) {
    if (task.trim()) {
      setListTask((prevTasks) => [...prevTasks, task]);
      setTask(""); // limpa o input
    }
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.formTask}>
        <Text style={Styles.title}>Lista de Tarefas</Text>
        <Input onChangeText={(text) => setTask(text)} />
        <Button title="Adicionar" onPress={() => handleTask(task)} />
      </View>

      <View style={Styles.listTask}>
        <Text style={Styles.title}>Minhas Tarefas</Text>

        {listTask.map((item, index) => (
          <Text style={Styles.task} key={index}>
            {`Tarefa ${index + 1}`}:{item}
          </Text>
        ))}
        <Button title="Proximo" onPress={() => router.navigate("/dashboard")} />
        <Button title="Cadastrar Usuário" onPress={() => router.navigate("../Users/insertUser")} />
      </View>
    </View>
  );
}
