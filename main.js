

var app = new Vue({
	el: '#root',

	data: {
		dischi: [],
		generi: ['all'],
		key: 'all',
		bool: false,
	},

	methods: {
		onChange(event) {
            console.log(event.target.value);
			this.bool = true;
        }

	}, // fine methods

	mounted() {
			axios
			.get('https://flynn.boolean.careers/exercises/api/array/music')
			.then((risposta) =>{

				this.dischi = risposta.data.response; // assegno ad dischi l'array response
				this.dischi.forEach((element, index) =>{
					// this.generi.push(element.genre);

					if(!this.generi.includes(element.genre)){ // se il genere non e' presente
						this.generi.push(element.genre); // pusho in generi
					}
				});
				console.log(this.generi);


			}); // fine then
	} // fine mounted
});
