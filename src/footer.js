export function footerSection() {
  const pageContent = document.createElement("div");

  pageContent.innerHTML = `
    <footer>
      <p>&copy; 2023 Fake Restaurant. All rights reserved.</p>
    </footer> `;

  return pageContent;
}
