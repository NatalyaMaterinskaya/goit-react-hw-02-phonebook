import { Text, Btn } from './ContactItem.styled';

export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <Text>{name}</Text>
      <Text>{number}</Text>
      <Btn type="button" onClick={() => onDelete(id)}>
        Delete
      </Btn>
    </>
  );
};
