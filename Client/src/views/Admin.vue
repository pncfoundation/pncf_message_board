<template>
  <main v-if="!isAdmin" id="admin_login" class="vstack">
    <h1>Admin Console Log In</h1>

    <div class="vstack" id="login_form">
      <div class="hstack">
        <input type="text" id="admin_username">
        <label for="admin_username">Username:</label>
      </div>

      <div class="hstack">
        <input type="password" id="admin_password">
        <label for="admin_password">Password:</label>
      </div>

      <button id="login_btn" @click="admin_authentication">Login</button>
    </div>

    <p class="error_message" v-if="login_error">{{ login_error }}</p>
  </main>

  <main v-else>
<!-------------------------------------------------------------------- ABOUT -------------------------------------------------------------------->
    <h1 class="orange" id="admin_greeting">
      Hello
      <span class="green cFont">{{ admin_fetched_name }}</span>
    </h1>

    <h1>Admin Board</h1>

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

    <section hidden>
      <div class="hstack">
        <h1>Promotion Area</h1>
        <button class="sectionToggling" @click="displayPromoArea = !displayPromoArea">
          <svg v-if="displayPromoArea" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M39,4H11c-3.86,0-7,3.14-7,7v28c0,3.86,3.14,7,7,7h28c3.86,0,7-3.14,7-7V11C46,7.14,42.86,4,39,4z M39.7,19.71L25,33.31l-14.7-13.6c-0.4-0.39-0.4-1.02-0.01-1.41c0.39-0.4,1.02-0.4,1.41-0.01L25,30.49l13.3-12.2c0.39-0.39,1.02-0.39,1.41,0.01C40.1,18.69,40.1,19.32,39.7,19.71z"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M4,11v28c0,3.86,3.14,7,7,7h28c3.86,0,7-3.14,7-7V11c0-3.86-3.14-7-7-7H11C7.14,4,4,7.14,4,11z M19.71,10.3L33.31,25l-13.6,14.7c-0.39,0.4-1.02,0.4-1.41,0.01c-0.4-0.39-0.4-1.02-0.01-1.41L30.49,25l-12.2-13.3c-0.39-0.39-0.39-1.02,0.01-1.41C18.69,9.9,19.32,9.9,19.71,10.3z"/>
          </svg>
        </button>
      </div>

      <p class="centered">
        The promotion area is located on the side nav. This section can control what kind of grid layout the side nav will have and what to display in that area.
        The promotion area can only display images. Ensure that when any interns develop a promotion image or poster, the image is under 10MB (megabytes).
      </p>

<!-------------------------------------------------------------------- CHOOSING GRID LAYOUT -------------------------------------------------------------------->
      <div v-if="displayPromoArea">
        <div id="promotion_controls">
          <h2>Choose Grid Layout</h2>

          <div class="hstack" id="promotion_grid_choices">

            <input type="radio" class="grid_radios" id="grid_one" name="grid_choices_radio" checked>
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
        <h2>Choose Media to Display</h2>

        <div class="hstack" id="media_preview_controls">
          <p id="select_grid_warning" hidden>Please select a grid layout.</p>

          <div id="media_grid_preview">
            <img src="@/assets/photos/gray.png" alt="Preview One" id="img_preview_one">
            <img src="@/assets/photos/gray.png" alt="Preview One" id="img_preview_two">
            <img src="@/assets/photos/gray.png" alt="Preview One" id="img_preview_three">
          </div>

          <div class="vstack" id="image_inputs">
            <h3 id="image_option">
              <input type="radio" name="image_option_radios" id="selectImages" checked>
              <label for="selectImages">Select Images</label>
              or
              <input type="radio" name="image_option_radios" id="reUseImages">
              <label for="reUseImages">Re-Use Images</label>
            </h3>

            <span class="spacer"></span>

            <input type="file" accept="image/*" id="image_input_one" @change="previewImageOne">
            <label for="image_input_one">
              Select Image One
            </label>

            <input type="file" accept="image/*" id="image_input_two" @change="previewImageTwo">
            <label for="image_input_one">
              Select Image Two
            </label>

            <input type="file" accept="image/*" id="image_input_three" @change="previewImageThree">
            <label for="image_input_one">
              Select Image Three
            </label>
          </div>
        </div>

      </div>
    </section>

    <br>
