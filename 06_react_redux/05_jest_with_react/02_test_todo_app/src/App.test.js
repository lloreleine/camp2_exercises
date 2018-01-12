import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

beforeAll(() => {
  configure({ adapter: new Adapter() });
});

test('Everything looks the same', () => {
  const component = renderer.create(<App />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("SetState with a new task when enter something", () => {
  const testInput = 'Do the laundry';
  const load = shallow(<App />);
  load.find("form input").simulate("change", {target: {value: testInput}});
  // console.log(load.state())
  expect(load.find("form input").props().value).toEqual(testInput);
});

test("Display a new task when click on Add", () => {
  const testInput = 'Do the laundry';
  const load = shallow(<App />);
  load.find("form input").simulate("change", {target: {value: testInput}});
  // [ { id: 1, label: 'Do the laundry', completed: true } ]

  load.find("form").simulate("submit", { preventDefault: () => {} });
  expect(load.find("li span").text()).toBe(testInput);
});

test("Add a delete button when a task is checked", () => {
  const testInput = 'Do the laundry';
  const load = shallow(<App />);
  load.find("form input").simulate("change", {target: {value: testInput}});
  load.find("form").simulate("submit", { preventDefault: () => {} });

  let testState = load.state();
  load.find("li input").simulate("change", 2);
  // [ { id: 2, label: 'Do the laundry', completed: true } ]

  expect(testState.tasks[0]).toMatchObject({"label": testInput});
});

test("Add 2 tasks and store those two in tasks:[] when checked", () => {
  expect.assertions(4);
  const testInput1 = 'Buy some bread';
  const testInput2= 'Wish a happy birthday to Medhi';
  const load = shallow(<App />);
  load.find("form input").simulate("change", {target: {value: testInput1}});
  load.find("form").simulate("submit", { preventDefault: () => {} });
  expect(load.find("li").at(0).find("span").text()).toBe(testInput1);

  load.find("form input").simulate("change", {target: {value: testInput2}});
  load.find("form").simulate("submit", { preventDefault: () => {} });
  expect(load.find("li").at(1).find("span").text()).toBe(testInput2);

  load.find("li").at(0).find("input").simulate("change", 3);
  load.find("li").at(1).find("input").simulate("change", 4);
  // [ { id: 3, label: 'Buy some bread', completed: true } ]
  // [ { id: 4, label: 'Wish a happy birthday to Medhi', completed: true } ]

  expect(load.state().tasks[0]).toMatchObject({"label": testInput1});
  expect(load.state().tasks[1]).toMatchObject({"label": testInput2});
});

// test('Array with Object Containing', () => {
//   expect(
//     [
//       { a: 1, b: 2 },
//       { c: 1, d: 1 }
//     ])
//     .toContainEqual(
//       expect.objectContaining({ a: 1, b: expect.anything() })
//     )
// })

test("Delete a task", () => {
  expect.assertions(2);
  const testInput1 = 'Buy some bread';
  const testInput2= 'Wish a happy birthday to Medhi';
  const load = shallow(<App />);
  load.find("form input").simulate("change", {target: {value: testInput1}});
  load.find("form").simulate("submit", { preventDefault: () => {} });
  load.find("form input").simulate("change", {target: {value: testInput2}});
  load.find("form").simulate("submit", { preventDefault: () => {} });

  load.find("li").at(0).find("input").simulate("change", 5);
  load.find("li").at(1).find("input").simulate("change", 6);
  // [ { id: 5, label: 'Buy some bread', completed: true } ]
  // [ { id: 6, label: 'Wish a happy birthday to Medhi', completed: true } ]

  load.find("li input").at(3).simulate("click", 6);

  expect(load.state().tasks[0]).toMatchObject({"label": testInput1});
  expect(load.state().tasks.length).toEqual(1);
});
