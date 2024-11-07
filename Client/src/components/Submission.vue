<template>
  <div class="message">
    <div class="hstack message_head">
      <p class="green">{{ timeAgo(date) }}</p>
<!--      <p v-if="upvotes">•</p>-->
<!--      <p v-if="upvotes" class="orange">{{ upvotes }} upvotes</p>-->
    </div>

    <textarea class="message_content" id="area" @input="adjustTextareaHeight" v-model="messageRef"></textarea>

    <div class="hstack message_ui">
      <svg class="message_svg" id="reject" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" @click="reject">
        <path style="fill:#F44336;" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/>
        <path style="fill:#FFFFFF;" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"/>
        <path style="fill:#FFFFFF;" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"/>
      </svg>
<!--
This commented area are the buttons for the upvote and highlight features.
Feel free to implement these whenever.

      <svg class="message_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path d="M25,2C12.318,2,2,12.318,2,25c0,12.683,10.318,23,23,23c12.683,0,23-10.317,23-23C48,12.318,37.683,2,25,2z M35.707,28.707C35.512,28.902,35.256,29,35,29s-0.512-0.098-0.707-0.293L25,19.414l-9.293,9.293c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414l10-10c0.391-0.391,1.023-0.391,1.414,0l10,10C36.098,27.684,36.098,28.316,35.707,28.707z"/>
      </svg>

      <p>Upvote</p>

      <br>

      <p>
        <svg class="message_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <path d="M4.53,41.191l-4.237,4.236c-0.25,0.249-0.349,0.611-0.262,0.953s0.347,0.612,0.685,0.713l6.294,1.865C7.104,48.986,7.199,49,7.294,49c0.261,0,0.517-0.103,0.707-0.293l2.022-2.022L4.53,41.191z"/>
          <path d="M49.307,8.369l-6.459-6.458c-0.85-0.853-2.353-0.914-3.303-0.107L11.422,26.235l13.558,13.558l24.441-28.131C50.237,10.7,50.188,9.254,49.307,8.369z"/>
          <path d="M9.96,27.602l-3.374,3.373c-1.087,1.089-0.67,2.395-0.365,3.348l0.176,0.569c0.428,1.404,0.903,2.974-0.502,4.837l5.604,5.604c0.809-0.563,1.704-0.839,2.712-0.839c0.841,0,1.59,0.196,2.086,0.327l0.278,0.071c0.178,0.043,0.353,0.095,0.524,0.146c0.469,0.138,0.953,0.28,1.468,0.28c0.652,0,1.215-0.232,1.672-0.69l3.373-3.373L9.96,27.602z"/>
        </svg>

        Highlight
      </p>
-->
      <span class="spacer"></span>

      <svg class="message_svg" id="accept" fill="#40C057" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" @click="accept">
        <path d="M40.227,12C51.145,12,52,12.854,52,23.773v16.453C52,51.145,51.145,52,40.227,52H23.773C12.855,52,12,51.145,12,40.227	V23.773C12,12.854,12.855,12,23.773,12H40.227z M42.679,23.486c0.601-0.927,0.336-2.166-0.591-2.766	c-0.93-0.6-2.167-0.336-2.767,0.591l-9.709,14.986l-5.11-5.809c-0.729-0.829-1.994-0.911-2.823-0.18	c-0.829,0.729-0.91,1.993-0.181,2.823l6.855,7.791c0.382,0.433,0.93,0.679,1.502,0.679c0.049,0,0.098-0.002,0.146-0.005	c0.625-0.046,1.191-0.382,1.532-0.907L42.679,23.486z"/>
      </svg>
    </div>

<!--    <span v-if="highlighted" class="message_highlight"></span>-->
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  reject: {
    type: Function,
    required: true
  },
  accept: {
    type: Function,
    required: true
  },
  // highlighted: {
  //   type: Boolean,
  //   default: false
  // },
  // upvotes: {
  //   type: Number,
  //   default: 0
  // }
})

const messageRef = ref("");

// Returns how long ago the post was made. Ex: 3 minutes ago
const timeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now - date;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30); // approximated
  const years = Math.floor(days / 365); // approximated

  if (years > 0) {
    return years === 1 ? '1 year ago' : `${years} years ago`;
  } else if (months > 0) {
    return months === 1 ? '1 month ago' : `${months} months ago`;
  } else if (weeks > 0) {
    return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
  } else if (days > 0) {
    return days === 1 ? '1 day ago' : `${days} days ago`;
  } else if (hours > 0) {
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  } else if (minutes > 0) {
    return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
  } else {
    return seconds === 1 ? '1 second ago' : `${seconds} seconds ago`;
  }
};

// Adjust height of the text areas to fit the text inside
function adjustTextareaHeight() {
  let areas = document.querySelectorAll("textarea");
  areas.forEach(area => {
    area.style.height = 'auto'; // Reset the height to auto
    area.style.height = (area.scrollHeight) + 'px';
  })
}

const reject = async () => {
  await props.reject(props.id);
}

const accept = async () => {
  const date = new Date(props.date);
  await props.accept(props.id, date, messageRef.value);
}

// This is the function that is called immediately after the page loads.
onMounted(() => {
  messageRef.value = props.message;

  setTimeout(() => {
    adjustTextareaHeight();
  }, 100);
})
</script>

<style scoped>
.message {
  min-width: 900px;
  max-width: 80dvw;
  margin: 1rem 0;
  padding: 6px 8px;
  background: var(--background-third);
  border-radius: 10px;
}

.message_head {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5px;
}

.message_head p {
  font-weight: bold;
}

.message_content {
  display: block;
  text-align: left;
  width: 100%;
  overflow: hidden;
  font-size: 1.1rem;
  padding: 6px;
  background: transparent;
  border: none;
  color: var(--text);
  resize: none;
}

/* Used for highlight function incase PNCF wants to add the ability to highlight */
/*noinspection CssUnusedSymbol*/
.message_highlight {
  width: 6px;
  height: 100%;
  background: var(--theme);
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 10px 10px 0;
}

.message_ui {
  padding-top: 6px;
}

.message_ui p {
  font-weight: bold;
}

.message_svg {
  width: 1.5rem;
  aspect-ratio: 1;
  cursor: pointer;
}

.message_svg path {
  fill: var(--theme-secondary);
}

#accept, #reject {
  width: 2rem;
}

#accept path {
  fill: var(--theme);
}
</style>