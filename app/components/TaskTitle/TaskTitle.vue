<template>
  <div>
    <div v-if="titleIsNotEditing" class="flex justify-start gap-x-3 mb-5">
      <h2>{{ newTitle.toUpperCase() || oldTitle.toUpperCase() }}</h2>
      <div>
        <UIButton v-if="!newTitle.length" variant="outline" size="xs" @click="editTitle"> Edit </UIButton>
        <UIButton v-else variant="outline" size="xs" @click="cancelEditing"> Cancel Editing </UIButton>
      </div>
    </div>

    <div v-else>
      <div>
        <UILabel for="name" class="mb-5">New todo name</UILabel>
        <UIInput id="name" v-model="taskTitle" type="text" class="mb-5" placeholder="Your new todo name" />
      </div>
      <div class="flex justify-end gap-x-3">
        <UIButton variant="default" @click="cancelEditing"> Cancel </UIButton>
        <UIButton variant="secondary" @click="setNewTaskTitle"> Done! </UIButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  newTitle: string,
  oldTitle: string
}
const props = defineProps<Props>()

const titleIsNotEditing = ref<boolean>(true)
const taskTitle = ref<string>(props.oldTitle.toUpperCase() || '')
const emit = defineEmits(['updateNewTitle'])

const cancelEditing = () => {
  emit('updateNewTitle', '')
  titleIsNotEditing.value = true
}

const editTitle = () => {
  titleIsNotEditing.value = false
}

const setNewTaskTitle = () => {
  emit('updateNewTitle', taskTitle.value)
  titleIsNotEditing.value = true
}
</script>

<style scoped></style>
