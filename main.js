

var app = new Vue({
	el: '#root',

	data: {
		dischi: [],
		generi: [],
		selectedGenre: '',
	},

	methods: {


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

				this.dischi.sort(function(disc1, disc2){
					return parseInt(disc1.year)-parseInt(disc2.year);  // mi permette di ordinare gli album in ordine di uscita
				});

			}); // fine then
	} // fine mounted
});
