<template>
  <div id="map"></div>
</template>

<script>
import L from "leaflet";
import icons from "leaflet-color-number-markers";

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
      const jobs = this.$store.state.job[comp.id];
      const numJob = jobs.reduce(
        (total, job) => total + Math.max(job.國內役男, job.國外役男),
        0
      );
      const marker = L.marker([comp.經度, comp.緯度], {
        title: comp.用人單位名稱 + "       " + comp.單位地址,
        icon:
          jobs.length == 1
            ? icons.red.numbers[numJob]
            : jobs.length == 2
            ? icons.orange.numbers[numJob]
            : jobs.length == 3
            ? icons.yellow.numbers[numJob]
            : jobs.length == 4
            ? icons.green.numbers[numJob]
            : jobs.length == 5
            ? icons.blue.numbers[numJob]
            : icons.violet.numbers[numJob],
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
  margin-top: 64px;
  width: 100%;
  height: calc(100vh - 64px);
}

@media only screen and (max-width: 600px) {
  #map {
    margin-top: 54px;
  }
}
</style>
