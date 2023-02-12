export class Quote {
    constructor(data){
        this.content = data.content
        this.author = data.author
    }

    get quoteTemplate(){
        return `
        <div>
        <div class="text-start on-hover text-light quote"><em><b>Author: ${this.author}<b><em></div>
        <p class="text-light quote" style="user-select: none">"${this.content}"</p>
        </div>
        `
    }
}