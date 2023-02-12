import { appState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { sandBoxApi } from "./AxiosService.js"

class QuotesService {
    async getQuote() {
        const res = await sandBoxApi.get('/quotes')
        appState.quotes = new Quote(res.data)
    }
    }


export const quotesService = new QuotesService()