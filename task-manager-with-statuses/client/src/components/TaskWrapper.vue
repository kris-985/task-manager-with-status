<template>
  <div class="container mx-auto pt-10">
    <div class="flex justify-between items-center">
      <h1 class="text-4xl">Task Manager</h1>
      <button
        class="text-xl py-3 px-4 bg-slate-600 text-white border rounded"
        @click="openDialog"
      >
        Create Task
      </button>
    </div>
    <save-task v-if="env.dialogs.tasks.save" />
    <display-items />
  </div>
</template>

<script>
import { EnvStore } from "../stores/env";
import { TaskStore } from "../stores/task";
import DisplayItems from "./DisplayItems.vue";
import SaveTask from "./SaveTask.vue";

export default {
  components: {
    SaveTask,
    DisplayItems,
},
  setup() {
    const env = EnvStore();
    const task = TaskStore();

    const functions = {
      openDialog() {
        env.dialogs.tasks.save = true;
        task.item = {};
      }
    }

    return { env, ...functions };
  },
};
</script>