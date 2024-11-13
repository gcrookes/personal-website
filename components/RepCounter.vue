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
interface ISet {
  id: string;
  weight: number;
  reps: number;
  unit: string;
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
</script>
