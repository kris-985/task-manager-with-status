<template>
  <div>
    <label for="search">Search</label>
    <input
      type="text"
      v-model="task.searchTerm"
      @input="task.search"
      class="outline-none w-full py-3 px-4 border rounded"
      id="search"
    />
  </div>
</template>

<script>
import { TaskStore } from "../stores/task";

export default {
  setup() {
    const task = TaskStore();
    return { task };
  },
};
</script>
