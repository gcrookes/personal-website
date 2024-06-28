<template>
  <pre>{{ route.params.id }}</pre>
</template>

<script setup lang="ts">
const route = useRoute()
console.log(route)
</script>
