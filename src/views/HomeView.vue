<template>
  <main>
    <section class="h-screen relative overflow-hidden flex items-center justify-center">
      <div
        class="w-[600px] h-[600px] md:w-[1000px] md:h-[1100px] bg-gray-100 -z-20 absolute opacity-80 background-circle"
      />
      <div
        class="absolute -z-10 text-center w-full h-full flex items-center justify-center left-0 right-0"
      >
        <div
          class="text-[200px] h-[400px] md:text-[300px] md:h-[600px] font-bold leading-none opacity-10"
        >
          <Typed :options="options2">
            <h1 class="typing"></h1>
          </Typed>
        </div>
      </div>

      <div class="relative h-full w-full">
        <div
          class="scroll-down-button bg-[red] rounded-2xl w-14 h-14 bottom-5 absolute z-10 left-1/2 -ml-7 flex items-center justify-center"
        >
          <div class="mouse-shape border border-white w-6 rounded-full relative h-10 p-1">
            <div class="bg-white w-2 h-2 rounded-full absolute left-1/2 -ml-1 mouse" />
          </div>
        </div>
        <div class="bottom-0 left-0 absolute w-full">
          <img src="../assets/images/me_clipped_smaller.png" alt="" class="mx-auto" />
        </div>
      </div>
    </section>

    <div class="bg-gray-800 py-16">
      <div class="container">
        <div class="flex flex-col lg:flex-row gap-12">
          <div class="text-white w-full xl:w-1/2 text-center lg:text-left">
            <p class="text-3xl leading-10">
              <span class="font-bold"> Hii! &#x1F44B; nice to meet you</span><br />
              I am Maxwell Adapoe, a full-stack developer with a passion for crafting seamless and
              innovative solutions.
            </p>

            <p class="subtitle mt-5 font-bold text-xl">My Current Stack</p>

            <div class="flex flex-wrap gap-2 justify-center lg:justify-start my-5">
              <div
                class="rounded-full border-white border px-2 text-sm"
                v-for="lang in pLanguages"
                :key="lang"
              >
                {{ lang }}
              </div>
            </div>

            <div class="flex flex-wrap justify-center lg:justify-start items-center gap-5">
              <a
                href="/downloads/cvMaxwellAdapoe.pdf"
                download
                class="bg-[red] py-3 px-5 rounded-full text-sm lg:text-base"
              >
                Download my CV
              </a>

              <a
                href="mailto:me@maxwelladapoe.com,maxwelladapoe@gmail.com"
                class="border border-white py-3 px-5 rounded-full text-sm lg:text-base"
              >
                Send me an email
              </a>
            </div>
          </div>

          <div class="w-full xl:w-1/2">
            <div class="text-white text-2xl md:text-3xl xl:text-4xl font-bold h-60 lg:h-auto">
              <Typed :options="options">
                <h1 class="typing"></h1>
              </Typed>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="py-16">
        <div class="container">
          <p class="text-3xl font-bold text-gray-800 mb-5 text-center xl:text-left">My Portfolio</p>
          <ProjectsCarousel :projects="projectImages" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { ProjectImage } from '@/types'
import ProjectsCarousel from '@/components/ProjectsCarousel.vue'
import { Typed } from '@duskmoon/vue3-typed-js'
import type { TypedOptions } from '@duskmoon/vue3-typed-js'

const projectImages: ProjectImage[] = [
  {
    title: 'Clipperlink',
    description: '',
    year: '2023-Present',
    type: 'SaaS application',
    shapeColor: '#067AFB',
    imagePath: '/projects/clipperlink.png',
    link: 'https://www.clipperlink.com'
  },
  {
    title: 'My Holy Bible',
    description: '',
    year: '2016-2022',
    type: 'Android App',
    shapeColor: '#e68c09',
    imagePath: '/projects/my-holy-bible.png',
    link: 'https://play.google.com/store/apps/details?id=com.wearepoe.mybible&hl=en&gl=US'
  },
  {
    title: 'Dejavu',
    description: '',
    year: '2019-2024',
    type: 'Website',
    shapeColor: '#94ba5f',
    imagePath: '/projects/dejavu.png',
    link: 'https://www.dejavugh.com'
  },
  {
    title: 'Banner Price Calculator',
    description: '',
    year: '2019-Present',
    type: 'Android App',
    shapeColor: '#409efe',
    imagePath: '/projects/banner-price2.png',
    link: 'https://play.google.com/store/apps/details?id=com.wearepoe.banner_price_calculator&hl=en&gl=US'
  },
  {
    title: 'Nhyira love outreach',
    description: '',
    year: '2021-Present',
    type: 'Website',
    shapeColor: '#7f6a31',
    imagePath: '/projects/nhyiraloveoutreach.png',
    link: 'https://nhyiraloveoutreach.com/'
  },
  {
    title: 'Music Market',
    description: '',
    year: '2017-Present',
    type: 'Website',
    shapeColor: '#5B504B',
    imagePath: '/projects/musicmarket.png',
    link: 'https://musicmarketgh.com/'
  }
]

const pLanguages = [
  'HTML',
  'CSS',
  'JavaScript',
  'Vue Js',
  'React',
  'Node',
  'PHP',
  'Java',
  'Python',
  'Flutter',
  'SQL',
  'MongoDb',
  'Photoshop',
  'Adobe Illustrator',
  'InDesign',
  'XD'
]

const strings = [
  'do {<br/>&nbsp;&nbsp;&nbsp;&nbsp;design + code <br/>} while (alive)',
  'function(uiUxDes){<br>&nbsp;&nbsp;&nbsp;&nbsp;return true; <br>}',
  'function(frontend){<br>&nbsp;&nbsp;&nbsp;&nbsp;return true; <br>}',
  'function(backend){<br>&nbsp;&nbsp;&nbsp;&nbsp;return true; <br>}'
]
const options: TypedOptions = {
  strings,
  loop: true,
  typeSpeed: 80,
  contentType: 'html',
  showCursor: false
}

const options2: TypedOptions = {
  strings: ['maxwell<br/>adapoe'],
  loop: true,
  typeSpeed: 140,
  contentType: 'html',
  showCursor: false,
  fadeOut: true,
  backDelay:5000,
}
</script>

<style scoped>
.mouse {
  animation: bounce 2.5s infinite ease;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(16px);
  }
  100% {
    transform: translateY(0);
  }
}

.background-circle {
  animation: scale 10s infinite ease-in-out;
  border-radius: 100%;
}

@keyframes scale {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(2, 2);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
