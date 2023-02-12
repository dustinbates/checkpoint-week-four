export class Quote {
    constructor(data){
        this.content = data.content
        this.author = data.author
    }

    get quoteTemplate(){
        return `
        <div>
        <div class="text-start on-hover text-light"><em>Author: ${this.author}<em></div>
        <p class="text-light" style="user-select: none">"${this.content}"</p>
        </div>
        `
    }
}