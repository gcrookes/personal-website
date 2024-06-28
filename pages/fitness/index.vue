<template>
  <div class="text-center">
    <div class="text-4xl q-pb-md">Fitness Tracker</div>
    <BorderedBox title="Start a New Workout">
      <div class="min-w-[20rem] flex justify-between q-px-sm">
        <q-btn
          v-for="workout in workoutTypes"
          :label="workout.name"
          :key="workout.id"
          @mousedown="startWorkout(workout.id)"
        />
      </div>
    </BorderedBox>
    <div v-for="workout in data">
      {{ workout.id }}
    </div>
  </div>
</template>

<script setup lang="ts">
const startWorkout = async (type: string) => {
  const { data: workout, error } = await useFetch(
    `/api/fitnessTracker/startWorkout/${type}`,
    {
      method: "post",
      watch: false,
    }
  );
  if (error && error.value) {
    fail(error.value.data.message);
  }
  console.log(workout);
  await navigateTo("/fitness/workout/" + workout.value.id);
};

const { data: workoutTypes } = await useFetch(
  "/api/fitnessTracker/workoutTypes"
);
const { data } = await useFetch("/api/fitnessTracker/workouts");
</script>
