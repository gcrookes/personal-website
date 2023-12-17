<template>
  <div class="bg-slate-900 h-screen text-white">
    <NuxtLayout>
      <header>
        <q-toolbar class="text-white">
          <q-toolbar-title class="font-bold">
            GARNET LEO CROOKES
          </q-toolbar-title>
          <q-tabs v-if="$q.screen.gt.xs" v-model="tab" shrink>
            <q-tab name="home" >
                <NuxtLink to="/" class="flex font-bold h-full w-full text-center items-center">Home</NuxtLink>
            </q-tab>
            <q-tab name="about" >
                <NuxtLink to="/about" class="flex font-bold h-full w-full text-center items-center">About</NuxtLink>
            </q-tab>
            <q-tab name="projects" >
                <NuxtLink to="/projects" class="flex font-bold h-full w-full text-center items-center">Projects</NuxtLink>
            </q-tab>
            <q-tab name="contact" >
                <NuxtLink to="/contact" class="flex font-bold h-full w-full text-center items-center">Contact</NuxtLink>
            </q-tab>
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
      <div class="mx-6">
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const tab = ref("home");
const route = useRoute()
</script>
