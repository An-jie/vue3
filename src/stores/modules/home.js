import { getHomeHotSuggests } from "@/services";
import { defineStore } from "pinia";
// import hyRequest from "@/services/request/index"

const useHomeStore = defineStore("home", {
	state: () => ({
		hotSuggests: [],
		categories: [],
	}),
	actions: {
		async fetchHomeSuggestData() {
			const res = await getHomeHotSuggests();
			this.hotSuggests = res.data;
		},
	},
});

export default useHomeStore;
