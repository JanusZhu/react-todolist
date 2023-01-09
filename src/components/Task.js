export const Task = (props) => {
  return (
    <div key={props.id} className="flex justify-start items-center p-2 gap-2">
      <h1
        style={{
          textDecorationLine: props.completed ? "line-through" : "none",
        }}
        className="justify-self-start w-20 break-words"
      >
        {props.name}
      </h1>
      <div className="flex gap-4">
        <button
          className="bg-blue-100  px-4 rounded-md border"
          onClick={() => props.completeTask(props.id)}
        >
          Compete
        </button>
        <button
          className="bg-blue-100  px-2 rounded-md border"
          onClick={() => props.deleteTask(props.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};
