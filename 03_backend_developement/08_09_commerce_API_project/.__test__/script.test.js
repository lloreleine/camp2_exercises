const script = require("../script");

const dummyDataProducts = {
  id: '6b50b408-7ce8-4751-87b3-6f9c6f211974',
  decathlon_id: 8352765,
  title: 'CASQUETTE ADULTE ROSE',
  description: 'Conçu pour la pratique des sports de raquette par temps chaud.',
  brand_id: '201dd36a-83c8-4de1-b7cf-5a9f4d273129',
  min_price: 5.99,
  max_price: null,
  crossed_price: 0,
  percent_reduction: 0,
  image_path: '835/8352765/zoom_069e71c842cf4d20be1f78edbf1bba16.jpg',
  rating: 4.3
};

test("fetch Data from Products", () => {
  expect(script.fetchDataProducts()).toEqual(dummyDataProducts);
});


// insertPrdIntoCommerceApi
