<script setup>
import { LeftContent, RightContent } from ".";
</script>

<template>
  <div class="px-3 md:px-10 w-full min-h-[80vh]">
    <div class="flex flex-col space-y-4">
      <div class="flex items-center space-x-3">
        <div class="w-2 h-2 flex items-center justify-center">
          <img src="/left-arrow.png" alt="left arrow" />
        </div>
        <h3 class="font-bold text-sm">Geri</h3>
      </div>

      <div class="flex flex-col space-y-2">
        <span class="text-xs">Bölmə 1: Giriş</span>
        <h2 class="text-md font-bold">1. Kursla tanışlıq</h2>
      </div>
    </div>

    <div class="mt-5">
      <div class="w-full h-12 flex items-center space-x-2 justify-end">
        <div
          class="w-[16rem] h-8 flex items-center justify-center gap-2 rounded-md border-2 border-gray-300"
        >
          <div class="w-5 h-5 flex items-center justify-center">
            <img src="/chart.png" alt="eye" />
          </div>
          <span class="text-sm text-gray-500"
            >Dərs cədvəli və nəticələriniz</span
          >
        </div>
        <div
          class="w-10 h-8 flex items-center justify-center rounded-md bg-gray-200 border-2 border-gray-300"
        >
          <div class="w-5 h-5 flex items-center justify-center">
            <img src="/eye.png" alt="eye" />
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-40 w-full min-h-[60vh] mb-40">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  </div>
</template>