<!-------------------------------------------------------------------- Website Settings -------------------------------------------------------------------->
    <section>
      <div class="hstack">
        <h1>Website Settings</h1>
        <button class="sectionToggling" @click="displaySettings = !displaySettings; loadSettings();">
          <svg v-if="displaySettings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M39,4H11c-3.86,0-7,3.14-7,7v28c0,3.86,3.14,7,7,7h28c3.86,0,7-3.14,7-7V11C46,7.14,42.86,4,39,4z M39.7,19.71L25,33.31l-14.7-13.6c-0.4-0.39-0.4-1.02-0.01-1.41c0.39-0.4,1.02-0.4,1.41-0.01L25,30.49l13.3-12.2c0.39-0.39,1.02-0.39,1.41,0.01C40.1,18.69,40.1,19.32,39.7,19.71z"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M4,11v28c0,3.86,3.14,7,7,7h28c3.86,0,7-3.14,7-7V11c0-3.86-3.14-7-7-7H11C7.14,4,4,7.14,4,11z M19.71,10.3L33.31,25l-13.6,14.7c-0.39,0.4-1.02,0.4-1.41,0.01c-0.4-0.39-0.4-1.02-0.01-1.41L30.49,25l-12.2-13.3c-0.39-0.39-0.39-1.02,0.01-1.41C18.69,9.9,19.32,9.9,19.71,10.3z"/>
          </svg>
        </button>
      </div>

      <p class="centered">
        Control <span class="orange">settings</span> for the website. These settings are <span class="orange">global</span> and thus,
        every user will be affected by these settings.
      </p>

      <p v-if="settingsSuccess" class="success_message">{{ settingsSuccess }}</p>
      <p v-if="settingsError" class="error_message">{{ settingsError }}</p>

      <h2 v-if="displaySettings">Message Board</h2>
      <div class="vstack" id="website_settings" v-if="displaySettings">
        <div class="hstack">
          <p>Message Board Status</p>:

          <button id="message_board_activity_control" @click="toggleMessageBoard">
            <svg v-if="loadingMessageBoardStatus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M 9 7 C 4.0414839 7 0 11.041484 0 16 L 0 17 L 0.203125 17 C 0.7247386 21.467568 4.3958921 25 9 25 L 23 25 C 27.604108 25 31.275261 21.467568 31.796875 17 L 32 17 L 32 16 C 32 11.041484 27.958516 7 23 7 L 9 7 z M 16 9 C 19.877838 9 23 12.122162 23 16 C 23 19.877838 19.877838 23 16 23 C 12.122162 23 9 19.877838 9 16 C 9 12.122162 12.122162 9 16 9 z M 21.642578 9 L 23 9 C 26.877484 9 30 12.122516 30 16 C 30 19.877484 26.877484 23 23 23 L 21.642578 23 C 23.687339 21.348117 25 18.824258 25 16 C 25 13.175742 23.687339 10.651883 21.642578 9 z"/>
            </svg>
            <svg v-else-if="messageBoardStatus" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32">
              <path d="M 9 7 C 4.039063 7 0 11.035156 0 16 C 0 20.964844 4.039063 25 9 25 L 23 25 C 27.957031 25 32 20.957031 32 16 C 32 11.042969 27.957031 7 23 7 Z M 23 9 C 26.878906 9 30 12.121094 30 16 C 30 19.878906 26.878906 23 23 23 C 19.121094 23 16 19.878906 16 16 C 16 12.121094 19.121094 9 23 9 Z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32">
              <path d="M 9 7 C 8.378906 7 7.773438 7.066406 7.1875 7.1875 C 6.894531 7.246094 6.59375 7.320313 6.3125 7.40625 C 3.792969 8.203125 1.742188 10.085938 0.71875 12.5 C 0.605469 12.769531 0.492188 13.03125 0.40625 13.3125 C 0.136719 14.164063 0 15.058594 0 16 C 0 16.929688 0.144531 17.8125 0.40625 18.65625 C 0.410156 18.664063 0.402344 18.679688 0.40625 18.6875 C 1.203125 21.207031 3.085938 23.257813 5.5 24.28125 C 5.769531 24.394531 6.03125 24.507813 6.3125 24.59375 C 7.164063 24.863281 8.058594 25 9 25 L 23 25 C 27.957031 25 32 20.957031 32 16 C 32 11.042969 27.957031 7 23 7 Z M 9 9 C 12.878906 9 16 12.121094 16 16 C 16 19.878906 12.878906 23 9 23 C 5.121094 23 2 19.878906 2 16 C 2 15.757813 2.007813 15.515625 2.03125 15.28125 C 2.386719 11.742188 5.363281 9 9 9 Z M 14.625 9 L 23 9 C 26.878906 9 30 12.121094 30 16 C 30 19.878906 26.878906 23 23 23 L 14.625 23 C 16.675781 21.347656 18 18.828125 18 16 C 18 13.171875 16.675781 10.652344 14.625 9 Z"/>
            </svg>
          </button>
        </div>

      </div>
    </section>

    <br>
