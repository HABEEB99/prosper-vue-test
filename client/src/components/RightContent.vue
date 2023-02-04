<script setup>
import { ref, onMounted } from "vue";
import { UserCard } from "./index";
import client from "../utils/client";
import { userDataQuery } from "../utils/queries";
const userData = ref([]);

const fetchUserData = async () => {
  const data = await client.fetch(userDataQuery);

  userData.value = data;

  console.log(userData.value);
};

onMounted(() => {
  fetchUserData();
});
</script>

<template>
  <div class="w-full md:w-[50%]">
    <UserCard v-for="user in userData" :key="user._id" :user="user" />
  </div>
</template>
