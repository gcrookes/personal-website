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
                <div v-for="{ name: logo, link } in info.logos" class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-5" :key="logo">
                    <a :href="link" target="_blank">
                        <div class="bg-white rounded-lg p-0.5 border-2 border-green-400 h-12 min-w-12 max-h-12 flex justify-center">
                            <img :src="`/logos/${logo}.png`" :title="logo" :alt="logo" class="max-h-full max-w-full">
                        </div>
                    </a>
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
    logos: [
        { name: "javascript", link: "https://www.javascript.com/" },
        { name: "react", link: "https://react.dev/" },
        { name: "springboot", link: "https://spring.io/projects/spring-boot/" },
        { name: "mysql", link: "https://www.mysql.com/" },
    ],
  },
  {
    title: "EOG Mouse Control",
    body: "A microproccesor based system to control a computer mouse using brainwaves. For the NatHacks Hackathon",
    bullets: [
        "Created a Brain Computer Interface to control a computer mouse from EOG Data",
        "Captured and filtered data from multiple EXG Pill sensors on an Arduino",
        "Used serial communication to transmit data between Arduino and computer",
    ],
    logos: [
        { name: "python", link: "https://www.python.org/" },
        { name: "tensorflow", link: "https://www.tensorflow.org/" },
        { name: "arduino", link: "https://www.arduino.cc/" },
        { name: "exg", link: "https://store.upsidedownlabs.tech/product/bioamp-exg-pill/" },
    ],
  },
];
</script>
