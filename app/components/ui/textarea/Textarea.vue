<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  class?: HTMLAttributes['class']
  defaultValue?: string | number
  modelValue?: string | number
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<style scoped>
textarea {
  height: auto;
  max-height: 270px;
  min-height: 200px;
}

@media (max-width: 768px) {
  textarea {
    min-height: 230px;
  }
}

@media (max-width: 480px) {
  textarea {
    min-height: 250px;
  }
}
</style>

<template>
  <textarea
    v-model="modelValue"
    :class="
      cn(
        'w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
    style="resize: none; overflow-y: auto; margin-bottom: 15px"
  />
</template>
