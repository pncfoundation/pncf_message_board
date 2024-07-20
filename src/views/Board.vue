<template>
  <main>
    <h1>Message Board</h1>

    <message></message>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
  }
</style>

<script setup>
  import Message from "@/components/Message.vue";
</script>