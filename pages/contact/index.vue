<template>
    <div class="row q-col-gutter-x-sm q-gutter-y-md">
        <BorderedBox
            class="col-12 q-ml-xs"
            title="Contact"
            :body="headerMessage"
            key="title"
        />
        <q-input
            label="Name"
            class="col-12 col-md-6"
            v-model="message.name"
            outlined
            dark
       />
        <q-input
            label="Email Address"
            class="col-12 col-md-6"
            type="email"
            v-model="message.email"
            outlined
            dark
        />
        <q-input
            label="Message"
            class="col-12"
            type="textarea"
            v-model="message.message"
            outlined
            dark
        />
        <q-btn
            label="Submit"
            color="white"
            class="ml-auto mr-2"
            size="lg"
            dense
            outline
        />
    </div>
</template>


<script setup lang="ts">
    const message = ref({email: '', name: '', message: ''})
const headerMessage = 'Reach out for any inquires and I will get back to you promptly'
</script>
