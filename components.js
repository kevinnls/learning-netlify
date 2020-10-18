// import "components.css";
const componentsStyle = document.createElement("link");
componentsStyle.rel = "stylesheet";
componentsStyle.href = "/components.css";
componentsStyle.type = "text/css";
document.head.appendChild(componentsStyle);
class Header extends HTMLElement {
  home = {
    icon: "home",
    title: "Home",
    onClick: "#",
  };
  config = {
    icon: "edit",
    title: "configure",
    onClick: "#",
  };
  connectedCallback() {
    let primary = {};
    if (window.location.pathname !== "/") primary = this.home;
    else primary = this.config;
    this.innerHTML = `<nav class="nav-wrapper">
		<button title="${primary.title}" type="button" class="grid-col-1 button-info" onClick="${primary.onClick}">
		<span>
			<i class="material-icons-round	">${primary.icon}</i>
		</span>
		</button>
		
		<button title="info" type="button" class="grid-col-2 button-info" onClick="info()">
		<span>
			<i class="material-icons-round	">info</i>
		</span>
		</button>
	  </nav>`;
  }
}

class InfoModal extends HTMLElement {
  info(params) {
    console.log(params);
    document.getElementById("modal").style.display =
      document.getElementById("modal").style.display === "flex"
        ? "none"
        : "flex";
  }
  connectedCallback() {
    this.innerHTML = `<div id="modal" class="modal" onclick="info()">
        <div class="modalContent">
          <button title="close" class="button-close" aria-label="close" style="grid-column: 2; align-items: right;"
            onclick="info()">&times;</button>
          <div class="modalHeader">
            <h5 style="grid-column: 1;">
              What is this website?
            </h5>
    
          </div>
          <div class="modalBody">
            <p>a dummy Hello World website + pizzazz made by <a href="//github.com/kevinnls">kevinnls</a></p>
            <p>you can change the background colour by clicking on the <b>Disco!</b> button
              or by pressing <b>enter/return</b> on your keyboard.</p>
            <p>it was a dummy project to explore features on <a target="_blank" href="//netlify.com">Netlify.</a>
              but being as i am, i took too long and too much effort anyway! &#x1F389;</p>
            <p> ~kevinnls </p>
          </div>
          <div class="modalFooter">
            <a title="see the repo on GitHub" style="grid-column:2; vertical-align: middle;"
              href="//github.com/kevinnls/learning-netlify">
              <svg aria-label="GitHub Repository" viewBox="0 0 16 16" version="1.1" width="30" height="30"
                role="img">
                <path fill-rule="evenodd"
                  d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                </path>
              </svg>
            </a>
    
            <a title="see my profile on GitHub" style="grid-column:3; vertical-align: middle;"
              href="//github.com/kevinnls">
              <svg aria-label="GitHub Profile" height="28" viewBox="0 0 16 16" version="1.1" width="28"
                aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                </path>
              </svg>
            </a>
          </div>
        </div>
      </div>`;
  }
}
customElements.define("main-header", Header);
customElements.define("info-modal", InfoModal);