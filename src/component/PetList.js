import React from "react";
import PropTypes from "prop-types";

TaskList.propTypes = {
    pets: PropTypes.array,
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
};

function TaskList(props) {
    console.log("task list");
    console.log(props.pets);
    function _handelClickDelete(pet) {
        if (pet) {
            props.onDelete(pet);
        }
    }
    function _handelClickUpdate(pet) {
        if (pet) {
            props.onUpdate(pet);
        }
    }

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
                {props.pets.map((pet, index) => {
                    return (
                        <tr key={index}>
                            <td className="text-center">{pet.id}</td>
                            <td className="text-center">{pet.name}</td>
                            <td className="text-center">{pet.species}</td>
                            <td className="text-center">{pet.age}</td>
                            <td className="text-center">
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    style={{ marginBottom: "5px" }}
                                    onClick={() => _handelClickUpdate(pet)}
                                >
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => _handelClickDelete(pet)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default TaskList;
