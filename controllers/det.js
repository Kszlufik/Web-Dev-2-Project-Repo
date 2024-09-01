import { stationStore } from "../models/station-store.js";
import { detailStore } from "../models/detail-store.js";

export const detailController = {
  async index(request, response) {
    const stationId = request.params.stationId;
    const detailId = request.params.detailId;
    console.log(`Editing Detail ${detailId} from Station ${stationId}`);
    
    const viewData = {
      title: "Edit Detail",
      station: await stationStore.getStationById(stationId),
      detail: await detailStore.getDetailById(detailId),
    };
    
    response.render("detail-view", viewData);
  },

  async update(request, response) {
    try {
      const stationId = request.params.stationId;
      const detailId = request.params.detailId;

      const updatedDetail = {
        code: request.body.code,
        temp: Number(request.body.temp),
        speed: Number(request.body.speed),
        direction: request.body.direction,
        pressure: Number(request.body.pressure),
      };

      console.log(`Updating Detail ${detailId} from Station ${stationId}`);

      await detailStore.updateDetails(detailId, updatedDetail);
      response.redirect("/station/" + stationId);
    } catch (error) {
      console.error("Error updating detail:", error.message);
      response.status(500).send("Error updating detail.");
    }
  },
};