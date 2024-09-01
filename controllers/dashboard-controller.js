import { stationStore } from "../models/station-store.js";
import { accountsController } from "./accounts-controller.js";

export const dashboardController = {
  async index(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const viewData = {
      title: "Station Dashboard",
<<<<<<< HEAD
      stations: await stationStore.getStationsByUserId(loggedInUser._id),  // Use the correct method name
      loggedInUser: loggedInUser,
=======
      stations: await stationStore.getAllStations(),
      loggedInUser: loggedInUser,  
>>>>>>> 94b4832334991f581d36e4ae8779c775d5a68488
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },

  async addStation(request, response) {
    try {
<<<<<<< HEAD
      const loggedInUser = await accountsController.getLoggedInUser(request);
      const newStation = {
        title: request.body.title,
        userid: loggedInUser._id,  // Associate the station with the logged-in user
=======
      const newStation = {
        title: request.body.title,
        
>>>>>>> 94b4832334991f581d36e4ae8779c775d5a68488
      };
      const station = await stationStore.addStation(newStation);
      if (!station || !station._id) {
        throw new Error("Failed to add station or generate _id");
      }
      console.log("New station added with _id:", station._id);
      response.redirect(`/station/${station._id}`);
    } catch (error) {
<<<<<<< HEAD
=======
     
>>>>>>> 94b4832334991f581d36e4ae8779c775d5a68488
      console.error("Error in addStation:", error);
      response.status(500).send("Internal Server Error");
    }
  },

  async deleteStation(request, response) {
    try {
      const stationId = request.params.id;
      await stationStore.deleteStationById(stationId);
      console.log(`Station with id ${stationId} deleted`);
      response.redirect("/dashboard");
    } catch (error) {
      console.error("Error in deleteStation:", error);
      response.status(500).send("Internal Server Error");
    }
  },
};