<!-------------------------------------------------------------------- MESSAGE PANEL -------------------------------------------------------------------->
    <section>
      <div class="hstack">
        <h1>Submission Control Panel</h1>
        <button class="sectionToggling" @click="displaySubmissions = !displaySubmissions; loadMessages();">
          <svg v-if="displaySubmissions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M39,4H11c-3.86,0-7,3.14-7,7v28c0,3.86,3.14,7,7,7h28c3.86,0,7-3.14,7-7V11C46,7.14,42.86,4,39,4z M39.7,19.71L25,33.31l-14.7-13.6c-0.4-0.39-0.4-1.02-0.01-1.41c0.39-0.4,1.02-0.4,1.41-0.01L25,30.49l13.3-12.2c0.39-0.39,1.02-0.39,1.41,0.01C40.1,18.69,40.1,19.32,39.7,19.71z"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M4,11v28c0,3.86,3.14,7,7,7h28c3.86,0,7-3.14,7-7V11c0-3.86-3.14-7-7-7H11C7.14,4,4,7.14,4,11z M19.71,10.3L33.31,25l-13.6,14.7c-0.39,0.4-1.02,0.4-1.41,0.01c-0.4-0.39-0.4-1.02-0.01-1.41L30.49,25l-12.2-13.3c-0.39-0.39-0.39-1.02,0.01-1.41C18.69,9.9,19.32,9.9,19.71,10.3z"/>
          </svg>
        </button>
      </div>

      <p class="centered">
        View messages users have <span class="orange">submitted</span> in this area. The section allows for the ability to <span class="orange">accept</span>, <span class="orange">reject</span>,
        and <span class="orange">modify</span> those messages. In order for
        this message board to remain as a safe space, there is a need to <span class="orange">moderate</span> how these messages will look like. If only a part of the
        message is inappropriate, then it may be <span class="orange">omitted</span> with <span class="orange">*</span>, but if it is more serious, it can be <span class="orange">rejected</span>.
        All the messages are text areas which you can edit before submitting.

        <br>

        Submissions will be added to the message board in the order they were submitted <span class="orange">regardless</span> of when they are accepted.
      </p>


      <h2 v-if="displaySubmissions">Submissions</h2>
      <div class="vstack" id="message_submissions" v-if="displaySubmissions">

        <p v-if="submissionSuccess" class="success_message">{{ submissionSuccess }}</p>
        <p v-if="submissionError" class="error_message">{{ submissionError }}</p>

        <submission
            v-for="submission in submissions"
            :key="submission.id"
            :id="submission.id"
            :date="submission.date"
            :message="submission.message"
            :reject ="rejectSubmission"
            :accept ="acceptSubmission"
        ></submission>
      </div>
    </section>

