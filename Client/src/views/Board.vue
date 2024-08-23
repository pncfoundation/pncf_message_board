<template>
  <main>
    <h1 class="green">Message Board</h1>

    <h2 class="orange">Submit a Message</h2>

    <p>Messages will be reviewed by our moderators upon submission to keep the site safe.</p>

    <div id="message_submission" v-if="!submissionsDisabled">
      <textarea id="submission_area" @input="adjustTextareaHeight" v-model="message_content"></textarea>
      <button id="submission_button" @click="submitMessage">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <path :class="message_sent ? 'green' : 'orange'" d="M 44.4375 4.15625 L 4.59375 21.28125 C 4.238281 21.433594 4.011719 21.796875 4 22.1875 C 3.988281 22.578125 4.214844 22.917969 4.5625 23.09375 L 18.5 30.0625 Z M 45.84375 5.5625 L 19.9375 31.5 L 26.90625 45.4375 C 27.078125 45.777344 27.433594 46 27.8125 46 L 27.84375 46 C 28.234375 45.988281 28.5625 45.761719 28.71875 45.40625 Z"/>
        </svg>
      </button>
    </div>
    <div class="vstack" v-else>
      <h2>Messages are disabled temporarily. Sorry for the inconvenience.</h2>
    </div>


    <h2 class="orange">Messages</h2>
    <p v-if="messagesError" class="error_message">{{ messagesError }}</p>
    <message
        v-for="message in messages"
        :key="message.id"
        :date="message.date"
        :message="message.message"
    ></message>

    <br>

    <div class="vstack">
      <button v-if="totalMessagePages !== currentMessagePage && totalMessagePages !== 0" id="loadMessages" class="cFont" @click="loadMessages(currentMessagePage+1)">Load More</button>
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

  #message_submission {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  #submission_area {
    display: block;
    text-align: left;
    width: 100%;
    overflow: hidden;
    font-size: 1.1rem;
    padding: 6px;
    background: transparent;
    border: solid 2px var(--text);
    border-radius: 6px;
    color: var(--text);
    resize: none;
  }

  #loadMessages {
    font-size: 1.5rem;
    background-color: var(--theme-secondary);
    border: solid 2px var(--theme);
  }

  #submission_button {
    width: fit-content;
    align-self: flex-end;
    border: none;
  }

  #submission_button svg {
    width: 2rem;
    height: 2rem;
  }
</style>

<script setup>
  import Message from "@/components/Message.vue";
  import {onMounted, ref} from "vue";
  import requests from "@/server";
  const messages = ref([]);
  const totalMessagePages = ref(0);
  const currentMessagePage = ref(0);
  const messagesError = ref("");
  const message_content = ref("");
  const message_sent = ref(false);
  const submissionsDisabled = ref(true);

  const loadSettings = async () => {
    try {
      await requests.getRequest("/settings/getCurrent")
        .then((response) => {
            submissionsDisabled.value = !response.messageBoardActive;
        })
    } catch (error) {
      messagesError.value = error.message;
    }
  }

  const submitMessage = async () => {
    if(message_content.value.trim().length > 0){
      try {
        const data = {
          date: new Date(),
          message: message_content.value
        }

        await requests.postRequest(data, '/submissions/create')
            .then(() => {
              message_sent.value = true;
              message_content.value = "Thank You";

              setTimeout(() => {
                message_sent.value = false;
                message_content.value = "";
              }, 2500)
            })
      } catch (error) {
        messagesError.value = error.message;
      }
    }
  }

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
            messagesError.value = "";
          })
    } catch (error) {
      messagesError.value = error.message
    }
  };

  function adjustTextareaHeight() {
    let areas = document.querySelectorAll("textarea");
    areas.forEach(area => {
      area.style.height = 'auto'; // Reset the height to auto
      area.style.height = (area.scrollHeight) + 'px';
    })
  }

  onMounted(() => {
    loadSettings();
    getMessagePages()
        .then(() => {
          loadMessages(1)
        });
  })
</script>