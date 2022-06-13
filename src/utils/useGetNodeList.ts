import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { nodeListAction } from '../reduxStore';
import { nodeListType } from '../reduxStore/nodeListReducer/types';
import { getNodeLists } from '../selectors';

export const useGetNodeList = (): nodeListType[] => {
  const dispatch = useDispatch();

  const currentNodeList = useSelector(getNodeLists);

  useEffect(() => {
    const currentNodeListAsString = localStorage.getItem('currentNodeList');
    currentNodeListAsString &&
      dispatch(
        nodeListAction.setNodeListInLocalStorage(JSON.parse(currentNodeListAsString)),
      );
  }, []);

  useEffect(() => {
    localStorage.setItem('currentNodeList', JSON.stringify(currentNodeList));
  }, [currentNodeList]);

  return currentNodeList;
};
