<template>
  <div class="item-card">
      <img class="card-image" src="../../../assets/logo.png" alt="">
      <div>{{itemData.name}}</div>
      <div>{{itemData.exp}} xp</div>
      <div>{{itemData.price}} eth</div>
  </div>
</template>

<script>
export default {
	name: 'item-card',
	data() {
		return {
			itemData: {
				id: 0,
				name: '测试card',
				exp: 200,
				price: 0.02
			}
		};
	}
};
</script>

<style lang="scss" scoped>
.item-card {
    border:1px solid #ea7;
    border-radius: 4px;
    width: 18rem;
    height: 32rem;
    .card-image {
        width: 9rem;
        height: 9rem;
    }
}
</style>
