<template>
  <b-modal id="note-show-modal" hide-footer :title="note.title">
    <p>{{ note.content }}</p>
    <b-button variant="primary">Edit</b-button>
    <b-button @click="destroy" class="ml-2" variant="danger">Delete</b-button>
  </b-modal>
</template>

<script>
import axios from "../libs/axios";
import EventBus from "../event-bus";

export default {
  name: "ShowNote",
  props: {
    note: Object,
  },
  methods: {
    async destroy() {
      try {
        await axios.delete(`/notes/${this.note.id}`);
        
        EventBus.$emit("note-deleted", this.note);
      } catch (error) {
        console.log(error);
      }

      this.$bvModal.hide("note-show-modal");
    },
  },
};
</script>
