<script lang="ts" setup>

//const { navigation } = useContent()
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

// const links = computed(() => {
//   return navigation.value.map((item) => {
//     return {
//       label: item.title,
//       to: item._path,
//     }
//   })
// })
</script>

<template>
  <UHeader :links="mapContentNavigation(navigation)">
    <template #logo>
      <div class="flex items-center gap-2">
        <img src="@/assets/logo.svg" alt="Jemima Daisy logo" class="h-16 w-16">
        <span> Jemima Daisy </span>
      </div>
    </template>
    <template #right>
      <div class="hidden lg:block">
        <FollowMe />
      </div>
      <UTooltip class="mr-1 lg:mr-0 lg:ml-2" text="Toggle color mode" placement="bottom">
        <UColorModeButton />
      </UTooltip>
    </template>
    <template #panel>
      <UAsideLinks :links="mapContentNavigation(navigation)" />
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <FollowMe />
      </div>
    </template>
  </UHeader>

  <UMain>
    <NuxtPage />
  </UMain>

  <UFooter :links="mapContentNavigation(navigation)">
    <template #left>
      <UFooterLinks :links="mapContentNavigation(navigation)" />
    </template>
    <template #center>
      <span />
    </template>
    <template #right>
      <FollowMe />
    </template>
  </UFooter>
</template>