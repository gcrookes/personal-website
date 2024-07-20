<template>
  <div class="text-center q-mx-sm">
    <div class="text-4xl q-pb-md">Fitness Tracker</div>
    <BorderedBox title="Start a New Workout">
      <div class="min-w-[18rem] flex justify-between q-px-sm">
        <q-btn
          v-for="workout in workoutTypes"
          :label="workout.name"
          :key="workout.id"
          @mousedown="startWorkout(workout.id)"
        />
      </div>
    </BorderedBox>
    <BorderedBox title="Active Workouts">
      <WorkoutSummary
        v-for="workout in data"
        :workout="workout"
        :key="workout.id"
        active
        @delete="handleDeleteWorkout"
      />
    </BorderedBox>
    <BorderedBox title="Past Workouts">
      <WorkoutSummary
        v-for="workout in data"
        :workout="workout"
        :key="workout.id"
        @delete="handleDeleteWorkout"
      />
    </BorderedBox>
  </div>
</template>

<script setup lang="ts">
import WorkoutSummary from "~/components/FitnessTracker/WorkoutSummary.vue";
import { fail, confirm } from "~/utils/notify";

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

const handleDeleteWorkout = async (workoutId: string) => {
  confirm({
    okHandler: async () => {
      await deleteWorkout(workoutId);
    },
    title: "Confirm Delete Workout",
    message: "Are you sure you want to to delete this workout?",
  });
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
