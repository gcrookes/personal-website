<template>
  <div class="bg-slate-900 h-screen text-white">
    <NuxtLayout>
      <header>
        <q-toolbar class="text-white">
          <q-toolbar-title class="font-bold text-3xl">
            GARNET CROOKES
          </q-toolbar-title>
          <q-tabs v-if="$q.screen.gt.xs" v-model="tab" shrink>
            <q-route-tab class="rounded-lg" to="/" name="home" label="Home" />
            <q-route-tab class="rounded-lg" to="/about" name="about" label="About" />
            <q-route-tab class="rounded-lg" to="/projects" name="projects" label="Projects" />
            <q-route-tab class="rounded-lg" to="/contact" name="contact" label="Contact" />
          </q-tabs>
          <q-btn v-else flat round dense icon="menu">
            <q-menu
              auto-close
              class="bg-slate-800 text-white border border-white"
            >
              <q-list>
                <q-item
                  clickable
                  :class="[route.path !== '/' ? '' : 'underline']"
                  >
                  <NuxtLink to="/" class="flex font-bold h-full w-full text-center items-center">Home</NuxtLink>
                </q-item>
                <q-item
                  clickable
                  :class="[route.path !== '/about' ? '' : 'underline']"
                  >
                    <NuxtLink to="/about" class="flex font-bold h-full w-full text-center items-center">About</NuxtLink>
                </q-item>
                <q-item
                  clickable
                  :class="[route.path !== '/projects' ? '' : 'underline']"
                  >
                    <NuxtLink to="/projects" class="flex font-bold h-full w-full text-center items-center">Projects</NuxtLink>
                </q-item>
                <q-item
                  clickable
                  :class="[route.path !== '/contact' ? '' : 'underline']"
                  >
                    <NuxtLink to="/contact" class="flex font-bold h-full w-full text-center items-center">Contact</NuxtLink>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
      </header>
      <div :class="$q.screen.lt.md ? 'mx-6' : 'mx-24'">
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const tab = ref("home");
const route = useRoute()
</script>
