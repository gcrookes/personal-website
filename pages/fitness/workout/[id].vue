<template>
  <div v-if="workout">
    <div class="row justify-between">
      <q-btn
        label="back"
        icon="arrow_back"
        class="text-white"
        size="lg"
        to="/fitness"
      />
      <q-btn
        v-if="!workout.end_time"
        label="end"
        icon-right="check"
        class="text-white"
        size="lg"
        @click="handleEndWorkout"
      />
    </div>
    <BorderedBox :title="workout.type?.name" :max-width="''">
      <div class="row full-width text-left">
        <div class="col-6">Start Time: {{ workout.start_time }}</div>
        <div class="col-6">End Time: {{ workout.end_time }}</div>
      </div>
    </BorderedBox>
    <div class="column px-4 py-2 gap-y-2 content-center">
      <div v-for="exercise in workout.exercises" :key="exercise.id">
        <div
          class="row border-primary border-2 rounded-lg justify-between mx-4"
        >
          <div>{{ exercise.name }}: {{ exercise.weight }} lb</div>
          <div>
            <q-btn
              class="col-1"
              icon="close"
              color="red"
              flat
              dense
              @click.stop="deleteexercise(exercise.id)"
            />
          </div>
        </div>
        <div class="row q-gutter-x-md pl-8">
          <RepCounter v-for="set in exercise.sets" :key="set.id" :set="set" />
          <q-btn
            icon="add"
            class="text-white px-1 mb-auto mt-10 ml-4"
            color="white"
            outline
            rounded
            @click="handleAddSet(exercise.id)"
          />
        </div>
      </div>
      <q-form
        ref="exerciseForm"
        class="row gap-x-2 items-center"
        @submit="addExercise"
      >
        <q-input
          v-model="newexercise.name"
          label="Name"
          class="col"
          dense
          outlined
          dark
          :rules.lazy="[(val) => !!val || 'Required']"
        />
        <q-input
          v-model="newexercise.weight"
          type="number"
          label="Weight"
          class="col-3"
          dense
          outlined
          dark
          :rules.lazy="[(val) => !!val || val > 0 || 'Must be greater than 0']"
        />
        <q-btn
          icon="add"
          class="col-auto mb-auto mt-1"
          type="submit"
          outline
          dense
          rounded
        />
      </q-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { QForm } from "quasar";
import BorderedBox from "~/components/BorderedBox.vue";
import RepCounter from "~/components/RepCounter.vue";

const newexercise = ref<{ name: string; weight: number }>({
  name: "",
  weight: 0,
});
const exerciseForm = ref<QForm>();

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
    `/api/fitnessTracker/workouts/${routeWorkoutId.value}/exercise`,
    {
      method: "post",
      body: newexercise.value,
    }
  );
  if (error && error.value) {
    fail(error.value.data.message);
    return;
  }
  await refresh();
  newexercise.value = { name: "", weight: 0 };
  exerciseForm.value?.reset();
};

const deleteexercise = async (exerciseId: string) => {
  const { error } = await useFetch(
    `/api/fitnessTracker/workouts/${routeWorkoutId.value}/exercise/${exerciseId}`,
    {
      method: "delete",
    }
  );
  if (error && error.value) {
    fail(error.value.data.message);
  }
  await refresh();
};

const handleAddSet = async (exerciseId: string) => {
  const { error } = await useFetch(
    `/api/fitnessTracker/workouts/${routeWorkoutId.value}/exercise/${exerciseId}/set`,
    {
      method: "post",
    }
  );
  if (error && error.value) {
    fail(error.value.data.message);
  }
  await refresh();
};

const handleEndWorkout = async () => {
  const { error } = await useFetch(
    `/api/fitnessTracker/workouts/${routeWorkoutId.value}/endWorkout`,
    {
      method: "post",
    }
  );
  if (error && error.value) {
    fail(error.value.data.message);
  }
  await navigateTo("/fitness");
};
</script>
