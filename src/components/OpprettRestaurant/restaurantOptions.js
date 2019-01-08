const mapToOptions = list =>
  list.map(x => ({
    value: x,
    text: x,
    key: x
  }));

const restaurantKategorier = [
  "Amerikansk",
  "Asiatisk",
  "BBQ",
  "Indisk",
  "Italiensk",
  "Nordisk",
  "Thai"
];
const priser = ["Billig", "Medium", "Dyrt"];
const service = ["Dårlig", "Helt grei", "Bra", "Eksemplarisk"];

const restaurantOptions = mapToOptions(restaurantKategorier);
const priceOptions = mapToOptions(priser);
const serviceOptions = mapToOptions(service);

export { restaurantOptions, priceOptions, serviceOptions };
