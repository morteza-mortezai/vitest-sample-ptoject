<script setup lang="ts">
import { reactive } from 'vue'
import type { ITodo } from '@/models/todo'
import ToDo from '../components/ToDo.vue'

const todos: { value: ITodo[] } = reactive({ value: [] })
const todo: { value: ITodo } = reactive({ value: { id: 0, text: null, completed: false } })

function add() {

  if (todo.value.text == null) return
  const id = todos.value.length + 1
  todo.value.id = id
  todos.value.push(Object.assign({}, todo.value))
  todo.value.text = null
}
function done(id: number) {
  const found = todos.value.find((item) => { return item.id == id })
  if (found) {
    found.completed = true
  }
}
</script>

<template>

  <header>
    to do list
  </header>

  <div class="form">
    <input type="text" class="text" v-model="todo.value.text">
    <button @click="add">add</button>
  </div>

  <main>
    <ToDo v-for="(todo, i) in todos.value" :key="i" :item="todo" @done="done" />
  </main>

</template>

<style>
header {
  font-size: 20px;
  text-align: center;
  background-color: aquamarine;
  padding: 20px;
}

.form {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.form .text {
  width: 400px;
  line-height: 25px;
}
</style>