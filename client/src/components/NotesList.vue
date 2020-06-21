<template>
  <div>
    <b-list-group v-if="notes.length > 0">
      <b-list-group-item v-for="note in notes" v-on:click="show(note)" :key="note.id">{{ note.title }}</b-list-group-item>
    </b-list-group>
    <b-alert v-else show>There are no notes in the database.</b-alert>
    <note :note="current" />
  </div>
</template>

<script>
import axios from "../libs/axios"
import EventBus from "../event-bus";

import Note from "./Note.vue";

export default {
  name: "NotesList",
  components: {
    Note,
  },
  data() {
    return {
      notes: [],
      current: {},
    }
  },
  methods: {
    show(note) {
      this.current = note;
      this.$bvModal.show("note-show-modal")
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

    EventBus.$on("note-deleted", payload => {
      this.notes = this.notes.filter(note => {
        note.id !== payload.id
      })
    })
  }
}
</script>
