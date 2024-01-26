import axios from 'axios';

//crear una instancia crear una peticion
const movieApi= axios.create({
	baseURL: 'https://api.themoviedb.org/3/movie/',
	params: {
		api_key: '614bca464176d2061d9e4529327d5929',
        language: 'es-ES',
        page: 1
	},
});
//614bca464176d2061d9e4529327d5929

export default movieApi;
