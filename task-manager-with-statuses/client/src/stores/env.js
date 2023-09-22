import { defineStore } from 'pinia'

export const EnvStore = defineStore("env", {
  state: () => ({
    dialogs: {
      tasks: {
        save: false,
      }
    }
  }),
});
