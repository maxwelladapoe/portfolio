<template>
  <div class="relative">
    <NavigationBar />
    <RouterView />
    <FooterBar />
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>
