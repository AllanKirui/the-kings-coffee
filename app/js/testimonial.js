// Testimonial switching functionality
const testimonial = document.querySelector(".testimonial-text");
const customerImage = document.querySelector(".customer-image");
const customerName = document.querySelector(".customer-name");

// Store testimonials in an array
const testimonialsDB = [
  {
    name: "Sherrie",
    photo: "../../img/customer-1.png",
    text: '"This is my favorite coffee shop. Freshly roasted coffee that they can make with their own home made coconut milk if you want. Lovely staff, very friendly and helpful."',
  },
  {
    name: "Phillip",
    photo: "../../img/customer-2.png",
    text: '"I stumbled across this place and so glad I did. Really amazing buzzing vibe with quirky interior. More importantly, the coffee is superb so much so I brought some home. The varied menu and staff are great!"',
  },
  {
    name: "Jonathan",
    photo: "../../img/customer-3.png",
    text: '"Friendly service and awesome coffee which they always top off with some new amazing coffee art."',
  },
  {
    name: "Allan",
    photo: "../../img/customer-4.png",
    text: "\"Hi, I'm the creator of this site. I love building websites and making the process fun whenever I can, and so I thought to myself why not throw in my own testimonial. I hope you like what you've seen so far :D\"",
  },
];

// Update the testimonials in the DOM
let index = 1;
function updateTestimonial() {
  const { name, photo, text } = testimonialsDB[index];

  testimonial.innerHTML = text;
  customerName.innerHTML = name;
  customerImage.src = photo;

  index++;

  // Restart the slider when the final testimonial is reached
  if (index > testimonialsDB.length - 1) {
    index = 0;
  }
}

// Call the function every 12 seconds
setInterval(updateTestimonial, 12000);
