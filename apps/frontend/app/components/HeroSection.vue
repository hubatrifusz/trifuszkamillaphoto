<template>
  <div id="hero-container" class="grid md:grid-cols-6 grid-cols-1 rounded-2xl h-[75vh] shadow-xl/15 px-48">
    <div class="flex flex-col justify-center gap-12 col-span-4">
      <div class="relative w-fit">
        <h1 class="bg-gradient-to-r from-text-inverted to-accent-500 bg-clip-text text-transparent text-8xl font-semibold">
          A legszebb <br />
          pillanatok bárhol
        </h1>
        <UIcon name="i-lucide-sparkle" class="absolute top-4 right-2 size-6 text-accent-400" />
      </div>

      <p class="text-text-inverted font-medium text-lg">
        Szabadtéren, műteremben, de akár a saját otthonod kényelmében <br />
        is tudunk stúdiót varázsolni! ☺️
      </p>
      <UButton icon="i-lucide-camera" class="w-fit shadow-lg px-10 py-5" color="primary" size="xl"><span class="text-lg">Foglalj fotózást</span></UButton>
    </div>
    <div class="relative col-span-2">
      <img src="/dog2.png" alt="dog" class="absolute -bottom-42 h-[750px] object-cover" />
    </div>
  </div>
</template>

<style scoped>
h1 {
  line-height: 1.1;
  padding-bottom: 0.25rem;
  overflow: visible;
}

#hero-container {
  background: radial-gradient(circle at bottom right, var(--color-accent-500), var(--color-accent-800) 70%);
}
</style>
