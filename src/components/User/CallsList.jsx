import Call from "./Call";

const CallsList = ({ CallsList }) => {
  return (
    <div className="contacts-list">
      {CallsList.map((call) => (
        <Call key={call.ID} call={call} />
      ))}
    </div>
  );
};

export default CallsList;
