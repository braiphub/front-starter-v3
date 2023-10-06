// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	app: {
		head: {
			title: "Braip",
			htmlAttrs: {
				lang: "pt-br",
			},
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{
					hid: "description",
					name: "description",
					content:
						"A Braip oferece as melhores funcionalidades e ferramentas para você que deseja empreender no meio digital. Em nossa plataforma você comercializa seus produtos e recebe pagamentos de forma segura e rápida.",
				},
				{ name: "format-detection", content: "telephone=no" },
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
			script: [],
		},
	},

	googleFonts: {
		display: "swap",
		preload: true,
		families: {
			Sora: {
				wght: [200, 300, 400, 500, 600, 700],
			},
			Poppins: {
				wght: [200, 300, 400, 500, 600, 700],
			},
		},
	},

	image: {
		inject: true,
		quality: 70,
		format: ["webp"],
	},

	modules: [
		"@nuxtjs/eslint-module",
		"@pinia/nuxt",
		"@nuxtjs/google-fonts",
		"@nuxt/image",
		"@vueuse/nuxt",
		"nuxt-vitest",
	],
});
