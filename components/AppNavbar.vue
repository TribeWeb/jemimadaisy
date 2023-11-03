
<!-- <template>
  <div class="flex justify-between max-w-2xl px-4 py-4 mx-auto sm:px-8">
    <div class="text-gray-700 dark:text-gray-200">
      <NuxtLink
        v-for="link of navigation"
        :key="link._path"
        :to="link._path"
        active-class="font-bold"
        class="mr-6"
      >
        {{ link.title }}
      </NuxtLink>
    </div>
    <div class="space-x-3 transition text-gray-500">
      <a v-if="appConfig.socials?.twitter" :href="`https://twitter.com/${appConfig.socials?.twitter}`" title="Twitter" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:twitter" class="w-5 h-5" /></a>
      <a v-if="appConfig.socials?.github" :href="`https://github.com/${appConfig.socials?.github}`" title="GitHub" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:github" class="w-5 h-5" /></a>
      <a v-if="appConfig.socials?.mastodon" :href="`https://elk.zone/${appConfig.socials?.mastodon}`" title="Mastodon" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:mastodon" class="w-5 h-5" /></a>
      <ColorModeSwitch class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300" />
    </div>
  </div>
</template> -->


<script lang="ts" setup>
const { navigation } = useContent()
//const appConfig = useAppConfig()
 const open = ref(false)

</script>

<template>
  <nav class="backdrop-blur-lg bg-white/30 flex items-center justify-between flex-wrap fixed w-full px-8 z-20 top-0 left-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <img class="w-20 h-20" src="@/assets/logo.svg" alt="">
      <span class="font-semibold text-xl tracking-tight text-gray-700 dark:text-gray-100 hover:text-gray-700">Jemima Daisy</span>
    </div>
    <div class="block sm:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white" @click="open = !open">
        <Icon name="fa6-solid:bars" class="w-5 h-5" />
      </button>
    </div>
    <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
      <div class="text-sm sm:flex-grow">
        <NuxtLink
          v-for="link of navigation"
          :key="link._path"
          :to="link._path"
          active-class="font-bold"
          class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4"
        >
          {{ link.title }}
        </NuxtLink>
      </div>
      <div>
        <ColorModeSwitch class="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 inline-block text-sm px-4 py-2 leading-none border rounded border-black hover:border-transparent hover:text-teal hover:bg-white mt-4 sm:mt-0" />
      </div>
    </div>
  </nav>
</template>