<!-------------------------------------------------------------------- ADMIN PANEL -------------------------------------------------------------------->
    <br>

    <section v-if="isSuperUser">
      <div class="hstack">
        <h1>Admin Panel</h1>
        <button class="sectionToggling" @click="displayAdminPanel = !displayAdminPanel; fetchAdmins();">
          <svg v-if="displayAdminPanel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M39,4H11c-3.86,0-7,3.14-7,7v28c0,3.86,3.14,7,7,7h28c3.86,0,7-3.14,7-7V11C46,7.14,42.86,4,39,4z M39.7,19.71L25,33.31l-14.7-13.6c-0.4-0.39-0.4-1.02-0.01-1.41c0.39-0.4,1.02-0.4,1.41-0.01L25,30.49l13.3-12.2c0.39-0.39,1.02-0.39,1.41,0.01C40.1,18.69,40.1,19.32,39.7,19.71z"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M4,11v28c0,3.86,3.14,7,7,7h28c3.86,0,7-3.14,7-7V11c0-3.86-3.14-7-7-7H11C7.14,4,4,7.14,4,11z M19.71,10.3L33.31,25l-13.6,14.7c-0.39,0.4-1.02,0.4-1.41,0.01c-0.4-0.39-0.4-1.02-0.01-1.41L30.49,25l-12.2-13.3c-0.39-0.39-0.39-1.02,0.01-1.41C18.69,9.9,19.32,9.9,19.71,10.3z"/>
          </svg>
        </button>
      </div>

      <p class="centered">
        This area is visible only to super-user admins. Manage all admins within this area. View a list of all the admins that are active.
        Create and delete admins. Control when to grant or revoke super-user privileges to admins.
      </p>

      <br>

      <div id="admins" v-if="displayAdminPanel">
        <h2>Admin Table</h2>

        <p v-if="adminListErrorMessage" class="error_message">{{ adminListErrorMessage }}</p>

        <p v-if="adminListSuccessMessage" class="success_message">{{ adminListSuccessMessage }}</p>


        <p class="centered">
          View all admins here. Click on a super user cell to grant or reject super user privileges to that admin.
          Click on a delete cell to delete that admin.
        </p>

        <br>

        <table id="admin_table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Super User</th>
              <th>Commits</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="admin in admins" :key="admin.id">
              <td>{{ admin.name }}</td>
              <td class="super_user_cell" >
                <svg v-if="admin.superUser" fill="#40C057" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" @click="toggleSuperAdmin(admin.id, admin.superUser)">
                  <path d="M40.227,12C51.145,12,52,12.854,52,23.773v16.453C52,51.145,51.145,52,40.227,52H23.773C12.855,52,12,51.145,12,40.227	V23.773C12,12.854,12.855,12,23.773,12H40.227z M42.679,23.486c0.601-0.927,0.336-2.166-0.591-2.766	c-0.93-0.6-2.167-0.336-2.767,0.591l-9.709,14.986l-5.11-5.809c-0.729-0.829-1.994-0.911-2.823-0.18	c-0.829,0.729-0.91,1.993-0.181,2.823l6.855,7.791c0.382,0.433,0.93,0.679,1.502,0.679c0.049,0,0.098-0.002,0.146-0.005	c0.625-0.046,1.191-0.382,1.532-0.907L42.679,23.486z"/>
                </svg>

                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" @click="toggleSuperAdmin(admin.id, admin.superUser)">
                  <path style="fill:#F44336;" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/>
                  <path style="fill:#FFFFFF;" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"/>
                  <path style="fill:#FFFFFF;" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"/>
                </svg>
              </td>
              <td>{{ admin.commits }}</td>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" @click="deleteAdmin(admin.id)">
                  <path style="fill:#F44336;" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/>
                  <path style="fill:#FFFFFF;" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"/>
                  <path style="fill:#FFFFFF;" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"/>
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="adminCreation" v-if="displayAdminPanel">
        <h2>Admin Creation</h2>

        <p v-if="admin_errorMessage" class="error_message">{{ admin_errorMessage }}</p>
        <p v-if="admin_success_message" class="success_message">{{ admin_success_message }}</p>

        <div class="hstack">
          <div class="vstack">
            <p>Name</p>
            <input type="text" v-model="admin_name">
          </div>

          <div class="vstack">
            <p>Username</p>
            <input type="text" v-model="admin_username">
          </div>

          <div class="vstack">
            <p>Password</p>
            <input type="text" v-model="admin_password">
          </div>

        </div>

        <br>

        <label id="superUserDiv">
          <input type="checkbox" v-model="admin_super">
          Super User
        </label>

        <div class="hstack">
          <span class="spacer"></span>
          <button id="createAdminButton" @click="createAdmin">Create Admin</button>
        </div>
      </div>
    </section>


<!-------------------------------------------------------------------- LOG PANEL -------------------------------------------------------------------->
<br>
    <section v-if="isSuperUser">
      <div class="hstack">
        <h1>Log Panel</h1>
        <button class="sectionToggling" @click="displayLogPanel = !displayLogPanel; getLogs(1); getPages();">
          <svg v-if="displayLogPanel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M39,4H11c-3.86,0-7,3.14-7,7v28c0,3.86,3.14,7,7,7h28c3.86,0,7-3.14,7-7V11C46,7.14,42.86,4,39,4z M39.7,19.71L25,33.31l-14.7-13.6c-0.4-0.39-0.4-1.02-0.01-1.41c0.39-0.4,1.02-0.4,1.41-0.01L25,30.49l13.3-12.2c0.39-0.39,1.02-0.39,1.41,0.01C40.1,18.69,40.1,19.32,39.7,19.71z"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M4,11v28c0,3.86,3.14,7,7,7h28c3.86,0,7-3.14,7-7V11c0-3.86-3.14-7-7-7H11C7.14,4,4,7.14,4,11z M19.71,10.3L33.31,25l-13.6,14.7c-0.39,0.4-1.02,0.4-1.41,0.01c-0.4-0.39-0.4-1.02-0.01-1.41L30.49,25l-12.2-13.3c-0.39-0.39-0.39-1.02,0.01-1.41C18.69,9.9,19.32,9.9,19.71,10.3z"/>
          </svg>
        </button>
      </div>

      <p class="centered">
        View what other admins have done on the site. Each move and change each admin has done will be recorded here.
      </p>

      <div v-if="displayLogPanel">
        <div class="hstack" id="log_controls">
          <button v-if="current_log_page !== 1" @click="getLogs(current_log_page - 1)"> < </button>
          <button v-if="current_log_page !== log_pages" @click="getLogs(current_log_page + 1)"> > </button>
        </div>

        <br>

        <p v-if="logErrorMessage" class="error_message">{{ logErrorMessage }}</p>

        <table id="log_table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Admin</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="log in log" :key="log.id">
              <td>{{ fixLogDate(log.date) }}</td>
              <td>{{ log.admin }}</td>
              <td>{{ log.action }}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  </main>
