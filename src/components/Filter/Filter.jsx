import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => (
  <FilterContainer>
    <FilterLabel htmlFor="filter">
      Find contact by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        placeholder="Search"
        onChange={e => {
          onChangeFilter(e.target.value);
        }}
      ></FilterInput>
    </FilterLabel>
  </FilterContainer>
);
