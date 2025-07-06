const input = document.getElementById("url");
const viewer = document.getElementById("viewer");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    let url = input.value.trim();
    if (!url.startsWith("http")) {
      url = "https://" + url;
    }
    viewer.src = url;
  }
});