</template>








<style scoped>
h1 {
  color: var(--theme-secondary);
}

h2 {
  margin: 2rem 0 1rem 0;
  color: var(--theme);
}

/* Button to toggle section visibility */
.sectionToggling {
  background: transparent;
  width: 2rem;
  height: 2rem;
  padding: 0;
  border: none;
}

.sectionToggling > svg > path {
  fill: var(--theme);
}
/*--------------------------------------------------------------- Login Form ---------------------------------------------------------------*/
#login_form {
  width: clamp(20rem, 35rem, 50dvw) !important;
}

#login_form .hstack label {
  order: -1;
  font-size: 1.2rem;
  font-weight: bold;
}

#login_form .hstack input {
  height: 1.5rem;
  font-size: 1.1rem;
  padding: .5rem;
  background: transparent;
  color: var(--text);
  border: solid 2px var(--text);
  border-radius: 8px;
  min-width: 20rem;
}

#login_btn {
  padding: .4rem .8rem;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  background: var(--theme-secondary);
}
/*--------------------------------------------------------------- Greeting ---------------------------------------------------------------*/

#admin_greeting {
  align-self: flex-end;
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

#media_grid_preview img {
  object-fit: cover;
  border-radius: 5px;
  border: solid 2px white;
}



#image_option label {
  background: var(--background-third) !important;
  transition: unset !important;
}

#image_option input:checked + label {
  background: var(--theme) !important;
}

#image_inputs input {
  display: none;
}

#image_inputs label {
  background-color: var(--theme-secondary);
  padding: 5px 8px;
  border: 2px solid var(--text);
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 400ms;
}

#image_inputs label:hover {
  scale: 1.03;
}


/*--------------------------- DETERMINING WHICH LAYOUT TO DISPLAY BASED ON WHICH WAS SELECTED & WHICH FILE INPUTS TO DISPLAY ---------------------------*/

/*----------------------- FIRST GRID OPTION -----------------------*/
/*noinspection ALL*/
#promotion_controls:has(#promotion_grid_choices):has(input#grid_one:checked) ~ #media_preview_controls #image_inputs input:nth-child(2) {
  display: none;
}
/*noinspection ALL*/
#promotion_controls:has(#promotion_grid_choices):has(input#grid_one:checked) ~ #media_preview_controls #image_inputs input:nth-child(3) {
  display: none;
}
/*noinspection ALL*/
#promotion_controls:has(#promotion_grid_choices):has(input#grid_one:checked) ~ #media_preview_controls #media_grid_preview img:nth-child(1) {
  grid-column: span 2;
  grid-row: span 2;
}
/*noinspection ALL*/
#promotion_controls:has(#promotion_grid_choices):has(input#grid_one:checked) ~ #media_preview_controls #media_grid_preview img:nth-child(2) {
  display: none;
}
/*noinspection ALL*/
#promotion_controls:has(#promotion_grid_choices):has(input#grid_one:checked) ~ #media_preview_controls #media_grid_preview img:nth-child(3) {
  display: none;
}

/*---------------------- SECOND GRID OPTION ----------------------*/
/*noinspection ALL*/
#promotion_controls:has(#promotion_grid_choices):has(input#grid_two:checked) ~ #media_preview_controls #image_inputs input:nth-child(2) {
  display: none;
}
/*noinspection ALL*/
#promotion_controls:has(#promotion_grid_choices):has(input#grid_one:checked) ~ #media_preview_controls #media_grid_preview img:nth-child(1) {
  grid-column: span 2;
  grid-row: span 1;
}
/*noinspection ALL*/
#promotion_controls:has(#promotion_grid_choices):has(input#grid_one:checked) ~ #media_preview_controls #media_grid_preview img:nth-child(1) {
  grid-column: span 2;
  grid-row: span 1;
}
/*noinspection ALL*/
#promotion_controls:has(#promotion_grid_choices):has(input#grid_two:checked) ~ #media_preview_controls #media_grid_preview img:nth-child(3) {
  display: none;
}

