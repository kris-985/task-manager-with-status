<template>
  <div>
    <label for="filter">Filter</label>
    <select
      id="filter"
      v-model="task.filter"
      @change="task.filterFunc"
      class="outline-none w-full py-3 px-4 border rounded"
    >
      <option value="pending">Pending</option>
      <option value="completed">Completed</option>
    </select>
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
