<template>
    <div>
        <BorderedBox
        :title="description.title"
        :body="description.content"
        :key="description.title"
        />
        <BorderedBox
        v-for="info in projects"
        :title="info.title"
        :key="info.title"
        :body="info.body"
        >
            <div class="text-left full-width p-2 font-bold">
                Built Using:
            </div>
            <div class="row q-gutter-md justify-center">
                <div v-for="logo in info.logos" class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-5 max-h-12 min-h-12 bg-white flex justify-center rounded-lg p-0.5 border-2 border-green-400" :key="logo">
                    <img :src="`/logos/${logo}.png`" :title="logo" :alt="logo" class="max-h-full max-w-full">
                </div>
            </div>
        </BorderedBox>
    </div>
</template>

<script setup lang="ts">
    const description = {
    title: "Projects",
    content:
      "These are some of the projects I have been working on lately",
}
const projects = [
  {
    title: "Ticket System",
    body: "A sample website with a system to purchase tickets for a movie theater chain (Cineplex clone)",
    bullets: [
        "Frontend implemented using React, users can login or use the site as a guest",
        "Backend implemented in Spring Boot, with data stored on a MySQL database",
    ],
    logos: ["javascript", "react", "springboot", "mysql"]
  },
  {
    title: "EOG Mouse Control",
    body: "A microproccesor based system to control a computer mouse using brainwaves. For the NatHacks Hackathon",
    bullets: [
        "Created a Brain Computer Interface to control a computer mouse from EOG Data",
        "Captured and filtered data from multiple EXG Pill sensors on an Arduino",
        "Used serial communication to transmit data between Arduino and computer",
    ],
    logos: ["python", "tensorflow", "arduino", "exg"]
  },
];
</script>
