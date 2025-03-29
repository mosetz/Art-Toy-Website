class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
        <style>${this.getStyle()}</style>
        <div class="search-cont">
            <input type="text" class="search-bar" placeholder="Look for your favorite toys..." >
            <button class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        `;
    }

    getStyle(){
        return`
        `
    }
    
}
customElements.define('search-bar', SearchBar);