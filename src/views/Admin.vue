<template>
  <main>
<!-------------------------------------------------------------------- ABOUT -------------------------------------------------------------------->
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

<!-------------------------------------------------------------------- PROMOTION AREA -------------------------------------------------------------------->

    <section>
      <h1 class="orange">Promotion Area</h1>

      <p class="centered">
        The promotion area is located on the side nav. This section can control what kind of grid layout the side nav will have and what to display in that area.
        The promotion area can only display images. Ensure that when any interns develop a promotion image or poster, the image is under 10MB (megabytes).
      </p>

<!-------------------------------------------------------------------- CHOOSING GRID LAYOUT -------------------------------------------------------------------->
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

<!-------------------------------------------------------------------- CHOOSING GRID MEDIA -------------------------------------------------------------------->
      <h2 class="green">Choose Media to Display</h2>

      <div class="hstack" id="media_preview_controls">
        <p id="select_grid_warning" hidden>Please select a grid layout.</p>

        <div id="media_grid_preview">
          <span class="item1"></span>
          <span class="item2"></span>
          <span class="item3"></span>
        </div>

        <div class="vstack" id="image_inputs">
          <input type="file" accept="image/*" id="image_input_one">
          <input type="file" accept="image/*" id="image_input_two">
          <input type="file" accept="image/*" id="image_input_three">
        </div>
      </div>
    </section>
  </main>
</template>








<style scoped>
h2 {
  margin: 2rem 0 1rem 0;
}

/*--------------------------------------------------------------- STYLING GRID CHOICES ---------------------------------------------------------------*/
#promotion_grid_choices {
  width: 100%;
  justify-content: space-evenly;
}

#promotion_grid_choices label {
  width: 20%;
  aspect-ratio: 1;
  display: grid;
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

/*--------------------------------------------------------------- STYLING MEDIA PREVIEW ---------------------------------------------------------------*/
#media_preview_controls {
  justify-content: space-evenly;
}

#media_grid_preview {
  display: grid;
  gap: 2px;
  width: 35%;
  aspect-ratio: 1;
  border-radius: 12px;
}

#media_grid_preview span {
  border: solid 2px white;
  border-radius: 5px;
  background-color: var(--background-third);
}


/*--------------------------- DETERMINING WHICH LAYOUT TO DISPLAY BASED ON WHICH WAS SELECTED & WHICH FILE INPUTS TO DISPLAY ---------------------------*/

/* FIRST GRID OPTION */
#promotion_controls:has(#promotion_grid_choices):has(input#grid_one:checked) ~ #media_preview_controls #image_inputs input:nth-child(2) {
  display: none;
}
#promotion_controls:has(#promotion_grid_choices):has(input#grid_one:checked) ~ #media_preview_controls #image_inputs input:nth-child(3) {
  display: none;
}
#promotion_controls:has(#promotion_grid_choices):has(input#grid_one:checked) ~ #media_preview_controls #media_grid_preview span:nth-child(2) {
  display: none;
}
#promotion_controls:has(#promotion_grid_choices):has(input#grid_one:checked) ~ #media_preview_controls #media_grid_preview span:nth-child(3) {
  display: none;
}

/* SECOND GRID OPTION */
#promotion_controls:has(#promotion_grid_choices):has(input#grid_two:checked) ~ #media_preview_controls #image_inputs input:nth-child(2) {
  display: none;
}
#promotion_controls:has(#promotion_grid_choices):has(input#grid_two:checked) ~ #media_preview_controls #media_grid_preview span:nth-child(3) {
  display: none;
}
/* THIRD GRID OPTION */
#promotion_controls:has(#promotion_grid_choices):has(input#grid_three:checked) ~ #media_preview_controls #media_grid_preview {
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}
#promotion_controls:has(#promotion_grid_choices):has(input#grid_three:checked) ~ #media_preview_controls #media_grid_preview span:nth-child(1) {
  grid-column: span 2;
}

/* FOURTH GRID OPTION */
#promotion_controls:has(#promotion_grid_choices):has(input#grid_four:checked) ~ #media_preview_controls #media_grid_preview {
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}
#promotion_controls:has(#promotion_grid_choices):has(input#grid_four:checked) ~ #media_preview_controls #media_grid_preview span:nth-child(3) {
  grid-column: span 2;
}

</style>

<script setup>
//  Functions to preview images when placed in the file input
  const previewImageOne = () => {
    const imageInput = document.getElementById("image_input_one");
    if(imageInput.length > 0) {

    }
  }
</script>