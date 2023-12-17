<template>
  <div
    class="relative-position mt-4 font-white border-primary border-2 rounded-md p-2 body-border"
  >
    <div
      class="absolute text-2xl p-2 mx-2 rounded-2 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900"
    >
      <div class="max-w-[70vw] ellipsis px-4 border-2 rounded-md">
        {{ title }}
      </div>
    </div>
    <div class="text-lg px-4 pt-4">
      {{ body }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, default: "" },

  body: { type: String, default: "" },
});
</script>

<style lang="sass">
.body-border:hover
    border-color: $primary
    background: linear-gradient(85deg, rgba(34, 197, 94, 0.5), #1e293b, #1e293b, #0f172a, #0f172a, #0f172a, #0f172a, #1e293b, #1e293b, rgba(59, 130, 246, 0.5))
</style>
