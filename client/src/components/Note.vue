<template>
  <div class="card fluid">
    <h3>{{ note.title }}</h3>
    <p>{{ note.content }}</p>
    <button class="secondary">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'Note',
  props: {
    note: Object,
  },
};
</script>
