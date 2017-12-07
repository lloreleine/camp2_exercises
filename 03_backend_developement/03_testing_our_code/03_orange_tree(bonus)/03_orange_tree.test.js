const orangeTree = require("./03_orange_tree");

beforeEach(() => {
  orangeTree.seed();
});

test("fonction seed - reinitialize", () => {
  orangeTree.ageOneYear();
  orangeTree.seed();
  expect(orangeTree.age).toBe(0);
  expect(orangeTree.oranges).toBe(0);
  expect(orangeTree.height).toBe(0);
  expect(orangeTree.alive).toBe(true);
});

// describe("pick an orange", () => {
//   test("when there are some", () => {
//     orangeTree.oranges = 1;
//     orangeTree.pickAnOrange();
//     expect(orangeTree.oranges).toBe(0);
//   });
//   test("when there are none", () => {
//     orangeTree.oranges = 0;
//     expect(orangeTree.pickAnOrange()).toBe(false);
//   });
// });

test("pick an orange when there are some", () => {
  for(let i=0; i<5; i++){
    orangeTree.ageOneYear();
  }
  const nbOranges = orangeTree.oranges;
  expect(orangeTree.pickAnOrange()).toBe(true);
  expect(orangeTree.oranges).toBe(nbOranges-1);
});

test("pick an orange if there are none", () => {
  expect(orangeTree.pickAnOrange()).toBe(false);
});

describe("function ageOneYear", () => {
  test("increment age", () => {
    orangeTree.seed();
    for(let i=0; i<100; i++){
      orangeTree.age = i;
      orangeTree.ageOneYear();
      expect(orangeTree.age).toBe(i+1);
    }
  });
  test("launch function grow, increase height", () => {
    orangeTree.seed();
    while(orangeTree.age>=0 && orangeTree.age<100){
      orangeTree.ageOneYear();
      if(orangeTree.age<10){
        expect(orangeTree.height).toBe(orangeTree.age*25);
      } else if(orangeTree.age>=10 && orangeTree.age<20){
        expect(orangeTree.height).toBe(225+10*(orangeTree.age-9));
      } else{
        expect(orangeTree.height).toBe(orangeTree.height);
      }
    }
  });
  test("produce orange with age as parameter", () => {
    orangeTree.seed();
    while(orangeTree.age>=0 && orangeTree.age<100){
      orangeTree.ageOneYear();
      if(orangeTree.age >=5 && orangeTree.age <10){
        expect(orangeTree.oranges).toBe(10);
      } else if(orangeTree.age >=10 && orangeTree.age <20){
        expect(orangeTree.oranges).toBe(20);
      } else if(orangeTree.age >=20 && orangeTree.age <40){
        expect(orangeTree.oranges).toBe(5);
      } else {
        expect(orangeTree.oranges).toBe(0);
      }
    }
  });
  test("fonction might die", () => {
    orangeTree.seed();
    orangeTree.age=49;
    while(orangeTree.alive && orangeTree.age <100){
      orangeTree.ageOneYear();
    }
    expect(orangeTree.alive).toBe(false);
  });
});

test("tree should die between 50 and 100", () => {
  while(orangeTree.alive && orangeTree.age <100){
    orangeTree.ageOneYear();
  }
  expect(orangeTree.alive).toBe(false);
  expect(orangeTree.age > 50).toBe(true);
  expect(orangeTree.age).toBeLessThanOrEqual(100);
});

test("tree status at 5 years", () => {
  for (let i=1; i<=5; i++){
    orangeTree.ageOneYear();
    expect(orangeTree.height).toBe(25*i);
  }
  expect(orangeTree.alive).toBe(true);
  expect(orangeTree.oranges).toBe(10);
  expect(orangeTree.age).toBe(5);
});
