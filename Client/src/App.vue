<template>
  <header class="hstack">
<!--------------------------------------------------------- Logo ------------------------------------------------------>
    <router-link to="/">
      <img src="@/assets/photos/pncf_logo.png" alt="PNCF Logo">
    </router-link>

<!--------------------------------------------------------- Title ----------------------------------------------------->
    <div class="vstack" id="title_text">
      <h1 class="orange">Peaches and Cream Foundation</h1>
      <h3>Help Us End Child Poverty <span class="green">"In Loving Memory of Seth A. Joyal"</span></h3>
    </div>

    <span class="spacer"></span>

    <div class="hstack" id="header-control">
      <router-link to="/pnc/admin">Admin Panel</router-link>
    </div>
  </header>

<!----------------------------------------- Content between header and footer ----------------------------------------->
  <div id="content">
<!------------------------------------------------------- Side Nav ---------------------------------------------------->
    <nav id="router-links">

      <router-link class="nav_router" to="/">
        <svg class="nav_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="500px" height="500px">
          <path d="M25,3.07C12.356,3.07,2.07,12.011,2.07,23c0,6.176,3.338,12.045,8.957,15.805c-0.126,1.034-0.646,3.622-2.787,6.66c-0.199,0.283-0.225,0.653-0.066,0.961c0.159,0.308,0.476,0.502,0.822,0.504c0.02,0,0.038,0,0.059,0c5.448-0.001,9.115-3.367,10.283-4.611c1.843,0.405,3.744,0.611,5.662,0.611c12.644,0,22.93-8.94,22.93-19.93S37.644,3.07,25,3.07z M14,16h22c0.552,0,1,0.447,1,1s-0.448,1-1,1H14c-0.552,0-1-0.447-1-1S13.448,16,14,16z M10,24c-0.552,0-1-0.447-1-1s0.448-1,1-1h17c0.552,0,1,0.447,1,1s-0.448,1-1,1H10z M36,30H14c-0.552,0-1-0.447-1-1s0.448-1,1-1h22c0.552,0,1,0.447,1,1S36.552,30,36,30z M40,24h-7c-0.552,0-1-0.447-1-1s0.448-1,1-1h7c0.552,0,1,0.447,1,1S40.552,24,40,24z"/>
        </svg>
        Message Board
      </router-link>

      <router-link class="nav_router" to="/about">
        <svg class="nav_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="480px" height="480px">
          <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z"/>
        </svg>
        About
      </router-link>

      <hr hidden>

<!--      AREA FOR PNCF PROMOS-->
      <div id="promos" hidden>

      </div>

      <hr>

      <div id="welcome">
        <h3 class="centered orange cFont">Welcome</h3>

        <p>
          This is an anonymous message board for anyone to use.
          Visit the about page if you would like to learn about this site or the FAQ among other useful information.
        </p>
      </div>

      <div id="board_guidelines">
        <h3 class="centered orange cFont">Board Guidelines</h3>

        <ul>
          <li>
            We are committed to maintaining everyone’s anonymity. Do not include identifiable characteristics (i.e. names); we will not be able to publish such submissions.
          </li>

          <li>
            Make sure any person(s) you mention in your submission cannot be easily identified.
          </li>

          <li>
            We are committed to preserve the authenticity of your submissions and will not make any edits except to certain profanities, which will be asterisked out (*).
          </li>

          <li>
            Please do not write anything that actively advocates harming oneself/others.
          </li>

          <li>
            There is no limit to the length of the submission. Feel free to contact us if you have any questions.
          </li>
        </ul>
      </div>
    </nav>

    <router-view/>
  </div>

  <footer>
    <p>Copyright © 2024. Peaches and Cream Foundation</p>

    <span class="spacer"></span>

    <p>This website was created by web development intern <a class="orange" href="https://sanchezalvarez.dev/" target="_blank">Sergio</a>.</p>
  </footer>
</template>

<style>
/* // If you want to style the main container. I do not recommend this
  #app {

  }
*/
/*------------------------------------------------------ HEADER ------------------------------------------------------*/
#title_text {
  gap: 0;
  align-items: flex-start;
}

#title_text h1 {
  font-size: 2rem;
}

/*------------------------------------------------------ Side Nav ------------------------------------------------------*/

.nav_svg {
  height: 3rem;
  aspect-ratio: 1;
  width: 3rem;
  border-radius: unset;
}

.router-link-exact-active .nav_svg path {
  fill: var(--theme); /* Active color */
}

#header-control > a {
  font-size: 1.25rem;
}

#header-control a.router-link-exact-active {
  color: var(--theme);
}

#header-control a.router-link-exact-active::before {
  content: "• ";
  font-weight: bold;
  color: var(--theme-secondary);
}

.nav_router {
  padding: 0 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
}

#promos {
  width: 100%;
  min-height: 15rem;
  flex-grow: 1;
  background: navy;
}

#welcome p {
  font-size: 1rem;
}

#board_guidelines {
  padding: 0 1rem;
}

#board_guidelines p, #board_guidelines ul, #board_guidelines li {
  font-size: 1rem;
  text-align: left;
}

/*------------------------------------------------------ Content ------------------------------------------------------*/

#content {
  display: flex;
  flex-direction: row;
}

/*------------------------------------------------------ New Message ------------------------------------------------------*/
</style>

<script setup>
</script>