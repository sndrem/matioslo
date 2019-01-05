import fire from "../tools/firebase";

const ref = fire.database().ref("/restaurants");

const restaurantService = {
  getTopRestaurants: (orderBy, limit, cb) => {
    ref
      .orderByChild(orderBy)
      .limitToFirst(limit)
      .on("value", snapshot => {
        const sorted = [];
        snapshot.forEach(child => {
          sorted.push(child.val());
        });
        cb(sorted.reverse());
      });
  }
};

export default restaurantService;
