export function aboutSection() {
  const about = document.createElement("div");

  about.innerHTML = `
      <h2>About Us</h2>
      <p>
        Welcome to the Fake Restaurant! We pride ourselves on providing a unique
        dining experience with delicious food and exceptional service. Our
        talented chefs use only the finest ingredients to create mouthwatering
        dishes that will satisfy your taste buds.
      </p>`;

  return about;
}
