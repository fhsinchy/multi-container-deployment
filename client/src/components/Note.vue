<template>
  <b-modal id="note-show-modal" hide-footer :title="note.title">
    <b-form @submit="submit" v-if="editing">
      <b-form-group
        id="title-input-group"
        label="Title"
        label-for="title"
      >
        <b-form-input
          id="title"
          v-model="editable.title"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="content-input-group"
        label="Content"
        label-for="content"
      >
        <b-form-textarea
          id="content"
          v-model="editable.content"
          rows="3"
          max-rows="6"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button @click="changeEditingStatus" class="ml-2" variant="danger">Cancel</b-button>
    </b-form>
    <div v-else>
      <p>{{ note.content }}</p>
      <b-button @click="changeEditingStatus" variant="primary">Edit</b-button>
      <b-button @click="destroy" class="ml-2" variant="danger">Delete</b-button>
    </div>
  </b-modal>
</template>

<script>
import axios from "../libs/axios";
import EventBus from "../event-bus";

export default {
  name: "Note",
  data() {
    return {
      editing: false,
      editable: {}
    }
  },
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
    async submit(evt) {
      evt.preventDefault()

      try {
        await axios.put(`/notes/${this.note.id}`, this.editable)

        this.changeEditingStatus()
      } catch (error) {
        console.log(error)
      }

      this.$bvModal.hide("note-creation-modal")
    },
    changeEditingStatus() {
      if(!this.editing) {
        this.editable = this.note;
      } else {
        this.editable = {};
      }

      this.editing = !this.editing;
    }
  },
};
</script>
