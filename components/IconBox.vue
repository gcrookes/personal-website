<template>
    <div :class="$q.screen.lt.sm ? 'ml-6' : ''" > 
        <div :class="['relative-position p-3 pl-8 border-2 rounded-md mt-10', color, border]">
            <div :class="['absolute -top-7 -left-7 p-2 border-2 rounded-xl bg-primary', border]">
                <q-icon :name="icon" size="md"/>
            </div>
            <div class="text-xl underline pb-1">
                {{ title }}
            </div>
            <div>
                {{ description }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    icon: { type: String, default: 'house' },
    color: { type: String, default: 'bg-zinc-900' },
    border: { type: String, default: 'border-lime-50' },
})
</script>
