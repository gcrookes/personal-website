<template>
  <div v-if="workout">
    <BorderedBox :title="workout.type?.name">
      <div class="row full-width text-left">
        <div class="col-6">Start Time: {{ workout.start_time }}</div>
        <div class="col-6">End Time: {{ workout.end_time }}</div>
      </div>
    </BorderedBox>
    <div class="column px-4 py-2 gap-y-2">
      <div
        v-for="excercise in workout.exercises"
        :key="excercise.id"
        class="row border-primary border-2 rounded-lg p-2 justify-between"
      >
        <div>{{ excercise.name }}: {{ excercise.weight }} lb</div>
        <div>
          <q-btn
            class="col-1"
            icon="close"
            color="red"
            flat
            dense
            @click.stop="deleteExcercise(excercise.id)"
          />
        </div>
      </div>
      <q-form ref="excerciseForm" class="row gap-x-2" @submit="addExercise">
        <q-input
          v-model="newExcercise.name"
          label="Name"
          class="col"
          dense
          outlined
          dark
          :rules="[(val) => !!val || 'Required']"
        />
        <q-input
          v-model="newExcercise.weight"
          type="number"
          label="Weight"
          class="col-3"
          dense
          outlined
          dark
          :rules="[(val) => !!val || val > 0 || 'Must be greater than 0']"
        />
        <q-btn label="New Excercise" class="col-4" type="submit" />
      </q-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { QForm } from "quasar";
import BorderedBox from "~/components/BorderedBox.vue";

const newExcercise = ref<{ name: string; weight: number }>({
  name: "",
  weight: 0,
});
const excerciseForm = ref<QForm>();

const route = useRoute();
const routeWorkoutId = computed(() =>
  Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
);
const { data: workout, refresh } = await useFetch(
  `/api/fitnessTracker/workouts/${routeWorkoutId.value}`,
  { key: routeWorkoutId.value }
);

const addExercise = async () => {
  const { data, error } = await useFetch(
    `/api/fitnessTracker/workouts/${routeWorkoutId.value}/excercise`,
    {
      method: "post",
      body: newExcercise.value,
    }
  );
  if (error && error.value) {
    fail(error.value.data.message);
    return;
  }
  await refresh();
  newExcercise.value = { name: "", weight: 0 };
  excerciseForm.value?.reset();
};

const deleteExcercise = async (excerciseId: string) => {
  const { error } = await useFetch(
    `/api/fitnessTracker/workouts/${routeWorkoutId.value}/excercise/${excerciseId}`,
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
