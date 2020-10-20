import React, { useState } from "react";
import PropTypes from "prop-types";

PetFrom.propTypes = {
    onSubmit: PropTypes.func,
};

PetFrom.defaultProps = {
    onSubmit: null,
};

const input = {
    name: "name",
    species: "species",
    age: "age",
};
function PetFrom(props) {
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [age, setAge] = useState(1);

    function _handleSubmit(event) {
        event.preventDefault();
        if (!props.onSubmit) return;

        const formValue = {
            name: name,
            species: species,
            age: age,
        };
        props.onSubmit(formValue);
        _onClean();
    }

    function _handleOnChange(event) {
        if (event.target.name === input.name) {
            setName(event.target.value);
        }
        if (event.target.name === input.species) {
            setSpecies(event.target.value);
        }
        if (event.target.name === input.age) {
            setAge(event.target.value);
        }
    }

    function _onClean() {
        setName("");
        setSpecies("");
        setAge(1);
    }

    return (
        <form onSubmit={_handleSubmit}>
            <div className="form-group">
                <label>Tên : </label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={_handleOnChange}
                />
            </div>
            <div className="form-group">
                <label>Species : </label>
                <input
                    type="text"
                    className="form-control"
                    name="species"
                    value={species}
                    onChange={_handleOnChange}
                />
            </div>
            <br></br>
            <label>Age: </label>
            <input
                type="number"
                className="form-control"
                name="age"
                min="1"
                value={age}
                onChange={_handleOnChange}
            />
            <br></br>
            <button type="submit" className="btn btn-warning">
                <span className="fa fa-plus mr-5"></span>Save
            </button>
            <button type="button" className="btn btn-danger" onClick={_onClean}>
                <i className="fas fa-times mr-5"></i>Clear
            </button>
        </form>
    );
}

export default PetFrom;
