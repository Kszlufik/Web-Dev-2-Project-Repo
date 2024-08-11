import { stationStore } from "../models/station-store.js";
import { detailStore } from "../models/detail-store.js";

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    console.log(station);
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
    await detailStore.addDetails(station._id, newDetail);
    response.redirect("/station/" + station._id);
  },

 
  async deleteDetail(request, response) {
    const stationId = request.params.stationId;
    const detailId = request.params.detailId;
    console.log(`Deleting detail ${detailId} from station ${stationId}`);
    await detailStore.deleteDetail(detailId);
    response.redirect("/station/" + stationId);
  },
 
};
  