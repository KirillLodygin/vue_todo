<template>
  <div>
    <div class="flex justify-start gap-x-2 mb-5">
      <UIButton variant="ghost" size="xs" class="text-red-700 mb-4" @click="deleteTodo"> Delete todo </UIButton>
      <UIButton v-if="isChanged" variant="destructive" size="xs" class="mb-4" @click="saveChanges"> Save сhanges </UIButton>
      <UIButton v-if="isChanged" variant="default" size="xs" class="mb-4" @click="undoChanges"> Undo сhanges </UIButton>
      <UIButton variant="ghost" size="xs" class="mb-4" @click="returnToTodoList"> Return </UIButton>
    </div>
    <div class="w-full sm:w-11/12 md:w-10/12 2xl:w-3/4 mx-auto">
      <TaskTitle
        :new-title="newTitle"
        :old-title="openTodoId ? todosStore.getTodoById(openTodoId).title : ''"
        @updateNewTitle="updateNewTitle"
      />

      <Tasks
        @deleteTaskPermanently="deleteTaskPermanently"
        @setNewTaskTitle="setNewTaskTitle"
        @createTask="createTask"
        :tasks-in-store="openTodoId ? todosStore.getTodoById(openTodoId).tasks : []"
        :tasks="tasks"
      />

      <Dialog :open="showDialog">
        <DialogContent class="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{{ isChangesNotSaved ? 'Changes not saved!' : 'Delete todo?' }}</DialogTitle>
            <DialogDescription>
              {{ isChangesNotSaved ? 'Do you want to save changes?' : 'Are you sure you want to delete todo?' }}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter class="sm:justify-start">
            <DialogClose as-child>
              <Button @click="closeDialog" type="button" variant="default"> No </Button>
              <Button @click="doAction" type="button" variant="secondary"> Ok </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash'
import { computed, onBeforeMount, reactive, ref } from 'vue'
import { navigateTo } from 'nuxt/app'
import { TaskType, useTodosStore } from '../../../store/todoList.store'
import TaskTitle from '../../../components/TaskTitle/TaskTitle.vue'

import { Button } from '../../../components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../../../components/ui/dialog'
import Tasks from '../../../components/Tasks/Tasks.vue'

const todosStore = useTodosStore()

const { cloneDeep, isEqual } = _

const showDialog = ref<boolean>(false)
const isChangesNotSaved = ref<boolean>(false)

const openTodoId = computed(() => todosStore.openTodoId)
const newTitle = ref<string>('')
const tasks = reactive<TaskType[]>(openTodoId.value ? cloneDeep(todosStore.getTodoById(openTodoId.value).tasks) : [])
const isChanged = computed(
  () =>
    (openTodoId.value && newTitle.value && todosStore.getTodoById(openTodoId.value).title !== newTitle.value) ||
    (openTodoId.value && !isEqual(tasks, todosStore.getTodoById(openTodoId.value).tasks)),
)

onBeforeMount(() => {
  const url = new URL(window.location.href)
  const currentId = url.pathname.split('/')[url.pathname.split('/').length - 1]
  const todoJSON = localStorage.getItem('todoList') || ''
  const idFromLocalStorage = localStorage.getItem('todoId')
  if (todoJSON.length) {
    todosStore.setTodoList(todoJSON)
    if (idFromLocalStorage && idFromLocalStorage === currentId) {
      if (!openTodoId.value) {
        todosStore.updateOpenTodoId(Number(currentId))
      }
      if (!tasks.length) {
        cloneDeep(todosStore.getTodoById(Number(currentId)).tasks).forEach((task) => {
          tasks.push(task)
        })
      }
      return
    }
    navigateTo(`/todo_list`)
    return
  }

  navigateTo(`/`)
})

const deleteTodo = () => {
  showDialog.value = true
}

const closeDialog = () => {
  showDialog.value = false
  if (isChangesNotSaved.value) {
    isChangesNotSaved.value = false
    navigateTo('/todo_list/')
  }
}

const saveChanges = () => {
  if (isChanged.value && openTodoId.value) {
    todosStore.updateTodo(openTodoId.value, newTitle.value, tasks)
    isChangesNotSaved.value = false
    newTitle.value = ''
  }
}

const doAction = () => {
  if (isChangesNotSaved.value && openTodoId.value) {
    todosStore.updateTodo(openTodoId.value, newTitle.value, tasks)
    showDialog.value = false
    newTitle.value = ''
    localStorage.setItem('todoId', String(''))
    navigateTo('/todo_list/')
    return
  }

  if (openTodoId.value) {
    todosStore.deleteTodo(openTodoId.value)
  }

  showDialog.value = false
  localStorage.setItem('todoId', String(''))
  navigateTo('/todo_list/')
}

const returnToTodoList = () => {
  if (openTodoId.value && !isEqual(tasks, todosStore.getTodoById(openTodoId.value).tasks)) {
    tasks.forEach((task) => {
      if (!task.task.split('. ').splice(1).join('. ') && openTodoId.value) {
        task.task =
          task.task.split('. ')[0] +
          '. ' +
          todosStore
            .getTodoById(openTodoId.value)
            .tasks.filter((item) => item.id === task.id)[0]
            .task.split('. ')
            .splice(1)
            .join('. ')
      }
    })
  }

  if (
    (openTodoId.value && newTitle.value && todosStore.getTodoById(openTodoId.value).title !== newTitle.value) ||
    (openTodoId.value && !isEqual(tasks, todosStore.getTodoById(openTodoId.value).tasks))
  ) {
    isChangesNotSaved.value = true
    showDialog.value = true
    return
  }
  localStorage.setItem('todoId', String(''))
  navigateTo('/todo_list/')
}

const updateNewTitle = (newVal: string) => {
  newTitle.value = newVal
}

const deleteTaskPermanently = (id: number) => {
  const index = tasks.findIndex((task) => task.id === id)
  if (index !== -1) {
    tasks.splice(index, 1)
    tasks.forEach((task, index) => {
      const label = task.task.split('. ')
      label[0] = `${index + 1}`
      task.task = label.join('. ')
    })
  }
}

const setNewTaskTitle = (id: number, label: string) => {
  const index = tasks.findIndex((task) => task.id === id)
  if (index !== -1) {
    tasks.forEach((task) => {
      task.task = task.task.split('. ').splice(1).join('. ')
    })
    tasks[index].task = label
    tasks.forEach((task, index) => {
      task.task = `${index + 1}. ${task.task}`
    })
  }
}


const undoChanges = () => {
  if (openTodoId.value) {
    newTitle.value = ''
    tasks.splice(0, tasks.length)
    todosStore.getTodoById(openTodoId.value).tasks.forEach(task => {
      tasks.push(cloneDeep(task))
    })
  }
}

const createTask = (obj: TaskType) => {
  tasks.push(obj)
}
</script>

<style scoped></style>
