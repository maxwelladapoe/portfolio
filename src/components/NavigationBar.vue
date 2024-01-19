<template>
  <header class="z-10 absolute w-full h-32 flex items-center justify-between">
    <div class="container flex items-center justify-between">
      <span class="font-bold text-lg">maxwell adapoe</span>

      <a
        class="bg-[red] p-3 rounded-2xl text-white"
        href="mailto:me@maxwelladapoe.com,maxwelladapoe@gmail.com"
      >
        <MailFilledIcon />
      </a>
    </div>
  </header>
  <b-sidebar type="is-light" right fullheight v-model:open="showNav">
    <b-menu class="my-menu">
      <b-menu-list>
        <b-menu-item label="Home" class="nav-link"></b-menu-item>
        <b-menu-item label="Blog"></b-menu-item>
      </b-menu-list>
    </b-menu>
  </b-sidebar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MailFilledIcon } from 'vue-tabler-icons'
const showNav = ref(false)
</script>
