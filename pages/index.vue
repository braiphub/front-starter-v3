<template>
	<main>
		<div class="card-container">
			<div class="card-wrapper">
				<img src="/images/logo.svg" alt="Logo ds Braip" />
				<p class="card-title">Front-end Starter - Nuxt 3</p>
				<div class="grid-container">
					<div class="grid-item">
						<a
							href="https://github.com/braiphub/front-starter/blob/master/README.md"
							target="_blank"
						>
							<span>💜</span>
							Leia a documentação geral do projeto
						</a>
					</div>
					<div class="grid-item">
						<a
							href="https://github.com/braiphub/front-starter/tree/master/components"
							target="_blank"
						>
							<span>⚛️</span>
							Sobre o Atomic Design
						</a>
					</div>
					<div class="grid-item">
						<a href="https://nuxtjs.com/" target="_blank">
							<span>📗</span>
							Documentação NuxtJs
						</a>
					</div>
				</div>
				<p class="version">Nuxt v3.7.4 Node v18.18.0</p>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: "IndexPage",
};
</script>

<style scoped>
main {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;

	background-color: var(--brandPrimary6);
}

.card-container {
	background-color: #fff;
	color: #3c3c42;
	border-radius: 4px;
	padding: 1rem 1.5rem;
	margin: 0 1rem;
	max-width: 768px;
	width: 100%;
}

.card-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.grid-container {
	margin-top: 1rem;
	background-color: #ebebfa;
	border-radius: 4px;
	width: 100%;
	padding: 1.5rem;
	display: grid;
	gap: 1.5rem;

	font-size: 16px;
	line-height: 130%;
}

.version {
	color: #959595;
	font-size: 14px;
	font-weight: 400;
	margin: 1rem 0 0 auto;
}
</style>
