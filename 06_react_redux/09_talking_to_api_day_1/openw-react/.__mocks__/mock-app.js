
const fakeFetch = jest.fn(() =>
  Promise.resolve({
    json: function() {
      return Promise.resolve({
        main: {temp:5.99},
        weather:[{main:"Mist"}]
      });
    }
  })
);


module.exports = fakeFetch;
