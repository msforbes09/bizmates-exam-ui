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
            const res = await axios.get('weather', {params})

            context.commit('weather', res.data)
            context.commit('city', params.city)
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
    }
}
