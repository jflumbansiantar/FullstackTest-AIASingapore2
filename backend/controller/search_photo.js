// https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c28c69bc847314bd4168293c42a0eec4&tags=cats&format=json&nojsoncallback=1&api_sig=6d032c7a4bf45e27f0e66ff51acd9da4
const axios = require("axios");

class Photo {
    static async search(req, res, next) {
        try {
            
            const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c28c69bc847314bd4168293c42a0eec4&tags=${req.param.tag}&format=json&nojsoncallback=1`)
            // console.log(response)
            res.status(200).json({
                data: response.data
            })
        } catch (error) {
            res.status(404).json({message: "Error"})
        }
    }
    static async getAll(req, res, next) {
        try {
        
            const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=605fcb167973d5a9f74b205695b5e0f2&format=json&nojsoncallback=1&api_sig=8be7f6dad0f174234807bdc0710b7049`)
            // console.log(response)
            res.status(200).json({
                data: response.data
            })
        } catch (error) {
            res.status(404).json({message: "Error"})
        }
    }
}

module.exports = Photo;