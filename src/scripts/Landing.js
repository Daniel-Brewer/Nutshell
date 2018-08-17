// const $ = require("jquery")



// creating the landing page and calling funtions to use for the buttons
const landing = () => {
    console.log("it works");
    $("#landing").append(`
    <h1 class="title is-1">Your Home for Tasks,Events, and Messages</h1>
    <div class="tile is-ancestor box">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical box">
        <section id="tasks--tile" class="tile is-child notification is-light">
          <p class="title">Tasks</p>
          <p class="subtitle">Current Task</p>
        </section>
        <section id="friends--tile" class="tile is-child notification is-light box">
          <p class="title">Friends</p>
          <p class="subtitle"></p>
        </section>
      </div>
      <div class="tile is-parent box">
        <section id="events--tile" class="tile is-child notification is-light">
          <p class="title">Events</p>
          <p class="subtitle">Current Event</p>
        </section>
      </div>
    </div>
    <div class="tile is-parent box">
      <section class="tile is-child notification is-light">
       <p class="title">News</p>
        <div  id="articles--tile" class="content">
          <!-- Content -->
        </div>
      </section>
    </div>
  </div>
  <div class="tile is-parent box">
    <section id="chat--tile" class="tile is-child notification is-info">
      <div class="content">
        <p class="title">Chat</p>
        <p class="subtitle">Show more</p>
        <div class="content">
          <!-- Content -->
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..
        </div>
      </div>
    </section>
  </div>
</div>
`)

}


module.exports = landing