import {fireEvent} from '@testing-library/dom';
import MultipleChoice from '../index';

describe('Unit test MultipleChoice onEvent', () => {

  const expectedLabels = ['Orange', 'Banana', 'Lemon'];
  const expectedValues = ['orange', 'banana', 'lemon'];

  test('Function onChange event run successfully', () => {
    const items = [
      {
        label: expectedLabels[0],
        value: expectedValues[0],
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1],
      }
    ];
    const multipleChoice = new MultipleChoice({
      items: items,
      value: [expectedValues[0], expectedValues[1]],
    });
    const container = multipleChoice.render();
    multipleChoice.on('change', (e: any) => {
      expect(e).toEqual([expectedValues[1]]);
    });
    fireEvent.click(container);
    expect(multipleChoice.getValue()).toEqual([expectedValues[0], expectedValues[1]]);
    fireEvent.click(container.children[0].children[0]);
    expect(multipleChoice.getValue()).toEqual([expectedValues[1]]);
  });

  // According to user guide, it supports only change event, but it works.
  // This will be fixed.
  test('Function onClick event will not work', () => {
    const multipleChoice = new MultipleChoice();
    const container = multipleChoice.render();
    let counter = 0;
    multipleChoice.on('click', (e: string[]) => {
      multipleChoice.addItem({
        value: expectedValues[counter]
      });
      counter += 1;
    });
    fireEvent.click(container);
    expect(multipleChoice.getItems()).toEqual([]);
    fireEvent.click(container.children[0]);
    expect(multipleChoice.getItems()).toEqual([]);
  });
});