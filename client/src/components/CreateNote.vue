<template>
  <b-modal @hide="reset" id="note-creation-modal" hide-footer title="Create Note">
    <b-form @submit="submit">
      <b-form-group
        id="title-input-group"
        label="Title"
        label-for="title"
      >
        <b-form-input
          id="title"
          v-model="note.title"
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
          v-model="note.content"
          rows="3"
          max-rows="6"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-modal>
</template>

<script>
import axios from "../libs/axios"
import EventBus from "../event-bus"

export default {
  name: "CreateNote",
  data() {
    return {
      note: {
        title: "",
        content: "",
      },
    }
  },
  methods: {
    async submit(evt) {
      evt.preventDefault()

      try {
        const response = await axios.post("/notes", this.note)

        EventBus.$emit("note-created", response.data.data)
      } catch (error) {
        console.log(error)
      }

      this.$bvModal.hide("note-creation-modal")
    },
    reset() {
      this.note.title = ""
      this.note.content = ""
    }
  }
};
</script>
