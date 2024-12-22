<template>
  <div class="mb-5">
    <h2 class="mb-2 text-lg font-bold">TASKS IN TODO</h2>
    <div class="max-h-[650px] overflow-y-auto">
      <div v-for="task in tasks" :key="task.id">
        <div class="flex justify-between items-center mb-3">
          <div v-if="editTaskId && editTaskId === task.id" class="w-2/3">
            <div>
              <UILabel for="name" class="mb-5">Edit task</UILabel>
              <UIInput
                id="name"
                v-model="taskById.label"
                type="text"
                class="w-full px-2 mb-5"
                placeholder="Edit task"
              />
            </div>
            <div class="flex justify-end gap-x-3">
              <UIButton variant="default" @click="cancelEditing"> Cancel </UIButton>
              <UIButton variant="secondary" @click="setNewTaskTitle"> Done! </UIButton>
            </div>
          </div>
          <div v-else class="flex justify-start gap-x-3">
            <Checkbox v-model="task.isDone" :id="task.id" />
            <UILabel :for="task.id">{{
              task.task.split('. ').splice(1).join('. ')
                ? task.task.split('. ').splice(1).join('. ')
                : tasksInStore
                    .filter((item) => item.id === task.id)[0]
                    .task.split('. ')
                    .splice(1)
                    .join('. ')
            }}</UILabel>
          </div>
          <div>
            <UIButton
              v-if="isShowCancelButton.includes(task.id)"
              variant="outline"
              size="xs"
              @click="cancelChanges(task.id)"
            >
              Cancel Editing
            </UIButton>
            <UIButton variant="outline" size="xs" @click="getEditTaskId(task.id)">editTask</UIButton>
            <UIButton variant="outline" size="xs" class="text-red-700" @click="deleteTask(task.id)"
              >deleteTask</UIButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-6 w-3/4 mx-auto">
    <div class="flex items-center justify-between">
      <h2 class="text-lg mr-5">Create new task</h2>
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
          <div class="mb-5">
            <UILabel for="name">New task</UILabel>
            <UIInput id="name" v-model="taskText" type="text" placeholder="New task" />
          </div>

          <div class="flex justify-end gap-x-3">
            <UIButton variant="default" @click="deleteNewTask"> Cancel </UIButton>
            <UIButton variant="secondary" :disabled="!taskText.length" @click="createTask"> Create! </UIButton>
          </div>
        </form>
      </div>
    </transition>
  </div>

  <Dialog :open="showDialog">
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Delete task ?</DialogTitle>
        <DialogDescription> Are you sure you want to delete task? </DialogDescription>
      </DialogHeader>
      <DialogFooter class="sm:justify-start">
        <DialogClose as-child>
          <Button @click="closeDialog" type="button" variant="default"> No </Button>
          <Button @click="deleteTaskPermanently" type="button" variant="secondary"> Ok </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import _ from 'lodash'
import { reactive, ref, computed } from 'vue'
import { TaskType, currentTasksType } from '../../store/todoList.store'
import { Checkbox } from '../ui/checkbox'

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

interface Props {
  tasksInStore: TaskType[]
  tasks: TaskType[]
}
const props = defineProps<Props>()

const { cloneDeep } = _

const emit = defineEmits(['deleteTaskPermanently', 'setNewTaskTitle', 'createTask'])

const showDialog = ref<boolean>(false)
const isShowed = ref<boolean>(false)
const taskText = ref<string>('')
const deletedTaskId = ref<number | null>(null)
const currentTasks = reactive<currentTasksType[]>(
  cloneDeep(
    props.tasks.map((task) => ({
      id: task.id,
      label: task.task.split('. ').splice(1).join('. '),
    })),
  ),
)
const editTaskId = ref<number | null>(null)

const isShowCancelButton = computed(() => {
  const modifiedTasks: number[] = props.tasks
    .filter((task) => task.task.split('. ').splice(1).join('. '))
    .map((task) => task.id)
  console.log(modifiedTasks)

  const idsForFilter: number[] = []

  modifiedTasks.forEach((id) => {
    const index1 = props.tasksInStore.findIndex((task) => task.id === id)
    const index2 = props.tasks.findIndex((task) => task.id === id)

    if (
      index1 !== -1 &&
      index2 !== -1 &&
      props.tasksInStore[index1].task.split('. ').splice(1).join('. ') !==
        props.tasks[index2].task.split('. ').splice(1).join('. ')
    ) {
      idsForFilter.push(id)
    }
  })

  return idsForFilter
})

const deleteTask = (id: number) => {
  showDialog.value = true
  deletedTaskId.value = id
}

const closeDialog = () => {
  showDialog.value = false
}

const deleteTaskPermanently = () => {
  if (deletedTaskId.value) {
    emit('deleteTaskPermanently', deletedTaskId.value)
    const index = currentTasks.findIndex((task) => task.id === deletedTaskId.value)
    currentTasks.splice(index, 1)
  }
  deletedTaskId.value = null
  showDialog.value = false
}

const taskById = computed(() => {
  console.log('taskById editTaskId.value ', editTaskId.value)
  if (editTaskId.value) {
    const index = currentTasks.findIndex((task) => task.id === editTaskId.value)
    console.log('index ', index)

    if (index !== -1) {
      return currentTasks[index]
    }
  }
  return null
})

const getEditTaskId = (id: number) => {
  editTaskId.value = id
}

const cancelEditing = () => {
  editTaskId.value = null
}

const cancelChanges = (id: number) => {
  emit('setNewTaskTitle', id, '')
}

const setNewTaskTitle = () => {
  const index = currentTasks.findIndex((task) => task.id === editTaskId.value)
  if (index !== -1) {
    emit('setNewTaskTitle', editTaskId.value, currentTasks[index].label)
  }

  editTaskId.value = null
}

const onHide = () => {
  isShowed.value = false
}

const onShow = () => {
  isShowed.value = true
}

const deleteNewTask = (event: Event) => {
  event.preventDefault()
  taskText.value = ''
}

const createTask = (event: Event) => {
  event.preventDefault()

  currentTasks.push({
    id: props.tasks[props.tasks.length - 1].id + 1,
    label: taskText.value,
  })

  emit('createTask', {
    id: props.tasks[props.tasks.length - 1].id + 1,
    task: `${props.tasks.length + 1}. ${taskText.value}`,
    isDone: false,
  })

  taskText.value = ''
}
</script>

<style scoped></style>
