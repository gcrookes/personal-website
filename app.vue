<template>
  <div class="bg-slate-900 h-[100vh] w-[100vw] px-4">
    <q-toolbar class="text-white">
      <q-toolbar-title class="font-bold"> GARNET LEO CROOKES </q-toolbar-title>
      <q-tabs v-if="$q.screen.gt.xs" v-model="tab" shrink>
        <q-tab name="home" label="Home" />
        <q-tab name="about" label="About" />
        <q-tab name="projects" label="Projects" />
        <q-tab name="contact" label="Contact" />
      </q-tabs>
      <q-btn v-else flat round dense icon="menu">
          <q-menu auto-close class="bg-slate-800 text-white border border-white">
              <q-list>
                  <q-item clickable @click="tab='home'" :class="[tab !== 'home' ? '' : 'underline']"><q-item-section>Home</q-item-section></q-item>
                  <q-item clickable @click="tab='about'" :class="[tab !== 'about' ? '' : 'underline']"><q-item-section>About</q-item-section></q-item>
                  <q-item clickable @click="tab='projects'" :class="[tab !== 'projects' ? '' : 'underline']"><q-item-section>Projects</q-item-section></q-item>
                  <q-item clickable @click="tab='contact'" :class="[tab !== 'contact' ? '' : 'underline']"><q-item-section>Contact</q-item-section></q-item>
              </q-list>
          </q-menu>
      </q-btn>
    </q-toolbar>
    <q-btn color="primary" label="primary" />
    <q-btn color="secondary" label="secondary" />
  </div>
</template>

<script setup lang="ts">
const tab = ref("home");
</script>
