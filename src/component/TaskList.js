import React from "react";

function TaskList(props) {
  console.log(props.tasks);
  const _onDelete = (index) => {
    props.onDelete(index);
  };
  const _onUpdate = (index) => {
    props.onUpdate(index);
  };
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th style={{ width: "10%" }} className="text-center">
            id
          </th>
          <th style={{ width: "30%" }} className="text-center">
            Name
          </th>
          <th style={{ width: "20%" }} className="text-center">
            Species
          </th>
          <th style={{ width: "20%" }} className="text-center">
            Age
          </th>
          <th style={{ width: "20%" }} className="text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {/* {props.tasks.map((task, index) => {
          return (
            <tr key={index}>
              <td className="text-center">{task.id}</td>
              <td className="text-center">{task.name}</td>
              <td className="text-center">{task.species}</td>
              <td className="text-center">{task.age}</td>
              <td className="text-center">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => {
                    _onUpdate(index);
                  }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    _onDelete(index);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })} */}
      </tbody>
    </table>
  );
}

export default TaskList;
