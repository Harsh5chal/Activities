var button = document.getElementById("copyID"),
input = document.getElementById("content");

button.addEventListener("click", function(event) {
  event.preventDefault();
  input.select();
  document.execCommand("copy");
});
