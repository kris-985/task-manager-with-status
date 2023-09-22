<template>
  <div class="mt-10">
    <search-form />
    <filter-form />
    <ul class="mt-10">
      <li
        v-for="(item, index) in task.displayItems"
        :key="index"
        class="py-3 px-4 text-xl"
        :class="index % 2 == 0 ? 'bg-slate-100' : 'bg-slate-200'"
      >
        <div>{{ item.name }}</div>
        <div>{{ item.status }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { TaskStore } from "../stores/task";
import SearchForm from "./Search.vue";
import FilterForm from "./Filter.vue";

export default {
  components: {
    SearchForm,
    FilterForm,
  },
  setup() {
    const task = TaskStore();

    task.getItems();

    return { task };
  },
};
</script>