import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";

const db = initStore("details");

export const detailStore = {
  async getAllDetails() {
    await db.read();
    return db.data.details;
  },

  async addDetails(detailId, detail) {
    await db.read();
    detail._id = v4();
    detail.stationid = detailId;
    db.data.details.push(detail);
    await db.write();
    return detail;
  },

  async getDetailsByStationId(id) {
    await db.read();
    return db.data.details.filter((detail) => detail.stationid === id);
  },

  async getDetailById(id) {
    await db.read();
    return db.data.details.find((detail) => detail._id === id);
  },

  async deleteDetail(id) {
    await db.read();
    const index = db.data.details.findIndex((detail) => detail._id === id);
    db.data.details.splice(index, 1);
    await db.write();
  },

  async deleteAllDetails() {
    db.data.details = [];
    await db.write();
  },

  async updateDetails(detail, updatedDetail) {
    detail.code = updatedDetail.code;
    detail.temp = updatedDetail.temp;
    detail.speed = updatedDetail.speed;
    detail.direction = updatedDetail.direction;
    detail.pressure = updatedDetail.pressure;
    await db.write();
  },
};
