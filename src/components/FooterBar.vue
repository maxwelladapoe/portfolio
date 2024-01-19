<template>
  <footer class="bg-slate-100 w-full py-12">
    <div class="container flex flex-col xl:flex-row justify-between">
      <div class="text-center xl:text-left w-full xl:w-2/6">
        <p><span class="font-bold">maxwell adapoe</span></p>
        <p class="mt-3">Full-stack developer</p>
      </div>
      <div class="column is-6 is-offset-3 has-text-right has-text-centered-mobile">
        <p class="mb-3">Check me out</p>
        <div class="flex gap-5 items-center justify-center xl:justify-end">
          <a href="https://web.facebook.com/madapoe/" class="facebook">
            <BrandFacebookIcon />
          </a>

          <a href="https://twitter.com/maxwelladapoe" class="twitter">
            <BrandTwitterIcon />
          </a>

          <a href="https://www.linkedin.com/in/maxwelladapoe" class="linkedin">
            <BrandLinkedinIcon />
          </a>

          <a href="https://github.com/maxwelladapoe" class="github">
            <BrandGithubIcon />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  BrandFacebookIcon,
  BrandGithubIcon,
  BrandLinkedinIcon,
  BrandTwitterIcon
} from 'vue-tabler-icons'
</script>
