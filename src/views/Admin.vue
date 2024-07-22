<template>
  <main>
    <h1 class="orange">Admin Board</h1>

    <p class="centered">
      This message board enable the Peaches and Cream Foundation to control many functions and content within the message board.
      Admins are able to accept/reject message submissions, censor messages with *, as well as add/remove and edit the promotion area and its promotions.

      <br><br>

      In order to keep on eye on what happens on the website with admin privileges, any superuser (Mrs. Butcher) will in addition, see a log. This log
      will track what changes have been made and by which account. If there has been a mistake, then superusers can revert the change and fix it. If the
      admin privilege has been abused, superusers can strip the account of those privileges.
    </p>

    <br>

    <section>
      <h1 class="orange">Promotion Area</h1>

      <p class="centered">
        The promotion area is located on the side nav. This section can control what kind of grid layout the side nav will have and what to display in that area.
      </p>

      <div id="promotion_controls">
        <h2 class="green">Choose Grid Layout</h2>

        <div class="hstack" id="promotion_grid_choices">

          <input type="radio" class="grid_radios" id="grid_one" name="grid_choices_radio">
          <label id="grid_label_one" for="grid_one">
            <span class="item1"></span>
          </label>

          <input type="radio" class="grid_radios" id="grid_two" name="grid_choices_radio">
          <label id="grid_label_two" for="grid_two">
            <span class="item1"></span>
            <span class="item2"></span>
          </label>

          <input type="radio" class="grid_radios" id="grid_three" name="grid_choices_radio">
          <label id="grid_label_three" for="grid_three">
            <span class="item1"></span>
            <span class="item2"></span>
            <span class="item3"></span>
          </label>

          <input type="radio" class="grid_radios" id="grid_four" name="grid_choices_radio">
          <label id="grid_label_four" for="grid_four">
            <span class="item1"></span>
            <span class="item2"></span>
            <span class="item3"></span>
          </label>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/*--------------------------------------------------------------- STYLING GRID CHOICES ---------------------------------------------------------------*/
#promotion_grid_choices {
  width: 100%;
  justify-content: space-evenly;
}

#promotion_grid_choices label {
  width: 20%;
  aspect-ratio: 1;
  display: grid;
  border-radius: 8px;
}

#promotion_grid_choices label span {
  border: solid 2px white;
  border-radius: 5px;
  background-color: var(--background-third);
}

#promotion_grid_choices input {
  display: none;
}

/*------------------------------------ GRID ONE ------------------------------------*/
#grid_label_one {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  gap: 2px;
}

/*------------------------------------ GRID TWO ------------------------------------*/
#grid_label_two {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
}

#grid_label_two .item1 {
  grid-column: span 2;
}

#grid_label_two .item2 {
  grid-column: span 2;
}

/*------------------------------------ GRID THREE ------------------------------------*/
#grid_label_three {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
}

#grid_label_three .item1 {
  grid-column: span 2;
}

/*------------------------------------ GRID FOUR ------------------------------------*/
#grid_label_four {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
}

#grid_label_four .item3 {
  grid-column: span 2;
}

/*------------------------------------ ACTIVE RADIO ------------------------------------*/
.grid_radios:checked + label .item1 {
  background: var(--theme) !important;
}

.grid_radios:checked + label .item2 {
  background: var(--theme-secondary) !important;
}
.grid_radios:checked + label .item3 {
  background: var(--theme) !important;
}
</style>

<script setup>

</script>