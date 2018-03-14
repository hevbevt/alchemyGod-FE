<template>
  <div>
    <list-filter></list-filter>
    <inventory-list></inventory-list>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import ListFilter from './components/ListFilter.vue';
import InventoryList from './components/InventoryList.vue'
export default {
	components: {
    ListFilter,
    InventoryList
	},
	computed: mapState('counter', ['count']),
	methods: {
		...mapMutations('counter', ['increment', 'decrement', 'clear']),
		...mapActions('counter', ['getDefaultCountData'])
	}
};
</script>

<style>

</style>
