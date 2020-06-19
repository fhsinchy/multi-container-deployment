<template>
    <div>
        <b-navbar class="mb-5" toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">{{ brand }}</b-navbar-brand>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item v-b-modal.note-creation-modal>Create Note</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    brand: String
  }
}
</script>
