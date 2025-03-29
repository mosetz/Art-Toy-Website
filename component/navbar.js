class NavBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode : 'open'});
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
        <style>${this.getStyle}</style>
        <nav id="main-nav" class="nav-bar">
            <figure class="nav-logo"></figure>
            <ul class="nav-list">
                <a>New & Feature</a>
                <a>SERIES</a>
                <a>TYPES</a>
                <a>EVENTS</a>
                <a>STORE</a>
                <a>ABOUT US</a>
            </ul>
        </nav>
        <div class="nav-search">
            <input type="text" placeholder="Search...">
            <button>Search</button>
        </div>
        `
    }
    
    getStyle(){
        return``
    }



}

customElements.define('nav-bar', NavBar);