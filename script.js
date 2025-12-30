let entries = JSON.parse(localStorage.getItem("daylightEntries")) || [];
let currentEntryId = null;

const diary = document.getElementById("diary");
const titleInput = document.getElementById("entryTitle");
const newEntryBtn = document.getElementById("newEntry");
const entryList = document.getElementById("entryList");

// Render list of entries
function renderEntries() {
  entryList.innerHTML = "";

  entries.forEach(entry => {
    const li = document.createElement("li");

    const titleSpan = document.createElement("span");
    titleSpan.textContent = entry.title;
    titleSpan.style.flex = "1";

    const delBtn = document.createElement("button");
    delBtn.textContent = "✕";
    delBtn.className = "delete-btn";
    delBtn.onclick = (e) => {
      e.stopPropagation();
      deleteEntry(entry.id);
    };

    if (entry.id === currentEntryId) {
      li.classList.add("active");
    }

    li.appendChild(titleSpan);
    li.appendChild(delBtn);

    li.onclick = () => loadEntry(entry.id);

    entryList.appendChild(li);
  });
}

// Create a new entry
newEntryBtn.onclick = () => {
  const id = Date.now();
  const title = "Untitled Entry";
  const newEntry = { id, title, text: "" };

  entries.push(newEntry);
  saveEntries();
  renderEntries();
  loadEntry(id);
};

// Load an entry into the UI
function loadEntry(id) {
  const entry = entries.find(e => e.id === id);
  if (!entry) return;

  currentEntryId = id;
  titleInput.value = entry.title;
  diary.value = entry.text;

  renderEntries();
}

// Delete an entry
function deleteEntry(id) {
  entries = entries.filter(e => e.id !== id);

  // If deleting the active entry, clear editor
  if (currentEntryId === id) {
    currentEntryId = null;
    titleInput.value = "";
    diary.value = "";
  }

  saveEntries();
  renderEntries();
}

// Save entries to localStorage
function saveEntries() {
  localStorage.setItem("daylightEntries", JSON.stringify(entries));
}

// Autosave text
diary.addEventListener("input", () => {
  if (currentEntryId === null) return;
  const entry = entries.find(e => e.id === currentEntryId);
  entry.text = diary.value;
  saveEntries();
});

// Autosave title
titleInput.addEventListener("input", () => {
  if (currentEntryId === null) return;
  const entry = entries.find(e => e.id === currentEntryId);
  entry.title = titleInput.value || "Untitled Entry";
  saveEntries();
  renderEntries();
});

// Initial load
renderEntries();
