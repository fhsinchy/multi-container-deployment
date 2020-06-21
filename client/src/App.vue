<template>
<div>
  <nav-bar brand="Notes" />
  <b-container>
    <b-list-group v-if="notes.length > 0">
      <b-list-group-item class="d-flex justify-content-between" v-for="note in notes" :key="note.id">
        {{ note.title }}
        <b-button-group size="sm">
          <b-button @click="show(note)" variant="info">Show</b-button>
          <b-button @click="destroy(note)" variant="danger">Delete</b-button>
        </b-button-group>
      </b-list-group-item>
    </b-list-group>
    <b-alert v-else show>There are no notes in the database.</b-alert>
  </b-container>
  <b-modal id="note-show-modal" ok-only :title="selected.title">
    <p>{{ selected.content }}</p>
  </b-modal>
  <create-note />
</div>
</template>

<script>
import axios from "./libs/axios";
import EventBus from "./event-bus";

import NavBar from "./components/NavBar.vue";
import CreateNote from "./components/CreateNote.vue";

export default {
  name: "App",
  data() {
    return {
      notes: [],
      selected: {},
    }
  },
  components: {
    NavBar,
    CreateNote,
  },
  methods: {
    show(note) {
      this.selected = note
      this.$bvModal.show('note-show-modal')
    },
    async destroy(note) {
      try {
        await axios.delete(`/notes/${note.id}`);
        
        this.notes = this.notes.filter(n => {
          return n.id !== note.id
        })
      } catch (error) {
        console.log(error);
      }
    },
  },
  async mounted() {
    try {
      const response = await axios.get("/notes")

      this.notes = [...response.data.data.notes]
    } catch (error) {
      console.log(error)
    }

    EventBus.$on("note-created", (payload) => {
      this.notes.push(payload.note)
    })
  }
};
</script>

