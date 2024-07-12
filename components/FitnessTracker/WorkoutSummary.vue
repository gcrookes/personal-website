<template>
  <div class="flex column">
    <div
      v-if="active ? !workout.end_time : workout.end_time"
      class="row border items-start border-white rounded-md mt-4 bg-slate-900 relative-position"
    >
      <NuxtLink
        class="q-pl-md q-py-xs text-left"
        :to="`/fitness/workout/${workout.id}`"
      >
        <div>
          Type:
          {{ workout.type.name }}
        </div>
        <div>
          Date:
          {{ dayjs(workout.start_time).format("MMM DD YYYY") }}
        </div>
        <div>
          Time:
          {{ dayjs(workout.start_time).format("h:mm A") }}
          {{
            workout.end_time
              ? ` - ${dayjs(workout.end_time).format("h:mm A")}`
              : ""
          }}
        </div>
      </NuxtLink>
      <div class="absolute top-1 right-1">
        <q-btn
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
import dayjs from "dayjs";

defineProps({
  workout: { type: Object, required: true },
  active: { type: Boolean, default: false },
});

const emit = defineEmits(["delete"]);

const deleteWorkout = (workoutId: string) => {
  emit("delete", workoutId);
};
</script>
