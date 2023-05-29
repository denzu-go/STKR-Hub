// header
class MyHeader extends HTMLElement {
	connectedCallback(){
		this.innerHTML = `
		<header>
        <div class="logo">
          <a href="index.html">
            <h1><img src="/img/logo.png" alt="">STKR Hub</h1>
          </a>
        </div>
        
        <nav>
          <ul>
            <li><a href="/html/creation.html">Creation</a></li>
            <li><a href="/html/components/allcomponents.html">Shop</a></li>
            <li><a href="/html/market-games.html">Market Games</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Support Center</a></li>
          </ul>
        </nav>

        <div class="action-bar">
          <ul>
            <li><a href="#">
              <div>
                <img src="/img/cart.png" alt="" class="icon">
              </div>
            </a></li>
          </ul>

          <ul>
            <li><a href="#">
              <div>
                <img src="/img/notification.png" alt="" class="icon">
              </div>
            </a></li>
          </ul>

          <ul>
            <li><a href="#">
              <div class="image-profile">
                <img src="/img/image-profile.png" alt="">
              </div>
            </a></li>
          </ul>
        </div>
      </header>
		`
	}
}
customElements.define('my-header', MyHeader);
// end of header


