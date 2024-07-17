<template>
  <nav class="hstack">
    <router-link to="/">
      <img src="@/assets/photos/pncf_logo.png" alt="PNCF Logo">
    </router-link>

    <div class="vstack" id="title_text">
      <h1 class="orange">Peaches and Cream Foundation</h1>
      <h3>Help Us End Child Poverty <span class="green">"In Loving Memory of Seth A. Joyal"</span></h3>
    </div>

    <span class="spacer"></span>

    <div class="hstack" id="router-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/board">Board</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  text-align: center;
}

nav {
  background-color: var(--background-secondary);
  /*
  background-image: url("@/assets/photos/art_supplies.jpeg");
  background-size: cover;
  background-position: center;
  background-position-y: -6rem;
  background-repeat: no-repeat;*/
  padding: 1rem;
  height: 10rem;
}

nav img {
  height: 8rem;
}

#title_text {
  gap: 0;
  align-items: flex-start;
}

#router-links {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  gap: 1rem;
}

#router-links > a {
  color: black;
  background-color: var(--theme-secondary);
  padding: 3px 10px;
  border-radius: 10px;
}

#router-links a.router-link-exact-active {
  background-color: var(--theme);
}

</style>
<script setup lang="ts">
</script>