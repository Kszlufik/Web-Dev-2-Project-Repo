import { stationStore } from "../models/station-store.js";
import { detailStore } from "../models/detail-store.js";

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const viewData = {
      title: "station",
      station: station,
    };
    response.render("station-view", viewData);
  },

  async addDetail(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const newDetail = {
      code: request.body.code,
      temp: request.body.temp,
      speed: request.body.speed,
      direction: request.body.direction,
      pressure: request.body.pressure,
    };
    console.log(`adding Details ${newDetail.title}`);
    await detailStore.addDetail(station._id, newDetail);
    response.redirect("/station/" + station._id);
  },
};
