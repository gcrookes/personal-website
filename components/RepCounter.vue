<template>
  <div class="column content-center w-min">
    <q-btn
      icon="keyboard_arrow_up"
      class="text-white"
      color="white"
      flat
      dense
      @click="handleIncreaseReps"
    />
    <div class="border border-white w-min px-3 py-1 rounded-lg text-3xl">
      {{ set.reps }}
    </div>
    <q-btn
      icon="keyboard_arrow_down"
      class="text-white"
      color="white"
      flat
      dense
      @click="handleDecreaseReps"
    />
    <div>{{ set.weight }} lb</div>
  </div>
</template>

<script setup lang="ts">
interface ISet {
  id: string;
  weight: number;
  reps: number;
}

const props = defineProps({
  set: { type: Object as PropType<ISet>, default: () => {} },
});

const handleIncreaseReps = () => {
  props.set.reps++;
};
const handleDecreaseReps = () => {
  if (props.set.reps <= 0) return;
  props.set.reps--;
};
</script>
