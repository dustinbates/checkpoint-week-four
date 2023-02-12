import { appState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuote(){
    setHTML('quotes', appState.quotes.quoteTemplate)
}

export class QuotesController {
    constructor(){
        this.getQuote()
        appState.on('quotes', _drawQuote)
    }

    async getQuote(){
        try {
            await quotesService.getQuote()
        } catch (error) {
            Pop.error(error)
            console.error(error.message);
        }
    }
}