

var app = new Vue({
	el: '#root',

	data: {
		dischi: [],
	},

	mounted() {
			axios
			.get('https://flynn.boolean.careers/exercises/api/array/music')
			.then((risposta) =>{
				this.dischi = risposta.data.response;


			}); // fine then
	} // fine mounted
});
