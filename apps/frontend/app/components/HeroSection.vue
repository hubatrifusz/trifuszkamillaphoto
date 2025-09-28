<template>
  <UContainer class="bg-main-400 grid md:grid-cols-2 grid-cols-1 rounded-2xl h-[75vh] shadow-xl/15">
    <div class="flex flex-col justify-center gap-8">
      <div class="relative w-fit">
        <h1 class="bg-gradient-to-r from-text-primary to-accent-500 bg-clip-text text-transparent text-7xl font-semibold">
          A legszebb <br />
          pillanatok bárhol
        </h1>
        <UIcon name="i-lucide-sparkle" class="absolute top-4 right-2 size-6 text-accent-600" />
      </div>

      <p class="text-text-primary font-medium text-lg">
        Szabadtéren, műteremben, de akár a saját otthonod kényelmében <br />
        is tudunk stúdiót varázsolni! ☺️
      </p>
      <UButton class="w-fit shadow-lg" size="xl">Foglalj fotózást</UButton>
    </div>
    <div class="relative">
      <img src="/dog2.png" alt="dog" class="absolute -bottom-39 h-[700px] object-cover" />
    </div>
  </UContainer>
</template>

<style scoped>
h1 {
  line-height: 1.1;
  padding-bottom: 0.25rem;
  overflow: visible;
}
</style>
