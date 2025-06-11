<script setup lang="ts">
	import { useRouter } from 'vue-router'
	const router = useRouter()
	const goLink = (path: string) => {
		router.push(path)
	}
	console.log(
		router.options.routes.filter(item => {
			console.log(item.meta)
			return item.meta?.isNav
		})
	)
	const routerNavList = router.options.routes
		.filter(item => item.meta?.isNav)
		.map(v => {
			return { label: v.meta?.label || v.path, path: v.path }
		})
	console.log(routerNavList, 'routerNavList')
</script>
<template>
	<ul class="router-nav">
		<li v-for="item in routerNavList" :key="item.path" @click="goLink(item.path)">
			{{ item.label }}
		</li>
	</ul>
</template>

<style lang="less" scoped>
	.router-nav {
		width: 100%;
		font-size: 10px;
		display: flex;
		flex-wrap: wrap;
		li {
			cursor: pointer;
			padding: 0 10px;
			border: 1px solid #ccc;
			margin: 10px;
		}
	}
</style>
