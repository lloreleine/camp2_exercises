const twitson = require('../twitson');

const fakeAnalyze = {
  sadness: 0.073529,
  joy: 0.469108,
  fear: 0.053083,
  disgust: 0.039364,
  anger: 0.035873
};

test("should reformate emotions %", () => {
  expect(twitson.renderDataEmotion(fakeAnalyze).toEqual({
  sadness: '7.35 %',
  joy: '46.91 %',
  fear: '5.31 %',
  disgust: '3.94 %',
  anger: '3.59 %'
})
);
})
