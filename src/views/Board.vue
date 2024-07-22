<template>
  <main>
    <h1>Message Board</h1>

    <message
        v-for="(message, index) in dummyMessages"
        :key="index"
        :date="dummyMessages[index].date"
        :message="dummyMessages[index].message"
        :highlighted="dummyMessages[index].highlighted"
        :upvotes="dummyMessages[index].upvotes"
    ></message>
  </main>
</template>

<style scoped>

</style>

<script setup>
  import Message from "@/components/Message.vue";

  const dummyMessages = {
    mOne: {
      date: new Date('2024-07-20T10:15:45'),
      message: "This is not going to be a general purpose embedded language. It is way too heavy. For an embedded system, ESP32 is pretty high end as far as performance goes. Even in the video they show expected use case - IoT stuff that connects to Apple cloud. And for this it might be fine if it allows quick start.",
      highlighted: true,
      upvotes: 10
    },
    mTwo: {
      date: new Date('2024-07-14T16:45:30'),
      message: "Interesting announcement! Personally, I'd rather see big companies invest in more open source and existing C/C++ alternatives like Rust or Zig so that we don't get too much fragmentation. But I'll take investment in any language over none! I wonder how low level it will be. I've noticed in the past that \"embedded\" for large tech companies can mean a RaspberryPi (I'm thinking of AWS Greengrass).",
      highlighted: true,
    },
    mThree: {
      date: new Date('2021-05-20T23:10:05'),
      message: "They demo it on ESP32. It is still not embedded enough. They support a decent subset of the language, which automatically requires heap allocations. They disabled some introspection and 'any ' type support, so at least RTTI is not required.\n" +
          "\n" +
          "But you still will need an MCU with enough SRAM to support meaningful heap.",
      upvotes: 10
    },
    mFour: {
      date: new Date('2020-01-10T05:25:30'),
      message: "So we can add a handful more syntaxes, increase tool chain complexity, and tie ourselves to a company famous for its walled gardens and closed platforms? Sign me up.",
    },
    mFive: {
      date: new Date('2019-08-25T16:55:45'),
      message: "It’s actually been available for a while now.\n" +
          "\n" +
          "https://www.swift.org/blog/embedded-swift-examples/\n" +
          "\n" +
          "Important stuff to remember. This is not the same swift as you know it. It looks the same, but it’s way more limited in what you can do. You can’t just load libraries like Alamofire and use it. But, let’s say string manipulation is mostly the same. Most of the code produced for embedded swift - is compileable on mac, but won’t work the other way around"
    }
  }
</script>