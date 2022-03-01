$(".mobile").click(function () {
  $(".ul").toggleClass("toggle");
});

var span = document.querySelector(".up");
window.onscroll = function () {
  if (this.scrollY >= 300) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let nums = $(".images .num");
var map = L.map("map");

function startcount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 100);
}

for (let i = 0; i < nums.length; i++) {
  startcount(nums[i]);
}

const displaymap = () => {
  map.setView([29.969072, 32.536569], 13);
  var marker = L.marker([29.969072, 32.536569]).addTo(map);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(map);
};
displaymap();
