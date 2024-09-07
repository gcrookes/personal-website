<template>
  <div v-if="!deleted" class="column">
    <q-btn
      icon="keyboard_arrow_up"
      class="text-white"
      color="white"
      flat
      dense
      @click="handleIncreaseReps"
    />
    <div
      class="border border-white py-1 rounded-lg text-3xl text-center w-10 q-mx-auto"
    >
      {{ set.reps }}
    </div>
    <q-btn
      :icon="set.reps === 1 ? 'close' : 'keyboard_arrow_down'"
      class="text-white"
      :color="set.reps === 1 ? 'red' : 'white'"
      flat
      dense
      @click="handleDecreaseReps"
    />
    <q-input
      v-model="set.weight"
      suffix="lb"
      class="w-14"
      type="number"
      step="1"
      dark
      dense
      input-class="text-right"
      @blur="handleSetWeight(set.weight)"
    />
  </div>
</template>

<script setup lang="ts">
interface ISet {
  id: string;
  weight: number;
  reps: number;
}

const deleted = ref(false);

const props = defineProps({
  set: { type: Object as PropType<ISet>, default: () => {} },
});

const handleIncreaseReps = async () => {
  setReps(props.set.reps + 1);
};

const handleDecreaseReps = () => {
  if (props.set.reps === 1) {
    deleted.value = true;
    deleteSet();
    return;
  }
  if (props.set.reps <= 1) return;
  setReps(props.set.reps - 1);
};

const setReps = async (newReps: number) => {
  const body = { reps: newReps };
  const { data, error } = await useFetch(
    `/api/fitnessTracker/set/${props.set.id}/reps`,
    {
      method: "patch",
      body,
    }
  );
  if (error && error.value) {
    fail(error.value.data.message);
    return;
  }
  props.set.reps = data.value.reps;
};

const deleteSet = async () => {
  const { error } = await useFetch(`/api/fitnessTracker/set/${props.set.id}`, {
    method: "delete",
  });
  if (error && error.value) {
    fail(error.value.data.message);
    return;
  }
  props.set.reps = 0;
};

const handleSetWeight = async (weight: number) => {
  const body = { weight };
  const { data, error } = await useFetch(
    `/api/fitnessTracker/set/${props.set.id}/weight`,
    {
      method: "patch",
      body,
    }
  );
  if (error && error.value) {
    fail(error.value.data.message);
    return;
  }
  props.set.weight = data.value.weight;
};
</script>
