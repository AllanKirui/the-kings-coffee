// Wave effect functionality on form labels
const labels = document.querySelectorAll(".form-control label");

// Loop through each label, adding a span with a specified transition delay to them
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join("");
});
