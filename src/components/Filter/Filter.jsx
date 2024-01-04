import { Wrapper } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const filterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <Wrapper>
      <label htmlFor="Filter">Find contacts by name</label>
      <input type="text" name="Filter" value={filter} onChange={filterChange} />
    </Wrapper>
  );
};
