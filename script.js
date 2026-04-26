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

if (document.getElementById("memberForm")) {
  document.getElementById("memberForm").addEventListener("submit", function(e){
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let minat = document.getElementById("minat").value;

    document.getElementById("result").innerHTML =
      `<p>Berhasil: ${nama} - ${email} - ${minat}</p>`;

    alert("Data berhasil disimpan!");
  });
}

function playAudio() {
  document.getElementById("audio").play();
}

function pauseAudio() {
  document.getElementById("audio").pause();
}