class NavBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode : 'open'});
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
        <style>${this.getStyle()}</style>
        <nav id="main-nav" class="nav-bar">
            <figure class="nav-logo"><img src="./image/popmartlogo.png"></figure>
            <ul class="nav-list">
                <li><a href="#">New & Feature</a></li>
                <li><a href="#">SERIES</a></li>
                <li><a href="#">TYPES</a></li>
                <li><a href="#">EVENTS</a></li>
                <li><a href="#">STORE</a></li>
                <li><a href="#">ABOUT US</a></li>
            </ul>
            <div class="nav-log">
                <img src="./image/person.png" alt="User Icon"/> <a href="#" class="link-log">Sign in / Register</a>
            </div>
        </nav>
        `
    }
    
    getStyle(){
        return`
        nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 20px;
            background: white;
            box-shadow: 0 1px 6px rgba(0,0,0,0.1);
            font-family: sans-serif;
        }
        
        .nav-logo img {
            hight: 80px;
            width: 80px;
        }

        .nav-list {
            display: flex;
            list-style: none;
            gap: 20px;
        }

        .nav-list li a {
            text-decoration: none;
            color: black;
            font-weight: bold;
            font-size: 16px;
        }
        
        .nav-log a {
            text-decoration: none;
            color: black;
            font-size: 16px;
        }

        .nav-log img {
            width: 15px;
            height: 15px;
            background-color: black;
        }
        `
    }



}

customElements.define('nav-bar', NavBar);