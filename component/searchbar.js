class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
        <style>${getStyle()}</style>>
        `
    }

    getStyle(){
        return`
        `
    }
    
}
customElements.define('search-bar', SearchBar);