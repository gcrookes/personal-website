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
    <div v-for="workout in data" class="flex column gap-2 mt-2">
      <div
        class="row border border-white rounded-md tw-min-w-[40rem] justify-between"
      >
        <NuxtLink class="col-11" :to="`/fitness/workout/${workout.id}`">
          <div>
            {{ workout.type.name }}
          </div>
          <div>
            {{ workout.start_time }}
          </div>
          <div>
            {{ workout.end_time }}
          </div>
        </NuxtLink>
        <q-btn
          class="col-1"
          icon="close"
          color="red"
          flat
          dense
          @click.stop="deleteWorkout(workout.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: workoutTypes } = await useFetch(
  "/api/fitnessTracker/workoutTypes"
);
const { data, refresh } = await useFetch("/api/fitnessTracker/workouts");

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
    return;
  }
  if (!!workout.value) await navigateTo("/fitness/workout/" + workout.value.id);
};
const deleteWorkout = async (workoutId: string) => {
  const { error } = await useFetch(
    `/api/fitnessTracker/workouts/${workoutId}`,
    {
      method: "delete",
    }
  );
  if (error && error.value) {
    fail(error.value.data.message);
  }
  await refresh();
};
</script>
