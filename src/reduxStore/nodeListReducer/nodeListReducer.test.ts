import { nodeListAction } from './nodeListAction';
import { nodeListReducer } from './nodeListReducer';
import { initialNodeListType, nodeListType } from './types';

const startState: initialNodeListType = {
  nodeLists: [
    {
      id: '1',
      title: 'first',
      node: [
        { id: '01', title: '01Title', description: '01description', isCompleted: false },
        { id: '02', title: '02Title', description: '02description', isCompleted: false },
      ],
    },
    {
      id: '2',
      title: 'second',
      node: [
        { id: '02', title: '02Title', description: '01description', isCompleted: false },
        { id: '02', title: '02Title', description: '02description', isCompleted: false },
      ],
    },
  ] as nodeListType[],
};

test('notes should be added to lists', () => {
  const endState1 = nodeListReducer(
    startState,
    nodeListAction.addNewNodeInList('1', 'NewNodeList1', 'NewNodeDescription1'),
  );

  const endState2 = nodeListReducer(
    startState,
    nodeListAction.addNewNodeInList('2', 'NewNodeList2', 'NewNodeDescription2'),
  );

  expect(endState1.nodeLists.length).toBe(2);

  expect(endState1.nodeLists[0].node.length).toBe(3);
  expect(endState1.nodeLists[0].node[2].title).toBe('NewNodeList1');
  expect(endState1.nodeLists[0].node[2].description).toBe('NewNodeDescription1');

  expect(endState2.nodeLists[1].node.length).toBe(3);
  expect(endState2.nodeLists[1].node[2].title).toBe('NewNodeList2');
  expect(endState2.nodeLists[1].node[2].description).toBe('NewNodeDescription2');
});

test('the title of the new note should be equal to "NewNodeList"', () => {
  const endState = nodeListReducer(
    startState,
    nodeListAction.addNewNodeList('NewNodeList'),
  );

  expect(endState.nodeLists.length).toBe(3);
  expect(endState.nodeLists[2].title).toBe('NewNodeList');
});

test('number of headers should be equal to "1"', () => {
  const endState = nodeListReducer(startState, nodeListAction.removeNodeList('1'));

  expect(endState.nodeLists.length).toBe(1);
  expect(endState.nodeLists[0].title).toBe('second');
  expect(endState.nodeLists[0].id).toBe('2');
});

test('number of headers should be equal to "1"', () => {
  const endState = nodeListReducer(
    startState,
    nodeListAction.removeNodeFromList('1', '01'),
  );

  expect(endState.nodeLists[0].node.length).toBe(1);
  expect(endState.nodeLists[0].node[0].title).toBe('02Title');
  expect(endState.nodeLists[0].node[0].id).toBe('02');
  expect(endState.nodeLists[0].node[0].description).toBe('02description');
});

test('note status should be changed to', () => {
  const endState = nodeListReducer(
    startState,
    nodeListAction.changeNodeStatusInList('1', '01', true),
  );

  expect(endState.nodeLists[0].node[0].isCompleted).toBe(true);
  expect(endState.nodeLists[0].node[1].isCompleted).toBe(false);
});

test('title should be changed', () => {
  const endState = nodeListReducer(
    startState,
    nodeListAction.changeNodeListTitle('1', 'updateTitle'),
  );

  expect(endState.nodeLists[0].title).toBe('updateTitle');
});

test('title item list should be changed', () => {
  const endState = nodeListReducer(
    startState,
    nodeListAction.changeNodeListItemTitle('1', '02', 'updateTitleItem'),
  );

  expect(endState.nodeLists[0].node[1].title).toBe('updateTitleItem');
});

test('description item list should be changed', () => {
  const endState = nodeListReducer(
    startState,
    nodeListAction.changeNodeListItemDescription('1', '02', 'updateDescriptionItem'),
  );

  expect(endState.nodeLists[0].node[1].description).toBe('updateDescriptionItem');
});
