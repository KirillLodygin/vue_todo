<template>
  <div class="mb-6 w-full sm:w-11/12 md:w-10/12 2xl:w-3/4 mx-auto">
    <div class="flex items-center justify-between">
      <h2 class="text-lg mr-5">Create new todo</h2>
      <div>
        <UIButton v-if="isShowed" variant="default" @click="onHide">Hide</UIButton>
        <UIButton v-else variant="destructive" @click="onShow"> Show! </UIButton>
      </div>
    </div>

    <transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="isShowed">
        <form>
          <div>
            <UILabel for="name">Your new task name</UILabel>
            <UIInput
              id="name"
              v-model="taskTitle"
              @focus="
                () => {
                  isAttention = false
                }
              "
              type="text"
              placeholder="Your new todo name"
              @input="handleInput"
            />
          </div>

          <div>
            <UILabel for="tasks">Your new task</UILabel>
            <UITextarea
              id="tasks"
              v-model="tasks"
              @focus="onFocus"
              @keydown="handleKeyDown"
              placeholder="Type new task here."
            />
          </div>

          <p v-if="isAttention" class="pl-3 text-red-700">All fields for creation are not filled in!</p>

          <div class="flex justify-end gap-x-3">
            <UIButton variant="default" @click="deleteTask"> Cancel </UIButton>
            <UIButton variant="secondary" @click="createTask"> Create! </UIButton>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { computed } from 'vue'
import type { TaskType, TodoType } from '../../store/todoList.store'
import { useTodosStore } from '../../store/todoList.store'

const taskTitle = ref<string>('')
const tasks = ref<string>('')
const entersCount = ref<number>(1)
const isAttention = ref<boolean>(false)
const isShowed = ref<boolean>(false)

const todosStore = useTodosStore()

const lastTodoId = computed(() => {
  if (!todosStore.todoList.length) return 0
  return todosStore.todoList[todosStore.todoList.length - 1].id
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  taskTitle.value = target.value.toUpperCase()
}

const onFocus = () => {
  isAttention.value = false
  if (!tasks.value) {
    tasks.value = `${entersCount.value}. `
  }
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    entersCount.value += 1
    tasks.value += `\n${entersCount.value}. `
  }
}

const updateRefs = () => {
  tasks.value = ''
  taskTitle.value = ''
  entersCount.value = 1
  isAttention.value = false
}

const deleteTask = (event: Event) => {
  event.preventDefault()
  updateRefs()
}

const createTask = (event: Event) => {
  event.preventDefault()
  if (tasks.value.length && taskTitle.value.length) {
    const tasksArr: Array<TaskType> = tasks.value.split('\n').map((task, index) => ({
      id: index + 1,
      task: task,
      isDone: false,
    }))
    const newTodo: TodoType = {
      id: lastTodoId.value + 1,
      title: taskTitle.value,
      tasks: tasksArr,
    }
    todosStore.createNewTodo(newTodo)
    updateRefs()
    return
  }
  isAttention.value = true
}

const onHide = () => {
  isShowed.value = false
}

const onShow = () => {
  isShowed.value = true
}
</script>

<style scoped></style>
