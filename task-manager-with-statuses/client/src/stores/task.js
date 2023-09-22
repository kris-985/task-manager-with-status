import { defineStore } from 'pinia'
import { api } from '../boot/axios'

export const TaskStore = defineStore("task", {
  state: () => ({
    loading: false,
    items: [],
    displayItems: [],
    item: {},
    url: "/tasks",
    searchTerm: "",
    filter: "",
  }),
  actions: {
    saveItem(cb) {
      this.loading = true;
      api.post(this.url, this.item)
        .then((res) => {
          this.item = res.data;
          if (cb) cb();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => this.loading = false);
    },
    getItem() {
      this.loading = true;
      api.get(`${this.url}/${this.item.id}`)
        .then((res) => {
          this.item = res.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => this.loading = false);
    },
    getItems() {
      this.loading = true;
      api.get(this.url)
        .then((res) => {
          this.items = res.data;
          this.displayItems = this.items;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => this.loading = false);
    },
    search() {
      this.displayItems = this.items.filter(x => x.name.includes(this.searchTerm));
    },
    filterFunc() {
      this.displayItems = this.items.filter(x => x.status == this.filter);
    }
  },
});