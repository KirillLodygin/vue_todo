<template>
  <UIButton variant="destructive" @click="startNewTodoList"> Приступить к созданию списка задач </UIButton>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { navigateTo } from 'nuxt/app'
import { useTodosStore } from '../store/todoList.store'

const todosStore = useTodosStore()

onBeforeMount(() => {
  const todoList = localStorage.getItem('todoList') || ''
  const todoId = localStorage.getItem('todoId') || ''
  if (todoList.length) {
    todosStore.setTodoList(todoList)
    todoId ? navigateTo(`/todo_list/${todoId}`) : navigateTo('/todo_list')
  }
})

const startNewTodoList = (event: Event) => {
  event.preventDefault()
  todosStore.startNewTodoList()
  navigateTo('/todo_list')
}
</script>

<style scoped></style>
