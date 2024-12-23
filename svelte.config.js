import adapter from '@sveltejs/adapter-static';


export default {
	kit: {
		adapter: adapter() // best not to use any options for Vercel (zero-config platform)
	}
};
