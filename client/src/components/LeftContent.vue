<script setup>
import { ref, onMounted } from "vue";
import client from "../utils/client";
import { userListQuery } from "../utils/queries";
const userListData = ref([]);

const fetchUserList = async () => {
  const data = await client.fetch(userListQuery);

  userListData.value = data;

  console.log(userListData);
};

onMounted(() => {
  fetchUserList();
});
</script>

<template>
  <div class="w-full md:w-[50%]">
    <div
      class="w-full h-12 flex items-center justify-center mb-5 space-x-2 rounded-md border-2 border-gray-300"
    >
      <span class="text-xs text-[#2C7EF9]">
        Dərsi bitirməyiniz üçün son tarix 12 aprel, 18:00
      </span>
    </div>

    <div>
      <img src="/user.png" alt="" />
    </div>

    <div class="mt-6">
      <span class="text-sm text-gray-500"
        >Salam, hörmətli təlim iştirakçısı. Kursa tanışlıq videosuna baxmağınız
        xahiş olunur.</span
      >
    </div>

    <div class="mt-6 flex items-center space-x-3">
      <button
        class="bg-[#19CC95] w-[17rem] h-10 rounded-md text-white flex items-center justify-center gap-2"
      >
        <div class="flex items-center justify-center h-4 w-4">
          <img src="/copy.png" alt="copy logo" />
        </div>
        Təlimə aid materiallar
      </button>

      <button
        class="bg-[#253858] w-[10rem] h-10 rounded-md text-white flex items-center justify-center gap-2"
      >
        <div class="flex items-center justify-center h-4 w-4">
          <img src="/operators.png" alt="copy logo" />
        </div>
        Testlər
      </button>
    </div>

    <div class="my-6">
      <span class="text-lg text-[#253858]"
        >Müştərini və layihəni başa düşmək üçün dizayner _______mərhələsini
        başlamalıdır
      </span>
    </div>

    <div class="w-full flex flex-col">
      <div
        v-for="user in userListData"
        :key="user._id"
        class="w-full h-14 hover:bg-[#2C7EF9] cursor-pointer flex items-center p-6 group mb-5 space-x-2 rounded-md border-2 border-gray-300"
      >
        <span class="text-gray-400 group-hover:text-white self-center">
          {{ user.name }}</span
        >
      </div>
    </div>

    <div class="w-full flex items-center justify-between">
      <button
        class="flex items-center justify-center gap-2 bg-gray-50 h-10 w-fit px-4 rounded-md border-2 border-gray-100 text-sm text-gray-600"
      >
        <div class="w-2 h-2 flex items-center justify-center">
          <img src="/left.png" alt="left" />
        </div>
        Əvvəlki sual
      </button>

      <button
        class="flex items-center justify-center gap-2 bg-[#19CC95] h-10 w-fit px-4 rounded-md border-2 border-gray-100 text-sm text-white"
      >
        Növbəti sual
        <div class="w-2 h-2 flex items-center justify-center">
          <img src="/right.png" alt="right" />
        </div>
      </button>
    </div>
  </div>
</template>
