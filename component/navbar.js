class NavBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode : 'open'});
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
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
                <img src="./image/person.png" alt="User Icon"/> <a href="./sign.html" class="link-log">Sign in / Register</a>
                <a href="./basket.html"><button class="cart-btn"><i class="fa-solid fa-basket-shopping" style="color: #000000;"></i></button></a>
            </div>
        </nav>
        `;
        
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

        .nav-list li a:hover {
            color:rgb(240, 0, 0);
        }

        .nav-log a:hover {
            color:rgb(240, 0, 0);
        }
        
        .nav-log button {
            background: none;
            border-radius: 15px;
            cursor: pointer;
            font-size: 15px;
            margin-left: 10px;
            padding: 5px 22px;
            border: 1px solid lightgrey;
        }
        
        .nav-log button:hover {
            border: 1px solid rgb(5, 5, 5);
        }
        `

    }




}

customElements.define('nav-bar', NavBar);