<template>
	<h1>Hello, World!</h1>

	<div>
		<button @click="onClickHandler">+</button>

		<div>
			<span>COUNTER: </span>
			<span>{{ count }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { Ref } from 'vue';

	import { ref } from 'vue';

	const count: Ref<number> = ref(0);

	const onClickHandler = () => {
		count.value++;
	};
</script>
