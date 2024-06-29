<template>
  <div v-if="workout">
    <BorderedBox :title="workout.type?.name">
      <div class="row full-width text-left">
        <div class="col-6">Start Time: {{ workout.start_time }}</div>
        <div class="col-6">End Time: {{ workout.end_time }}</div>
      </div>
    </BorderedBox>
    <div>{{ workout.exercises }}</div>
    <q-btn label="New Excercise" @mousedown="addExercise" />
  </div>
</template>

<script setup lang="ts">
import BorderedBox from "~/components/BorderedBox.vue";

const route = useRoute();
const routeWorkoutId = computed(() =>
  Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
);
const { data: workout } = await useFetch(
  `/api/fitnessTracker/workouts/${routeWorkoutId.value}`,
  { key: routeWorkoutId.value }
);

const addExercise = async () => {
  const { data, error } = await useFetch(
    `/api/fitnessTracker/workouts/${routeWorkoutId.value}/excercise`,
    {
      method: "post",
      body: { name: "Bench Press", weight: 135 },
    }
  );
  if (error && error.value) {
    fail(error.value.data.message);
    return;
  }
  if (!!workout.value) await navigateTo("/fitness/workout/" + workout.value.id);
};
</script>
