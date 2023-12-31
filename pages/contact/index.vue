<template>
    <div class="row q-col-gutter-x-sm q-gutter-y-md">
        <q-form class="row q-col-gutter-x-sm q-gutter-y-md" @submit="handleSubmit">
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
            :rules="[val => !!val || 'Please leave your name']"
            outlined
            dark
       />
        <q-input
            label="Email Address"
            class="col-12 col-md-6"
            type="email"
            v-model="message.email"
            :rules="[val => !!val || 'Please leave your email']"
            outlined
            dark
        />
        <q-input
            label="Message"
            class="col-12"
            type="textarea"
            v-model="message.message"
            :rules="[val => !!val || 'Please leave your message']"
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
            type="submit"
        />
        </q-form>
    </div>
</template>


<script setup lang="ts">
import { fail, success } from '~/utils/notify';

 
const message = ref({email: '', name: '', message: ''})
const headerMessage = 'Reach out for any inquires and I will get back to you promptly'

const handleSubmit = async () => {
    const { error } = await useFetch('/api/saveMessage', {
        method: 'post',
        body: message.value
    }) 
    if (error && error.value)
        fail(error.value.data.message)
    else
        success()
}

</script>