/*------------------------- THIRD GRID OPTION -------------------------*/
/*noinspection ALL*/
#promotion_controls:has(#promotion_grid_choices):has(input#grid_three:checked) ~ #media_preview_controls #media_grid_preview {
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}
/*noinspection ALL*/
#promotion_controls:has(#promotion_grid_choices):has(input#grid_three:checked) ~ #media_preview_controls #media_grid_preview img:nth-child(1) {
  grid-column: span 2;
}

/*------------------------- FOURTH GRID OPTION -------------------------*/
/*noinspection ALL*/
#promotion_controls:has(#promotion_grid_choices):has(input#grid_four:checked) ~ #media_preview_controls #media_grid_preview {
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}
/*noinspection ALL*/
#promotion_controls:has(#promotion_grid_choices):has(input#grid_four:checked) ~ #media_preview_controls #media_grid_preview img:nth-child(3) {
  grid-column: span 2;
}
/*---------------------------------------------------------------- SETTINGS CONTROL PANEL ----------------------------------------------------------------*/
#message_board_activity_control {
  width: 2.5rem;
  height: 1.5rem;
  border: none;
  padding: 0;
  margin: 0 0 1rem;
}

/*---------------------------------------------------------------- MESSAGE CONTROL PANEL ----------------------------------------------------------------*/

#message_submissions {
  margin-top: 1rem;
}

#message_submissions > * {
  margin: 5px 0;
}


/*---------------------------------------------------------------- ADMIN CONTROL PANEL ----------------------------------------------------------------*/
#adminCreation .hstack {
  gap: 1rem;
}

#adminCreation .vstack {
  align-items: flex-start;
  background: var(--background-third);
  padding: 10px;
  border-radius: 8px;
  box-shadow: var(--background-secondary) 6px 6px 8px;
}

#adminCreation label, #adminCreation p {
  font-weight: bold;
  color: var(--theme-secondary);
}

#adminCreation input {
  height: 2rem;
  font-size: 1rem;
  background: transparent;
  border: solid 2px var(--text);
  border-radius: 4px;
  color: var(--text);
  padding: 2px 6px;
}

#adminCreation input[type="text"] {
  width: 20rem;
}

#superUserDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
}

#superUserDiv input {
  width: 1rem;
  height: 1rem;
}

#superUserDiv:has(input:checked) {
  color: var(--theme);
}

#createAdminButton {
  font-size: 1rem;
  font-weight: bold;
  background: var(--theme-secondary);
  padding: 3px 8px;
}

#admin_table tr:hover > * {
  text-decoration: underline;
}
/*---------------------------------------------------------------- ADMIN CONTROL PANEL & DOWN ----------------------------------------------------------------*/

.error_message {
  font-size: 1.5rem;
  text-align: center;
  color: red !important;
  margin-bottom: 0.5rem;
}

.success_message {
  font-size: 1.5rem;
  text-align: center;
  color: var(--theme) !important;
  margin-bottom: 0.5rem;
}

#log_controls button {
  width: 2rem;
  height: 2rem;
}
</style>













<script setup>
  import Submission from "@/components/Submission.vue";
  import requests from "@/server"
  import {onMounted, ref} from "vue";
//-------------------------------------------------------------------- TOGGLING DISPLAY AREAS --------------------------------------------------------------------
  const displayPromoArea = ref(false);
  const displaySettings = ref(false);
  const displaySubmissions = ref(false);
  const isAdmin = ref(false); // Check user is an admin before calling functions
  const isSuperUser = ref(false);
  const displayAdminPanel = ref(false);
  const displayLogPanel = ref(false);
  const admin_fetched_name = ref("");
  const admin_fetched_id = ref(-1);



  //-------------------------------------------------------------------- LOGIN FORM --------------------------------------------------------------------
  const login_error = ref("");

  const admin_authentication = async () => {
    if(!document.getElementById('admin_username').value || !document.getElementById('admin_password').value) {
      login_error.value = "Fill in all fields."
      return;
    }

    try {
      const data = {
        username: document.getElementById('admin_username').value,
        password: document.getElementById('admin_password').value
      };

      await requests.postRequest(data, '/admins/authenticate')
        .then((response) => {
          login_error.value = "";
          isSuperUser.value = response.superUser;
          admin_fetched_name.value = response.name;
          admin_fetched_id.value = response.admin_id
          isAdmin.value = true;

          document.getElementById('admin_username').value = "";
          document.getElementById('admin_password').value = "";
        })
    } catch (error) {
      switch (error.type) {
        case 404:
          login_error.value = "Account not found."
          break;
        case 401:
          login_error.value = "Incorrect username or password"
          break;
        default:
          login_error.value = "Unable to login."
      }
    }
  }



