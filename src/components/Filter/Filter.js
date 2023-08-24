import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={value}
        onChange={evt => onChangeFilter(evt.target.value)}
      />
    </Label>
  );
};
