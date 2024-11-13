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
      v-touch-pan.vertical.prevent.mouse="handlePanSets"
      class="border border-white py-1 rounded-lg text-3xl text-center w-10 q-mx-auto"
    >
      {{ set.reps }}
    </div>
    <q-btn
      v-touch-hold:1000.mouse="handleDeleteSet"
      :icon="set.reps <= 1 ? 'close' : 'keyboard_arrow_down'"
      class="text-white"
      :color="set.reps <= 1 ? 'red' : 'white'"
      flat
      dense
      @click="handleDecreaseReps"
    />
    <div class="row">
      <q-input
        v-model.number="set.weight"
        class="w-10"
        type="tel"
        dark
        dense
        input-class="text-center"
        mask="####"
        @blur="handleSetWeight(set.weight)"
      />
      <div class="column">
        <q-chip
          dense
          size="sm"
          :color="set.unit === 'LB' ? 'primary' : ''"
          input-class="text-center"
          clickable
          @click="handleSetUnit('LB')"
        >
          lb
        </q-chip>
        <q-chip
          dense
          size="sm"
          :color="set.unit === 'KG' ? 'primary' : ''"
          input-class="text-center"
          clickable
          @click="handleSetUnit('KG')"
        >
          kg
        </q-chip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RefSymbol } from "@vue/reactivity";
import { fail, confirm } from "~/utils/notify";
interface ISet {
  id: string;
  weight: number;
  reps: number;
  unit: string;
}

const props = defineProps({
  set: { type: Object as PropType<ISet>, default: () => {} },
});

const originalReps = ref(props.set.reps);
const isPanning = ref(false);
const deleted = ref(false);

const handleIncreaseReps = async () => {
  setReps(props.set.reps + 1);
};

const handleDecreaseReps = () => {
  if (props.set.reps < 0) return;
  setReps(props.set.reps - 1);
};

const handleDeleteSet = () => {
  confirm({
    okHandler: async () => {
      deleted.value = true;
      await deleteSet();
    },
    title: "Confirm Delete Set",
    message: "Are you sure you want to to delete this set?",
  });
};

const setReps = async (newReps: number) => {
  if (newReps === 0) {
    handleDeleteSet();
    return;
  }
  const body = { reps: newReps };
  props.set.reps = newReps;
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
  props.set.reps = data.value?.reps || 0;
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
  if (weight <= 0) {
    fail("Must be a positive integer");
    props.set.weight = 0;
    return;
  }
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
  props.set.weight = data.value?.weight || 0;
};

const handleSetUnit = async (unit: string) => {
  const body = { unit: unit };
  const originalUnit = props.set.unit;
  const originalWeight = props.set.weight;
  props.set.unit = unit;
  props.set.weight = convertWeight(originalWeight, originalUnit, unit);

  await $fetch(`/api/fitnessTracker/set/${props.set.id}/unit`, {
    method: "patch",
    body,
  })
    .then((res) => {
      console.log(res);
      props.set.unit = res?.unit!;
      props.set.weight = res?.weight!;
    })
    .catch((ex) => {
      fail(ex.data.message);
      props.set.unit = originalUnit;
      props.set.weight = originalWeight;
    });
};

const handlePanSets = (event: any) => {
  if (!event) {
    props.set.reps = originalReps.value;
    isPanning.value = false;
    return;
  }
  if (event.isFirst) {
    originalReps.value = props.set.reps;
    isPanning.value = true;
  }
  if (event.isFinal) {
    setReps(props.set.reps);
    isPanning.value = false;
    return;
  }
  const reps = originalReps.value;
  const diff = Math.floor(event.distance.y / 15);
  if (event.direction === "up") {
    props.set.reps = reps + diff;
  } else {
    props.set.reps = Math.max(reps - diff, 0);
  }
};
</script>
