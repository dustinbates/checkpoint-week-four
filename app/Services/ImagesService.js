import { appState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { sandBoxApi } from "./AxiosService.js"

class ImagesService {
    async getImage() {
        const res = await sandBoxApi.get('/images')
        appState.images = new Image(res.data)
    }

}

export const imagesService = new ImagesService()