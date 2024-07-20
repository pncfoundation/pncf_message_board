<template>
  <div class="message">
    <div class="hstack">
      <p>{{ timeAgo(date) }}  |  {{ upvotes }} upvotes</p>
    </div>

    <p>{{ message }}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    date: {
      type: Date,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    highlighted: {
      type: Boolean,
      default: false
    },
    upvotes: {
      type: Number,
      default: 0
    }
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

  const timeAgo = (date) => {
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
    width: clamp(500px, 50dvw, 70dvw);
    margin: 2rem 0;
  }
</style>