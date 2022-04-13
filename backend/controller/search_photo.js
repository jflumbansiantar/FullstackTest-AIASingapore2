// https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c28c69bc847314bd4168293c42a0eec4&tags=cats&format=json&nojsoncallback=1&api_sig=6d032c7a4bf45e27f0e66ff51acd9da4
const axios = require("axios");

class Photo {
    static async search(req, res, next) {
        try {
            
            const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c28c69bc847314bd4168293c42a0eec4&tags=${req.param.tag}&format=json&nojsoncallback=1`)
            
            res.status(200).json({
                data: response.data
            })
        } catch (error) {
            res.status(404).json({message: "Error"})
        }
    }
    static async getAll(req, res, next) {
        try {
        
            const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=e18f2d24cd3e09a7fe19a2fe161ab904&format=json&nojsoncallback=1&api_sig=dff47e1805699dff201cb01acc835abe`)
            // console.log(response)
            res.status(200).json({
                data: response.data
            })
        } catch (error) {
            res.status(404).json({message: "Error"})
        }
    }
}
// https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=e18f2d24cd3e09a7fe19a2fe161ab904&photo_id=52000308437&format=json&nojsoncallback=1&api_sig=1c8a386a90d6c523beb7ddb3188ad711
module.exports = Photo;