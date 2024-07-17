<template>
  <header class="hstack">
    <router-link to="/">
      <img src="@/assets/photos/pncf_logo.png" alt="PNCF Logo">
    </router-link>

    <div class="vstack" id="title_text">
      <h1 class="orange">Peaches and Cream Foundation</h1>
      <h3>Help Us End Child Poverty <span class="green">"In Loving Memory of Seth A. Joyal"</span></h3>
    </div>

    <span class="spacer"></span>
  </header>

  <div id="content">
    <nav id="router-links">
      <router-link to="/">Board</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <router-view/>
  </div>

  <footer>
    <h1>Foot</h1>
  </footer>
</template>

<style>
/*noinspection ALL*/
#app {
  text-align: center;
}

/*------------------------------------------------------ HEADER ------------------------------------------------------*/
#title_text {
  gap: 0;
  align-items: flex-start;
}

#title_text h1 {
  font-size: 2rem;
}

/*------------------------------------------------------- Footer -------------------------------------------------------*/
footer {
  width: 100dvw;
  background-color: var(--background-secondary);
  /*background-image: url("@/assets/photos/art_supplies.jpeg");
  background-size: cover;
  background-position: center;
  background-position-y: -8rem;
  background-repeat: no-repeat;*/
  padding: 1rem;
  height: 7rem;
}

</style>

<script setup lang="ts">
</script>