const diary = document.getElementById("diary");

// Load saved text
diary.value = localStorage.getItem("daylightDiary") || "";

// Save automatically when typing
diary.addEventListener("input", () => {
  localStorage.setItem("daylightDiary", diary.value);
});
