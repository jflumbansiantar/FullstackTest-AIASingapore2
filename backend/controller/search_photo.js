// https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c28c69bc847314bd4168293c42a0eec4&tags=cats&format=json&nojsoncallback=1&api_sig=6d032c7a4bf45e27f0e66ff51acd9da4
const axios = require("axios");

class Photo {
    static async search(req, res, next) {
        console.log(req.headers)
        try {
            
            const response = (await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a8163e21a00cede1346618284633f546&tags=${req.headers.tag}&format=json&nojsoncallback=1&api_sig=fafe39624e2c95ac852aeda4e7166812`)).data.photos.photo
            
            res.status(200).json({
                result: response
            })
        } catch (error) {
            res.status(404).json({message: "Error"})
        }
    }
    static async getAll(req, res, next) {
        try {
        
            const response = (await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=a8163e21a00cede1346618284633f546&format=json&nojsoncallback=1&api_sig=1c23ef58bd433118fb1c4f6a53660129`)).data.photos.photo
     
            res.status(200).json({
                result: response
            })
        } catch (error) {
            res.status(404).json({message: "Error"})
        }
    }
}
module.exports = Photo;