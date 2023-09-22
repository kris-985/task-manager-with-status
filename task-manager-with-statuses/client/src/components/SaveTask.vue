<template>
  <form @submit.prevent="submit">
    <div class="mb-4">
      <label for="name">Name</label>
      <input
        class="outline-none w-full py-3 px-4 border rounded"
        type="text"
        v-model="task.item.name"
      />
    </div>
    <div class="mb-4">
      <label for="desc">Body</label>
      <textarea v-model="task.item.body" class="outline-none w-full py-3 px-4 border rounded"></textarea>
    </div>
    <div class="mb-4">
      <label for="status">Stutus</label>
      <select v-model="task.item.status" id="status" class="outline-none w-full py-3 px-4 border rounded">
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>
    <div class="text-center">
      <button class="text-xl py-3 px-4 bg-slate-600 text-white border rounded">
        Create Task
      </button>
    </div>
  </form>
</template>

<script>
import { EnvStore } from "../stores/env";
import { TaskStore } from "../stores/task";

export default {
  setup() {
    const env = EnvStore();
    const task = TaskStore();

    const callbacks = {
      submit() {
        env.dialogs.tasks.save = false;
        task.getItems();
      }
    }

    const functions = {
      submit() {
        task.saveItem(callbacks.submit);
      },
    };

    return { task, ...functions }
  },
};
</script>