window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    let target = this.getAttribute("href");

    if (target && !target.startsWith("#")) {
      e.preventDefault();

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = target;
      }, 300);
    }
  });
});

let members = [
  { nama: "Zahwa", email: "zahwa@gmail.com", minat: "Web Development" },
  { nama: "Citra", email: "citra@gmail.com", minat: "UI/UX Design" }
];

document.addEventListener("DOMContentLoaded", function () {
  renderTable();

  let form = document.getElementById("memberForm");

  if (form) {
    form.addEventListener("submit", function(e){
      e.preventDefault();

      let nama = document.getElementById("nama").value;
      let email = document.getElementById("email").value;
      let minat = document.getElementById("minat").value;

      members.push({ nama, email, minat });

      renderTable();

      form.reset();
      alert("Data berhasil disimpan!");
    });
  }
});

function renderTable() {
  let tbody = document.querySelector("#memberTable tbody");

  if (!tbody) return;

  tbody.innerHTML = "";

  members.forEach(m => {
    tbody.innerHTML += `
      <tr>
        <td>${m.nama}</td>
        <td>${m.email}</td>
        <td>${m.minat}</td>
      </tr>
    `;
  });
}

function playAudio() {
  document.getElementById("audio").play();
}

function pauseAudio() {
  document.getElementById("audio").pause();
}