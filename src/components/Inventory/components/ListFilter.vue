<template>
  <div class="filter-wrapper">
    编号：
    <el-input class="input-filter" v-model="filter.code" @change="changeFilter(filter)" placeholder="编号"></el-input>
    品阶：
    <el-select v-model="filter.level" @change="changeFilter(filter)" placeholder="品阶">
      <el-option
        v-for="item in levelOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    属性：
    <el-select v-model="filter.attribute" @change="changeFilter(filter)" placeholder="属性">
      <el-option
        v-for="item in attrOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    排序：
    <el-select v-model="filter.sort" @change="changeFilter(filter)" placeholder="排序">
      <el-option
        v-for="item in sortOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	name: 'ListFilter',
	data() {
		return {
			levelOptions: [
				{
					value: 0,
					label: '选项1'
				},
				{
					value: 1,
					label: '选项2'
				}
			],
			attrOptions: [
				{
					value: 'rare',
					label: '创世'
				},
				{
					value: 'collect',
					label: '收藏'
				},
				{
					value: 'normal',
					label: '普通'
				}
			],
			sortOptions: [
				{
					value: 'code_asc',
					label: '编号从小到大'
				},
				{
					value: 'code_desc',
					label: '编号从大到小'
				},
				{
					value: 'time_asc',
					label: '最新到最久'
				},
				{
					value: 'time_desc',
					label: '最久到最新'
				},
				{
					value: 'price_asc',
					label: '最贵到最便宜'
				},
				{
					value: 'price_desc',
					label: '最便宜到最贵'
				}
			]
		};
  },
  computed: mapState('inventory', ['filter']),
  methods: {
    ...mapMutations('inventory', ['changeFilter']),
  }
};
</script>

<style lang="scss" scoped>
.input-filter {
	width: 194px;
	display: inline-block;
}
</style>



