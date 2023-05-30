export function headerSection() {
  const pageContent = document.createElement("header");

  pageContent.innerHTML = `
      <div class="container">
      <h1>Welcome to the Fake Restaurant</h1>
      <nav>
        <ul>
          <li><a id="aboutBtn" href="#about">About</a></li>
          <li><a id="menuBtn" href="#menu">Menu</a></li>
          <li><a id="contactBtn" href="#contact">Contact</a></li>
        </ul>
      </nav>
      </div>`;

  return pageContent;
}
