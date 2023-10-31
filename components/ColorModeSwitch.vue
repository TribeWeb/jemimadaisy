<script setup lang="ts">
const colorMode = useColorMode()
const onClick = () => {
  const values = ['system', 'light', 'dark', 'sepia']
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length

  colorMode.preference = values[next]
}
</script>

<template>
  <button
    aria-label="Color Mode"
    @click="onClick"
  >
    <ColorScheme placeholder="...">
      <Icon :name="`${colorMode.preference}-mode`" />
    </ColorScheme>
  </button>
</template>
<style>
/* body {
  background-color: #8B8D5A;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
} */
</style>