//-------------------------------------------------------------------- PROMOTION AREA --------------------------------------------------------------------
//  Functions to preview images when placed in the file input
  const previewImageOne = () => {
    let imageInput = document.getElementById("image_input_one");
    let image = imageInput.files[0];
    if(image) {
      let reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById("img_preview_one").setAttribute("src", e.target.result);
      };

      reader.readAsDataURL(image);
    }
  }

const previewImageTwo = () => {
  let imageInput = document.getElementById("image_input_two");
  let image = imageInput.files[0];
  console.log(image)
  if(image) {
    let reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById("img_preview_two").setAttribute("src", e.target.result);
    };

    reader.readAsDataURL(image);
  }
}

const previewImageThree = () => {
  let imageInput = document.getElementById("image_input_three");
  let image = imageInput.files[0];
  if(image) {
    let reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById("img_preview_three").setAttribute("src", e.target.result);
    };

    reader.readAsDataURL(image);
  }
}
//-------------------------------------------------------------------- SETTINGS CONTROL --------------------------------------------------------------------+
  const settingsSuccess = ref("");
  const settingsError = ref("");
  const messageBoardStatus = ref(false);
  const loadingMessageBoardStatus = ref(false);

  const loadSettings = async() => {
    if(!loadingMessageBoardStatus.value) {
      try {
        await requests.getRequest('/settings/getCurrent')
            .then((response) => {
              // Assign setting refs here
              messageBoardStatus.value = response.messageBoardActive;
            })
      } catch (error) {
        settingsError.value = error.message;
      }
    }
  };

  const toggleMessageBoard = async() => {
    if(!loadingMessageBoardStatus.value) {
      loadingMessageBoardStatus.value = true;
      try {
        const data = {
          boardSetting: !messageBoardStatus.value
        }

        await requests.putRequest(data, '/settings/updateBoardStatus')
            .then((response) => {
              settingsSuccess.value = response.message;
              loadingMessageBoardStatus.value = false;

              setTimeout(() => {
                settingsSuccess.value = "";
              }, 5000)
            })

        await loadSettings();
      } catch (error) {
        settingsError.value = error.message;
      }
    }
  }


//-------------------------------------------------------------------- SUBMISSION CONTROL --------------------------------------------------------------------+
  const submissions = ref([]);
  const submissionSuccess = ref("");
  const submissionError = ref("");

  const loadMessages = async () => {
    try {
      await requests.getRequest("/submissions/getAll")
          .then((response) => {
            submissions.value = response.submissions;
            submissionError.value = "";
          })

    } catch (error) {
      submissionError.value = error.message
    }
  };

  const rejectSubmission = async (id) =>  {
    try {
      await requests.deleteRequest({id: id}, `/submissions/delete`)
        .then((response) => {
          submissionSuccess.value = response.message;
          submissionError.value = "";
          loadMessages();

          setTimeout(() => {
            submissionSuccess.value = "";
          }, 5000);

          new_log(`Rejected a submission`);
        });
    } catch (error) {
      submissionError.value = error.message
    }
  };

  const acceptSubmission = async (id, date, message) =>  {
    try {
      const data = {
        id: id,
        date: date,
        message: message
      };
      await Promise.all([requests.postRequest(data, '/messages/create'), requests.deleteRequest({id: id}, '/submissions/delete')])
        .then(() => {
          submissionSuccess.value = "Submission accepted and added to message board.";
          submissionError.value = "";

          setTimeout(() => {
            submissionSuccess.value = "";
          }, 5000);

          new_log(`Accepted a submission`);
        });
    } catch (error) {
      submissionError.value = error.message
    }

    await loadMessages();
  }

