<template>
  <div class="h-screen w-screen -mt-16 justify-center items-center column">
    <BorderedBox title="Login" class="full-width">
      <q-form @submit="signIn">
        <q-input
          aria-id="input_email"
          for="input_email"
          label="Email"
          type="email"
          class="full-width"
          v-model="email"
          :rules="[(val) => !!val || 'Email required']"
          outlined
          dense
          dark
        />
        <q-input
          aria-id="input_password"
          for="input_password"
          label="Password"
          :type="hidePassword ? 'password' : 'text'"
          class="full-width"
          v-model="password"
          :rules="[(val) => !!val || 'Password required']"
          outlined
          dense
          dark
        >
          <template v-slot:append>
            <q-btn
              :icon="hidePassword ? 'visibility_off' : 'visibility'"
              @click="hidePassword = !hidePassword"
              dense
              flat
              unelevated
              :ripple="false"
            />
          </template>
        </q-input>
        <q-btn
          aria-id="btn_login"
          id="btn_login"
          label="login"
          color="primary"
          class="full-width"
          type="submit"
          rounded
        />
      </q-form>
    </BorderedBox>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { fail } from "~/utils/notify";

const supabase = useSupabaseClient();
const email = ref("testuser@garnetcrookes.ca");
const password = ref("password");
const hidePassword = ref(true);

const signIn = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) {
    console.log(error);
    fail(error.message);
    return;
  }
  navigateTo("/fitness");
};
</script>
