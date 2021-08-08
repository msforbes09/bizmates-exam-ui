import axios from "axios"

export default {
    async getCategories(context) {
        try {
            const res = await axios.get('/venue/categories')
            
            context.commit('categories', res.data)
        } catch (error) {
            console.log(error)
        }
    },
    async getWeather(context, params) {
        try {
            const res = await axios.get('weather/check', {params})

            context.commit('weather', res.data)
            context.commit('city', params.city)
        } catch (error) {
            console.log(error)
        }
    },
    async getWeatherForecast(context, params) {
        try {
            const res = await axios.get('weather/forecast', {params})

            context.commit('weatherForecast', res.data)
        } catch (error) {
            console.log(error)
        }
    },
    async getVenues(context, params) {
        try {
            const res = await axios.get('venue/search', {params})

            context.commit('venues', res.data)
        } catch (error) {
            console.log(error)
        }
    },
    async getVenue(context, id = '4d09895482aaa093b173d1c2') {
        try {
            const res = await axios.get('venue/' + id)

            context.commit('venue', res.data)
        } catch (error) {
            console.log(error)
        }
    }
}
