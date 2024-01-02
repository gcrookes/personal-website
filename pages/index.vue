<template>
    <div>
        <div class="bg-slate-900/25 p-4 mt-8 border-none">
            <div class="text-4xl text-bold py-2">
                Hi, I'm
            </div>
            <div class="container relative-position">
                <div class="aboslute top-0 animate-in text-6xl text-bold text-primary py-2">
                    Garnet Crookes
                </div>
            </div>
            <div class="text-4xl text-bold py-2">
                Full Stack Developer
            </div>
        </div>
        <div class="mt-8 mb-8">
            <IconBox title="About" icon="import_contacts" description="I am a full stack web developer who can deliver results across the project" />
            <IconBox title="Projects" icon="architecture" description="Check out my side projects, and what I have been working on lately" />
            <IconBox title="Contact Me" icon="contact_mail" description="Feel free to reach out for an inquiries or to hire me" />
            <IconBox title="Get CV" icon="picture_as_pdf" description="Download a PDF copy of my resume" />
        </div>
    </div>
</template>

<style lang="sass">
.animate-in
    transform: translateY(100%)
    animation: slideInUp 3s forwards

.container
    overflow: hidden

@keyframes slideInUp
  to
    opacity: 1
    transform: translateY(0)
</style>
