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
    </div>
</template>

<style lang="sass">
.animate-in
    transform: translateY(100%)
    animation: slideInUp 5s forwards

.container
    overflow: hidden

@keyframes slideInUp
  to
    opacity: 1
    transform: translateY(0)
</style>
