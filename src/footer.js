export function footerSection() {
  const pageContent = document.createElement("footer");

  pageContent.innerHTML = `
      <p class="container">&copy; 2023 Fake Restaurant. All rights reserved.</p>
 `;

  return pageContent;
}
