//https://starlight.astro.build/getting-started/

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova  from 'starlight-theme-nova';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
			favicon:'/favicon.svg',
			logo: {
				src: './src/assets/egbim_k.svg',
				replacesTitle: true,
			},
			defaultLocale: 'ko',
			locales: {
				ko: {
					label: 'Korean',
					lang:'ko-KR'
				},
			},
			sidebar:[
				{
					label: 'EG-BIM 시작하기',
					autogenerate: { directory: 'guides' },
				},
				{
					label: '명령어',
					items:[
						{
							label: '명령어 전체보기',
							autogenerate: {directory: '/commands/commandWindow'}
						}],
				},
			],
			plugins: [
				starlightThemeNova({
					nav: [
						{ label: 'Go EG-BIM Home', href:'https://eg-bim.co.kr' }
					]
				})
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
