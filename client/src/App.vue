<template>
<div>
  <nav-bar brand="Notes" />
  <b-container>
    <notes-list />
  </b-container>
  <create-note title="Create Note"/>
</div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import CreateNote from "./components/CreateNote.vue";
import NotesList from "./components/NotesList.vue";

export default {
  name: "App",
  components: {
    NavBar,
    CreateNote,
    NotesList,
  },
};
</script>

