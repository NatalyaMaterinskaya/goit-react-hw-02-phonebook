export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};
