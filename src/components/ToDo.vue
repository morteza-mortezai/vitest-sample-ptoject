<script setup lang="ts">
import type { ITodo } from '@/models/todo'
defineProps<{
  item: ITodo
}>()
const emit = defineEmits(['done'])
function doneTodo(id: number) {
  emit('done', id)
}
</script>

<template>
  <div class="row ">
    <div>{{ item.id }}</div>
    <div class="text">{{ item.text }}</div>
    <div v-if="item.completed">
      <img src="tick.svg"  class="tick"/>
    </div>
    <div v-else>
      <button class="done" @click="doneTodo(item.id)">done</button>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  background-color: rgb(253, 253, 246);
  padding: 10px;
}

.text {
  margin: 0 10px;
}
</style>
