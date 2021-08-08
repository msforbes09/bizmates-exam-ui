export default{
    categories(state, payload) {
        state.categories = payload
    },
    city(state, payload) {
        state.city = payload
    },
    weather(state, payload) {
        state.weather = payload
    },
    weatherForecast(state, payload) {
        state.weatherForecast = payload
    },
    venues(state, payload) {
        state.venues = payload
    },
    venue(state, payload) {
        state.venue = payload
    },
}