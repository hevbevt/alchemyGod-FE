<template>
  <div>
    <span>{{count}}</span>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="clear">clear</button>
    <button @click="getDefaultCountData">fetch from api</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  computed: mapState('counter', ['count']),
	methods: {
    ...mapMutations('counter', ['increment', 'decrement', 'clear']),
    ...mapActions('counter', ['getDefaultCountData']),
	}
};
</script>

<style>

</style>

