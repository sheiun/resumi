<template>
  <div id="map"></div>
</template>

<script>
import L from "leaflet";
const makeIcon = (color) =>
  new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

const icons = {
  default: new L.Icon.Default(),
  green: makeIcon("green"),
  red: makeIcon("red"),
  violte: makeIcon("violet"),
  grey: makeIcon("grey"),
};

export default {
  name: "Map",
  mounted() {
    const map = L.map("map").setView([25.033, 121.5654], 11);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      minZoom: 6,
      maxZoom: 16,
      tileSize: 512,
      zoomOffset: -1,
      detectRetina: true,
    }).addTo(map);

    const markers = [];
    this.$store.state.comps.forEach((comp) => {
      if (!this.$store.state.myComps.includes(comp.用人單位名稱)) return;
      const jobs = this.$store.state.job[comp.id];
      const marker = L.marker([comp.經度, comp.緯度], {
        title: comp.用人單位名稱 + "       " + comp.單位地址,
        icon:
          jobs.length == 1
            ? icons.default
            : jobs.length == 2
            ? icons.green
            : jobs.length == 3
            ? icons.red
            : icons.violte,
        riseOnHover: true,
      });
      marker.addTo(map);
      marker.bindPopup(
        Object.keys(comp)
          .filter((k) => !["id", "經度", "緯度"].includes(k))
          .map((k) =>
            k == "用人單位名稱" ? "<b>" + comp[k] + "</b><hr />" : comp[k]
          )
          .join("<br />")
      );
      marker.on("contextmenu", () => {
        // 細項
        this.$store.dispatch("openPopup", {
          title: comp.用人單位名稱,
          content:
            Object.keys(comp)
              .filter((k) => !["id", "經度", "緯度"].includes(k))
              .map((k) =>
                k == "用人單位名稱" ? "<b>" + comp[k] + "</b><hr />" : comp[k]
              )
              .join("<br />") +
            "<hr />" +
            this.$store.state.job[comp.id]
              .map(
                (comp) =>
                  "<table>" +
                  Object.entries(comp)
                    .filter((kv) => !["id"].includes(kv[0]))
                    .map(
                      (kv) =>
                        `<tr><td>${kv[0]}</td><td>${kv[1]
                          .toString()
                          .replaceAll("\n", "<br />")}</td><tr/>`
                    )
                    .join("") +
                  "</table>"
              )
              .join("<hr />"),
        });
      });
      markers.push(marker);
    });

    map.setView([25.033, 121.5654], 11);
    this.$store.state.map = map;
    this.$store.state.markers = markers;
  },
};
</script>

<style>
#map {
  z-index: 100;
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
}

@media only screen and (max-width: 600px) {
  #map {
    top: 54px;
  }
}
</style>
