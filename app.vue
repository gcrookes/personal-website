<template>
  <div class="h-screen min-h-full text-white">
    <NuxtLayout>
      <header class="sticky top-0 left-0 w-full bg-slate-900 px-2" style="z-index: 3">
        <q-toolbar class="text-white">
          <q-toolbar-title to="/" class="font-bold text-3xl">
            <NuxtLink to="/">GARNET CROOKES</NuxtLink>
          </q-toolbar-title>
          <q-tabs v-if="$q.screen.gt.sm" v-model="tab" shrink>
            <q-route-tab class="rounded-lg" to="/" name="home" label="Home" />
            <q-route-tab class="rounded-lg" to="/about" name="about" label="About" />
            <q-route-tab class="rounded-lg" to="/projects" name="projects" label="Projects" />
            <q-route-tab class="rounded-lg" to="/contact" name="contact" label="Contact" />
            <q-route-tab class="rounded-lg" to="/login" name="login" label="Login" />
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
                <q-item
                  clickable
                  :class="[route.path !== '/contact' ? '' : 'underline']"
                  >
                    <NuxtLink to="/login" class="flex font-bold h-full w-full text-center items-center">Login</NuxtLink>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
      </header>
      <div :class="['flex flex-row justify-center pb-8', $q.screen.lt.md ? 'mx-8' : '']">
          <NuxtParticles
          id="tsparticles" 
          :options="options"
          @load="onLoad"
          >
          </NuxtParticles>
          <NuxtPage />
      </div>
      <footer class="fixed bottom-0 w-full h-8 flex items-center justify-center bg-slate-900 px-8 text-xs" style="z-index: 3">
          <div>
              Copyright &copy; 2024 Garnet Crookes. All rights reserved
          </div>
      </footer>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const tab = ref("home");
const route = useRoute()

import type { Container } from 'tsparticles-engine'
const onLoad = (container: Container) => {
  // Do something with the container
  container.pause()
  setTimeout(() => container.play(), 0)
}
import options from '@/assets/particles.json'
</script>
