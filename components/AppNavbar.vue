<script lang="ts" setup>
const { navigation } = useContent()
const appConfig = useAppConfig()
</script>

<template>
  <div class="flex justify-between max-w-2xl px-4 py-4 mx-auto sm:px-8">
    <!-- Navigation -->
    <!-- <div class="text-gray-700 dark:text-gray-200">
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
    </div> -->
    <!-- Navbar -->
    <nav class="relative container mx-auto p-6">
      <!-- Flex container -->
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="pt-2 w-20 h-20">
          <img src="@/assets/logo.svg" alt="">
        </div>
        <!-- Menu Items -->
        <div class="hidden space-x-6 md:flex">
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
        <ColorModeSwitch class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300" />

        <!-- Hamburger Icon -->
        <button
          id="menu-btn"
          class="block hamburger md:hidden focus:outline-none"
        >
          <span class="hamburger-top" />
          <span class="hamburger-middle" />
          <span class="hamburger-bottom" />
          <Icon name="fa6-solid:bars" class="w-5 h-5" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="md:hidden">
        <div
          id="menu"
          class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <NuxtLink
            v-for="link of navigation"
            :key="link._path"
            :to="link._path"
            active-class="font-bold"
            class="mr-6"
          >
            {{ link.title }}
          </NuxtLink>
          <ColorModeSwitch class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300" />
        </div>
      </div>
    </nav>
  </div>
</template>