//-------------------------------------------------------------------- ADMIN PANEL --------------------------------------------------------------------
  const admins = ref([]);
  const adminListErrorMessage = ref("");
  const adminListSuccessMessage = ref("");
  const admin_name = ref("");
  const admin_username = ref("");
  const admin_password = ref("");
  const admin_super = ref(false);
  const admin_errorMessage = ref("");
  const admin_success_message = ref("");

  const fetchAdmins = async() => {
    if(isAdmin.value) {
      try {
        await requests.getRequest("/admins/getAll")
            .then((response) => {
              admins.value = response.adminList;
            })
      } catch (error) {
        console.log(error);
      }
    }
  }

  const createAdmin = async () => {
    if(admin_name.value.length === 0) {
      admin_errorMessage.value = "Name cannot be empty";
      return;
    }
    if(admin_username.value.length === 0) {
      admin_errorMessage.value = "Username cannot be empty";
      return;
    }

    if(admin_password.value.length === 0) {
      admin_errorMessage.value = "Password cannot be empty";
      return;
    }

    if(admin_username.value.indexOf(' ') >= 0) { // If there is a space
      admin_errorMessage.value = "Username cannot contain spaces";
      return;
    }

    if(admin_password.value.indexOf(' ') >= 0) { // If there is a space
      admin_errorMessage.value = "Password cannot contain spaces";
      return;
    }

    const admin = {
      name: admin_name.value,
      username: admin_username.value,
      password: admin_password.value,
      superUser: admin_super.value
    }

    try {
      await requests.postRequest(admin, "/admins/create")
          .then((response) => {
            const temp_name = admin_name.value;

            admin_name.value = "";
            admin_username.value = "";
            admin_password.value = "";
            admin_super.value = false;
            admin_errorMessage.value = "";
            admin_success_message.value = response.message;

            fetchAdmins();

            setTimeout(() => {
              admin_success_message.value = "";
            }, 5000);

            const log_str = `Created a new admin: ${temp_name}`;
            new_log(log_str);
          })
    } catch (error) {
      console.log(error)
    }
  }

  const deleteAdmin = async(id) => {
    try {
      const data = {
        id: id
      }

      await requests.deleteRequest(data, "/admins/delete")
          .then((response) => {
            adminListSuccessMessage.value = response.message;
            fetchAdmins();

            new_log(`Deleted an admin: ${response.admin_name}`);
          })
    } catch (error) {
      if(error.type === 401) {
        adminListErrorMessage.value = "Not authorized to delete this admin.";
      }
      else if(error.type === 404) {
        adminListErrorMessage.value = "Could not find admin";
      } else {
        adminListErrorMessage.value = "Unknown Error";
      }
    }

    setTimeout(() => {
      adminListErrorMessage.value = "";
      adminListSuccessMessage.value = "";
    }, 5000);
  }

  const toggleSuperAdmin = async(id, currentStatus) => {
    const route = currentStatus ? "/admins/revoke" : "/admins/super";

    try {
      const data = {
        id: id
      }

      await requests.putRequest(data, route)
          .then((response) => {
            adminListSuccessMessage.value = response.message;
            fetchAdmins();

            new_log(`Updated an admins super-user status: ${response.admin_name}`);
          })

      setTimeout(() => {
        adminListErrorMessage.value = "";
        adminListSuccessMessage.value = "";
      }, 5000);
    } catch (error) {
      if(error.type === 401) {
        adminListErrorMessage.value = "Not authorized to modify this admin.";
      }
      else if(error.type === 404) {
        adminListErrorMessage.value = "Could not find admin";
      } else {
        adminListErrorMessage.value = "Unknown Error";
      }
    }
  }


//-------------------------------------------------------------------- LOG PANEL --------------------------------------------------------------------
  const log = ref([]);
  const log_pages = ref();
  const current_log_page = ref(1);
  const logErrorMessage = ref("");

  const getLogs = async (page) => {
    try {
      const data = {
        group: page
      };

      await requests.postRequest(data, "/logs/getGroup")
          .then((response) => {
            log.value = response.logs;
          })

      current_log_page.value = page;
    } catch (error) {
      logErrorMessage.value = error.message

      setTimeout(() => {
        logErrorMessage.value = "";
      }, 5000);
    }
  }

  const fixLogDate = (datetime) => {
    const date = new Date(datetime);

    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${month}/${day}/${year} at ${hours}:${minutes}${ampm}`;
  }

  const getPages = async () => {
    try {
      await requests.getRequest("/logs/count")
        .then((response) => {
          const pages = Math.floor(response.count / 20);
          log_pages.value = response.count % 20 === 0 ? pages : pages + 1;
        })
    } catch (error) {
      setTimeout(() => {
        logErrorMessage.value = error.message

        logErrorMessage.value = "";
      }, 5000);
    }
  }

  const new_log = async (action) => {
    try {
      const data = {
        action: action,
        admin: admin_fetched_name.value,
      };

      const commit_data = {
        id: admin_fetched_id.value
      };

      await Promise.all([requests.postRequest(data, "/logs/create"), requests.putRequest(commit_data, '/admins/commit')]);

    } catch (error) {
    //   Do Nothing
      console.log(error);
    }
  }

  onMounted(() => {
    getPages();
  })
</script>