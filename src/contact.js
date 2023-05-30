export function contactSection() {
  const pageContent = document.createElement("section");

  pageContent.innerHTML = `
  <div class="container">
      <h2>Contact Us</h2>
      <p>For reservations or any inquiries, please reach out to us:</p>
      <ul>
        <li>Phone: 123-456-7890</li>
        <li>Email: info@fakerestaurant.com</li>
        <li>Address: 123 Fake Street, City, Country</li>
      </ul>
      </div>`;

  return pageContent;
}
