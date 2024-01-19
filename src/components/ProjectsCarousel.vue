<template>
  <div class="flex flex-nowrap items-center max-h-[900px] xl:h-[500px] gap-2">
    <button
      class="w-10 h-10 hidden xl:flex cursor-pointer rounded-full hover:bg-red-100 items-center justify-center"
      @click.stop.prevent="prev"
    >
      <ChevronLeftIcon />
    </button>

    <div class="display-area flex-1">
      <div
        v-if="selectedImage"
        :key="selectedImage.title"
        class="flex flex-col xl:flex-row relative justify-center items-center text-center xl:text-left"
      >
        <div class="description w-full xl:w-2/5">
          <p class="font-bold text-2xl">{{ selectedImage.title }}</p>
          <p class="type">{{ selectedImage.type }}</p>
          <p class="year">{{ selectedImage.year }}</p>
          <div class="link my-5">
            <a
              class="rounded-full px-4 py-2.5 border border-[red] text-xs"
              target="_blank"
              :href="selectedImage.link"
              >View Project</a
            >
          </div>
        </div>

        <div class="image relative flex items-center justify-center">
          <div
            class="h-60 w-60 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[400px] lg:w-[400px] absolute -z-10"
            :class="selectedImage.shape || 'rounded-full'"
            :style="{ backgroundColor: selectedImage.shapeColor }"
          />
          <img :src="selectedImage.imagePath" :alt="selectedImage.title" />
        </div>
      </div>
    </div>

    <button
      class="w-10 h-10 hidden xl:flex cursor-pointer rounded-full hover:bg-red-100 items-center justify-center"
      @click.stop.prevent="next"
    >
      <ChevronRightIcon />
    </button>
  </div>
  <div class="summary mt-5 has-text-weight-bold flex justify-between items-center flex-end">
    <div class="flex xl:hidden items-center gap-5">
      <button
        class="prev w-10 h-10 hover:bg-red-100 flex items-center justify-center rounded-full"
        @click.stop.prevent="prev"
      >
        <ChevronLeftIcon />
      </button>
      <button
        class="next w-10 h-10 hover:bg-red-100 flex items-center justify-center rounded-full"
        @click.stop.prevent="next"
      >
        <ChevronRightIcon />
      </button>
    </div>

    <div class="font-bold">{{ selectedIndex + 1 }} of {{ images.length }}</div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectImage } from '@/types'
import { ref } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from 'vue-tabler-icons'
const props = withDefaults(
  defineProps<{
    images: ProjectImage[]
    initialIndex?: number
  }>(),
  {
    initialIndex: 0
  }
)

const selectedImage = ref(props.images[0])

const selectedIndex = ref(0)

function prev() {
  if (selectedIndex.value > 0) {
    selectedIndex.value--
  } else {
    selectedIndex.value = props.images.length - 1
  }

  selectedImage.value = props.images[selectedIndex.value]
}

function next() {
  if (selectedIndex.value + 1 < props.images.length) {
    selectedIndex.value++
  } else {
    selectedIndex.value = 0
  }

  selectedImage.value = props.images[selectedIndex.value]
}
</script>
