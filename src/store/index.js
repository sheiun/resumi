import { createStore } from "vuex";
import comps from "../data/2021-01-04.json";
import job from "../data/2021-01-04_jobs.json";

export default createStore({
  state: {
    text: "",
    sidebar: null,
    popup: null,
    popupData: null,
    map: null,
    markers: [],
    indus: [],
    comps,
    job, // {id1: [job1, job2], id2: [job3, job4, ...], ...}
  },
  mutations: {
    updateMarkers(state) {
      let found = state.text == "";
      for (const i in state.comps) {
        const marker = state.markers[i];
        if (
          comps[i].用人單位名稱.includes(state.text) &&
          (state.indus.length == 0 || state.indus.includes(comps[i].產業別))
        ) {
          if (!found) {
            marker.openPopup();
            state.map.setView([marker._latlng.lat, marker._latlng.lng], 13);
            found = true;
          }
          marker._icon.style.display = "";
          marker._shadow.style.display = "";
        } else {
          marker._icon.style.display = "none";
          marker._shadow.style.display = "none";
        }
      }
    },
  },
  actions: {
    openSidebar(context) {
      if (context.state.sidebar) {
        context.state.sidebar.open();
      }
    },
    openPopup(context, data) {
      if (context.state.popup && !context.state.popup.isOpen) {
        context.state.popupData = data;
        context.state.popup.open();
      }
    },
    search(context, text) {
      context.state.text = text;
      context.commit("updateMarkers");
    },
    filter(context, indus) {
      context.state.indus = indus;
      context.commit("updateMarkers");
    },
  },
  modules: {},
});
