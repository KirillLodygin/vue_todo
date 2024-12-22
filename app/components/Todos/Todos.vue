<template>
  <div class="w-full sm:w-11/12 md:w-10/12 2xl:w-3/4 mx-auto">
    <div v-if="todoList.length" class="flex items-center justify-start mb-10">
      <div class="mr-5">{{ todoList.length }} items in list</div>
      <UIButton variant="destructive" size="sm" @click="clearTodos"> Clear Todos </UIButton>
    </div>

    <h2 class="mb-2 text-lg font-bold">TODOS</h2>
    <template v-if="todoList.length">
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div v-for="todo in todoList" :key="todo.id" class="p-6 rounded shadow-md">
          <UIButton variant="link" @click="selectToView(todo.id)">
            <h3 class="mb-2 text-lg font-bold">
              {{ todo.title.toUpperCase() }}
            </h3>
          </UIButton>
          <UIButton variant="ghost" size="xs" class="text-red-700 mb-4" @click="deleteTodo(todo.id)">
            Delete todo!
          </UIButton>

          <div v-for="task in todo.tasks" :key="task.id" class="mb-2 flex items-start gap-x-5">
            <div
              v-for="item in returnTaskString(task.task)"
              :class="{ 'text-red-700': task.isDone }"
              class="leading-tight"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </template>

    <Dialog :open="showDialog">
      <DialogContent class="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{{ idToDelete ? 'Delete todo ?' : 'Clear Todos' }}</DialogTitle>
          <DialogDescription>
            {{ idToDelete ? 'Are you sure you want to delete todo?' : 'Are you sure you want to clear todos?' }}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter class="sm:justify-start">
          <DialogClose as-child>
            <Button @click="closeDialog" type="button" variant="default"> No </Button>
            <Button @click="deleteTodoPermanently" type="button" variant="secondary"> Ok </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import { navigateTo } from 'nuxt/app'
import { useTodosStore } from '../../store/todoList.store'

import { Button } from '../ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'

const todosStore = useTodosStore()

const showDialog = ref<boolean>(false)
const idToDelete = ref<null | number>(null)

const todoList = computed(() => todosStore.todoList)
const isNewTodoListStarted = computed(() => todosStore.isNewTodoListStarted)

onBeforeMount(() => {
  const todoJSON = localStorage.getItem('todoList') || ''
  if (todoJSON.length) {
    todosStore.setTodoList(todoJSON)
    return
  }

  if (!todoList.value.length && !isNewTodoListStarted.value) {
    navigateTo(`/`)
  }
})

const returnTaskString = (str: string) => {
  let newStr: string | Array<string> = str.length > 50 ? str.slice(0, 47) + '...' : str
  newStr = newStr.split('. ')
  newStr[0] = `${newStr[0]}.`
  return newStr
}

const selectToView = (id: number) => {
  todosStore.updateOpenTodoId(id)
  localStorage.setItem('todoId', String(id))
  navigateTo(`/todo_list/${id}`)
}

const clearTodos = () => {
  showDialog.value = true
}

const closeDialog = () => {
  showDialog.value = false
}

const deleteTodoPermanently = () => {
  if (idToDelete.value) {
    todosStore.deleteTodo(idToDelete.value)
    idToDelete.value = null
  } else {
    todosStore.clearTodoList()
  }
  showDialog.value = false
}

const deleteTodo = (id: number) => {
  showDialog.value = true
  idToDelete.value = id
}
</script>

<style scoped></style>
