<template>
  <div id="map"></div>
</template>

<script>
import comps from "../data/2020-10-06.json";
import cities from "../data/cities.json";
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
  grey: makeIcon("grey"),
};

export default {
  name: "Map",
  computed: {
    noAddrComps() {
      return comps.filter((comp) => !comp.地址);
    },
  },
  mounted() {
    const map = L.map("map").setView([25.033, 121.5654], 11);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        minZoom: 7,
        maxZoom: 16,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
      }
    ).addTo(map);

    const markers = [];
    comps.forEach((comp) => {
      let marker;
      if (comp.地址) {
        marker = L.marker([comp.經度, comp.緯度], {
          title: comp.地址,
        });
      } else {
        marker = L.marker(
          cities[comp.地點].map((v) => v + Math.random() / 50),
          {
            icon: icons.grey,
          }
        );
      }
      marker.addTo(map);
      marker.bindPopup(`${comp.用人單位名稱}`);
      markers.push(marker);
    });

    map.setView([25.033, 121.5654], 11);
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
