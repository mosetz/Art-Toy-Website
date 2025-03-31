class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
        <style>${this.getStyle()}</style>
        <div class="search-cont">
            <input type="text" class="search-bar" placeholder="Look for your favorite toys..." >
            <button class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        `;
    }

    getStyle(){
        return`
        .search-cont {
            display: flex;
            flex-direction: row;
            position: relative;
            display: inline-block;
        }

        .search-cont input {
            padding: 3px 10px;
            border-radius: 20px; 
            flex-grow: 3;
            border:  grey;
            background: lightgrey;

        }

        .search-cont button {
            position: absolute;
            top: 0;
            right: 0;
            border: none;
            background: none;
            color: grey;
            cursor: pointer;
            items-align: center;
        }

        
        `
    }
    
}
customElements.define('search-bar', SearchBar);