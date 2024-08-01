<template>
  <main>
    <h1>Message Board</h1>

    <p v-if="messagesError" class="error_message">{{ messagesError }}</p>
    <message
        v-for="message in messages"
        :key="message.id"
        :date="message.date"
        :message="message.message"
    ></message>

    <br>

    <div class="vstack">
      <button v-if="totalMessagePages !== currentMessagePage" id="loadMessages" class="cFont" @click="loadMessages(currentMessagePage+1)">Load More</button>
    </div>
  </main>
</template>

<style scoped>
  .error_message {
    font-size: 1.5rem;
    text-align: center;
    color: var(--theme-secondary) !important;
    background-color: var(--background-secondary);
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }

  #loadMessages {
    font-size: 1.5rem;
    background-color: var(--theme-secondary);
    border: solid 2px var(--theme);
    border-radius: 6px;
    padding: 0.3rem 1rem;
  }
</style>

<script setup>
  import Message from "@/components/Message.vue";
  import {onMounted, ref} from "vue";
  import requests from "@/server";
  const messages = ref([]);
  const totalMessagePages = ref(1);
  const currentMessagePage = ref(0);
  const messagesError = ref("");

  const loadMessages = async (page) => {
    try {
      const data = {
        group: page
      };

      await requests.postRequest(data, "/messages/getByGroup")
          .then((response) => {
            messages.value = [...messages.value, ...response.messages];
          })

      currentMessagePage.value = page;
    } catch (error) {
      messagesError.value = error.message

      setTimeout(() => {
        messagesError.value = "";
      }, 5000);
    }
  };

  const getMessagePages = async () => {
    try {
      await requests.getRequest("/messages/count")
          .then((response) => {
            const pages = Math.floor(response.count / 20);
            totalMessagePages.value = response.count % 20 === 0 ? pages : pages + 1;
            console.log(
                `
              response.count % 20: ${response.count % 20} \n
              pages: ${pages} \n
              log_pages.value: ${totalMessagePages.value}
              `)
            messagesError.value = "";
          })
    } catch (error) {
      messagesError.value = error.message
    }
  };

  onMounted(() => {
    getMessagePages()
        .then(() => {
          loadMessages(1)
        });
  })
</script>