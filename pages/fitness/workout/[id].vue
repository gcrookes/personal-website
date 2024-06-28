<template>
  <BorderedBox :title="workout.type.name">
    <div>{{ workout.start_time }}</div>
    <div>{{ workout }}</div>
  </BorderedBox>
</template>

<script setup lang="ts">
import BorderedBox from "~/components/BorderedBox.vue";

const route = useRoute();
const { data: workout } = await useFetch(
  `/api/fitnessTracker/workouts/${route.params.id}`
);
</script>
