import React, { useState } from "react";

function TaskForm(props) {
  const [name, setName] = useState();
  const [species, setSpecies] = useState();
  const [age, setAge] = useState();

  const _onHandleChange = (event) => {
    const target = event.target;
    const currentName = target.name;
    switch (currentName) {
      case "name":
        setName(event.target.value);
        break;
      case "species":
        setSpecies(event.target.value);
        break;
      case "age":
        setAge(event.target.value);
        break;
      default:
        break;
    }
  };
  const _onHandleSubmit = (event) => {
    event.preventDefault();
    props.setPets((prev) =>
      prev.concat({
        name,
        species,
        age,
        id: `${Math.floor(1 + Math.random() * 0x10000)
          .toString(16)
          .substring(1)}`
      })
    );

    // const data = {
    //   id: `${Math.floor(1 + Math.random() * 0x10000)
    //     .toString(16)
    //     .substring(1)}`,
    //   name: name,
    //   species: species,
    //   age: age
    // // };
    // console.log(data);
    // props.setTasks(data);
    //_onClear();
  };

  const _onClear = () => {
    setName("");
    setSpecies("Whale");
    setAge("");
  };

  return (
    <form onSubmit={_onHandleSubmit}>
      <div className="form-group">
        <label>Tên : </label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={_onHandleChange}
        />
      </div>
      <label>Species: </label>
      <select
        name="species"
        className="form-control"
        value={species}
        onChange={_onHandleChange}
      >
        <option value="Whale">Whale</option>
        <option value="Shark">Shark</option>
        <option value="Dinosaurs">dinosaurs</option>
        <option value="Phoenix">Phoenix</option>
      </select>
      <br></br>
      <label>Age: </label>
      <input
        type="number"
        className="form-control"
        name="age"
        min="1"
        value={age}
        onChange={_onHandleChange}
      />
      <br></br>
      <button type="submit" className="btn btn-warning">
        <span className="fa fa-plus mr-5"></span>Save
      </button>
      <button type="button" className="btn btn-danger" onClick={_onClear}>
        <i className="fas fa-times mr-5"></i>Clear
      </button>
    </form>
  );
}

export default TaskForm;
