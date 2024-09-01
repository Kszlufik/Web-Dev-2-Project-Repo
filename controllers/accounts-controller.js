import { userStore } from "../models/user-store.js";

export const accountsController = {
  index(request, response) {
    const viewData = {
      title: "Login or Signup",
    };
    response.render("index", viewData);
  },

  login(request, response) {
    const viewData = {
      title: "Login to the Service",
    };
    response.render("login-view", viewData);
  },

  logout(request, response) {
    response.cookie("view", "");
    response.redirect("/");
  },

  signup(request, response) {
    const viewData = {
      title: "Login to the Service",
    };
    response.render("signup-view", viewData);
  },

  async register(request, response) {
    const user = request.body;
    await userStore.addUser(user);
    console.log(`registering ${user.email}`);
    response.redirect("/");
  },

  async authenticate(request, response) {
    const user = await userStore.getUserByEmail(request.body.email);
    if (user) {
<<<<<<< HEAD
      response.cookie("station", user.email);
=======
      response.cookie("view", user.email);
>>>>>>> 94b4832334991f581d36e4ae8779c775d5a68488
      console.log(`logging in ${user.email}`);
      response.redirect("/dashboard");
    } else {
      response.redirect("/login");
    }
  },

  async getLoggedInUser(request) {
<<<<<<< HEAD
    const userEmail = request.cookies.station; 
    return await userStore.getUserByEmail(userEmail);
},
=======
    const userEmail = request.cookies.playlist;
    return await userStore.getUserByEmail(userEmail);
  },
>>>>>>> 94b4832334991f581d36e4ae8779c775d5a68488
};