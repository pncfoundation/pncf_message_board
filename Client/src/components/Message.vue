<template>
<!-- The commented lines are for upvotes and highlighted messages features. Feel free to
 implement them whenever. -->
  <div class="message">
    <div class="hstack message_head">
      <p class="green">{{ timeAgo(date) }}</p>
<!--      <p v-if="upvotes">•</p>-->
<!--      <p v-if="upvotes" class="orange">{{ upvotes }} upvotes</p>-->
    </div>

    <p class="message_content">{{ message }}</p>

<!--    <span v-if="highlighted" class="message_highlight"></span>-->
  </div>
</template>

<script setup>
  const props = defineProps({
    date: {
      type: String,
      required: true
    },
    message: {
      type: String,
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

  // Returns time ex: 11:52am
  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutesStr}${ampm}`;
  };

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
</script>

<style scoped>
  .message {
    width: clamp(500px, 60%, 70dvw);
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
    font-size: 1.1rem;
    white-space: pre-line;
  }

  /*
    This function is to be used if PNCF want to add a highlight function to the web app.
    This one is for a span that goes on the right of the message with position: absolute
   */
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
</style>