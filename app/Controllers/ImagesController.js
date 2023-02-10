import { appState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawImage(){
    document.body.style.backgroundImage = `url(${appState.images.largeImgUrl})`
}

export class ImagesController {
    constructor(){
        this.getImage()
        appState.on('images', _drawImage)
    }

    async getImage(){
        try {
            await imagesService.getImage()
        } catch (error) {
            Pop.error(error)
            console.error(error.message);
        }
    }
}