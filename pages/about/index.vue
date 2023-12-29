<template>
  <div>
    <BorderedBox
      v-for="info in aboutMe"
      :title="info.title"
      :body="info.content"
      :key="info.title"
    />
  </div>
</template>

<script setup lang="ts">
const aboutMe = [
  {
    title: "About",
    content:
      "Hi, it's Garnet. I'm an ex-mechanical engineer converted into a software enthusiast. This website serves as a showcase for my skills and projects. Please feel free to explore!",
  },
  {
    title: "Full Stack Engineer",
    content: "I am a full stack software engineer focused on delivering great user experiences. I have experience developing web frontends using Vue, Nuxt, and React. I have developed REST backends using .NET and Springboot.",
  },
  {
    title: "Mechanical Engineer",
    content: "In addition to software engineering I also have a degree in Mechanical Engineering and experience designing mechanical systems. Not only has this helped me better design software it makes me particularialy well suited to work in projects that interact with the physics of the real world.",
  },
];
</script>
