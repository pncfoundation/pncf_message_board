<template>
  <main>
    <p>This message board strives to create an environment where anyone can communicate personal experiences and receive the help that they need.
      We are dedicated to giving you a platform where you can share their personal stories and find support.
      Please know that this can by no means substitute professional help or advice.
    </p>

    <section id="faq">
      <h1 class="section_header cFont">Frequently Asked Questions</h1>

      <ul>
        <li>
          <h2>What is the message board?</h2>

          It is a place where students can anonymously submit their personal stories and by publishing these submissions,
          allows individuals to relate to one another and empower each other. It also strives to create an environment where
          talking about one’s struggles and finding help is normalized. Please know that this by no means can substitute professional help for anyone who needs it.
        </li>

        <li>
          <h2>What was the motivation for starting this message board?</h2>

          It was started because we wanted to create a platform where people can share their personal stories that are not only relatable,
          but also inspirational for each other. Through sharing, we hope that our community will be more interconnected and hence stronger.
        </li>

        <li>
          <h2>Are all submissions really anonymous? Why is this important?</h2>

          We are committed to keeping all submissions anonymous. When you submit through our website, we can only view your submission and
          we receive no information concerning your name or email address.

          <br><br>

          We want this to be a space where everyone feels comfortable with sharing their thoughts and staying anonymous is important
          in creating that safe, comfortable space for anyone to share their story.
        </li>

        <li>
          <h2>What kind of pieces are you looking for?</h2>

          We’re looking for submissions that reflect your personal experiences. Literary excellence is not our concern here.
          They can be in any form, from opinions to first-hand experiences.
        </li>

        <li>
          <h2>Does the staff edit the submissions?</h2>

          Staff will screen all submissions, but your submission will not be edited except for certain profanities which will be replaced by asterisks(*).
          This is to keep the submissions as original as possible and to preserve the authenticity of every submission. Please look at our submit page for more details.
        </li>

        <li>
          <h2>What if I have questions that are not answered here?</h2>

          Please feel free to contact us. We’d love to hear from you.
        </li>
      </ul>
    </section>



  </main>
</template>

<style scoped>
  section {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    width: 80%;
    text-align: left;
  }

  li {
    margin-bottom: 2rem;
  }

  li::marker {
    font-weight: bold;
    font-size: 1.5rem;
  }

  h2 {
    margin: 0;
    padding: 0;
  }

  .section_header {
    font-size: 2rem;
    margin: 1rem 0;
  }
</style>

<script setup>

</script>