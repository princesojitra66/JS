  function showName() {
      const name = document.getElementById("nameInput").value;
      const count = name.length;

      document.getElementById("displayName").textContent = name;
      document.getElementById("charCount").textContent = count;
    }