import { aboutSection } from "./about";
import { menuSection } from "./menu";
import { contactSection } from "./contact";
import { headerSection } from "./header";
import { footerSection } from "./footer";

import "./style.css";

function renderPage(element) {
  document.body.innerHTML = "";
  const content = document.createElement("div");
  content.classList.add("flex");

  content.innerHTML = "";
  content.appendChild(headerSection());
  content.appendChild(element);
  content.appendChild(footerSection());
  content.querySelector("#aboutBtn").addEventListener("click", () => {
    document.body.appendChild(renderPage(aboutSection()));
  });
  content.querySelector("#menuBtn").addEventListener("click", () => {
    document.body.appendChild(renderPage(menuSection()));
  });
  content.querySelector("#contactBtn").addEventListener("click", () => {
    document.body.appendChild(renderPage(contactSection()));
  });
  return content;
}

document.body.appendChild(renderPage(aboutSection()));
