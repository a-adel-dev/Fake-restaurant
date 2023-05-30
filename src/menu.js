export function menuSection() {
  const pageContent = document.createElement("section");

  pageContent.innerHTML = `
    <div class="container">
      <h2>Our Menu</h2>
      <p>
        Explore our diverse menu featuring a wide range of culinary delights:
      </p>
      <ul>
        <li>Appetizers</li>
        <li>Main Courses</li>
        <li>Desserts</li>
        <li>Drinks</li>
      </ul>
      <p>
        Whether you're a vegetarian, a seafood lover, or a meat enthusiast, we
        have something for everyone.
      </p>
      </div>`;

  return pageContent;
}
