import fire from "../tools/firebase";

const ref = fire.database().ref("/restaurants");

const restaurantService = {
  getTopRestaurants: (orderBy, limit, cb) => {
    ref
      .orderByChild(orderBy)
      .limitToFirst(limit)
      .once("value", snapshot => {
        const sorted = [];
        snapshot.forEach(child => {
          sorted.push(child.val());
        });
        cb(sorted.reverse());
      });
  },
  getAllRestaurants: cb => {
    ref.once("value", snapshot => {
      cb(snapshot.val());
    });
  },
  getRestaurant: (id, cb) => {
    ref.child(id).once("value", snapshot => {
      cb(snapshot.val());
    });
  }
};

export default restaurantService;
