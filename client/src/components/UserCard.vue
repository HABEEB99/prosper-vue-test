<script setup>
import { defineProps, ref } from "vue";

const { user } = defineProps(["user"]);

const { rank, name, activities } = user;

const isUserDetailsOpen = ref(true);

const toggleUserModal = () => {
  isUserDetailsOpen.value = !isUserDetailsOpen.value;
};
</script>

<template>
  <div class="w-full mb-2">
    <div
      class="bg-[#2C7EF9] w-full px-4 h-20 flex items-center justify-between"
    >
      <div class="space-x-2">
        <span>{{ rank }}</span>
        <span>{{ name }}</span>
      </div>

      <div
        @click="toggleUserModal"
        class="w-5 h-5 flex items-center justify-center cursor-pointer"
      >
        <img v-if="isUserDetailsOpen" src="/up-arrow.png" alt="Up Arrow" />
        <img v-else src="/down-arrow.png" alt="Down Arrow" />
      </div>
    </div>

    <div v-if="isUserDetailsOpen" class="w-full flex flex-col gap-1">
      <div
        v-for="data in activities"
        :key="data._key"
        class="w-full h-16 bg-gray-100 px-4 flex flex-col justify-center"
      >
        <span class="text-sm text-gray-700 font-bold">{{ data.activity }}</span>
        <div class="space-x-4 flex">
          <div
            class="flex bg-gray-200 justify-center items-center h-6 w-fit px-2 rounded-lg"
          >
            <span class="text-xs text-gray-700">{{ data.location }}</span>
          </div>
          <div class="flex space-x-2 items-center">
            <div class="w-4 h-4 flex items-center justify-center">
              <img src="/clock.png" alt="clock" />
            </div>
            <span class="text-xs text-gray-500">{{ data.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
