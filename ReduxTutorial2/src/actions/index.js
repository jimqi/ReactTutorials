import axios from 'axios';

const API_KEY = '1fd9c59a8d6a8293beaa0250066527e6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},canada`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request,
	}
}