import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PetForm from "./component/PetForm";
import PetList from "./component/PetList";
import "./styles.css";

App.propTypes = {};

const initialPet = [
    {
        id: 1,
        name: "haha",
        species: "dog",
        age: 18,
    },
    {
        id: 2,
        name: "memeo",
        species: "cat",
        age: 20,
    },
    {
        id: 3,
        name: "miluaaa",
        species: "rabbit",
        age: 30,
    },
];

function App(props) {
    const [pets, setPets] = useState([]);

    // Only run once the first time is component rendered
    useEffect(() => {
        // componentDidMount
        if (localStorage.getItem("petsData")) {
            setPets(JSON.parse(localStorage.getItem("petsData")));
        }
    }, []);

    // Run every pets state change
    useEffect(() => {
        // componentDidUpdate
        localStorage.setItem("petsData", JSON.stringify(pets));
    }, [pets]);

    function _handleDelete(pet) {
        const index = pets.findIndex((x) => x.id === pet.id);
        if (index < 0) return;
        const newPets = [...pets];
        newPets.splice(index, 1);
        setPets(newPets);
    }
    function _handleOnSubmit(formValue) {
        console.log(formValue);
        const pet = {
            id: Math.floor(1 + Math.random() * 0x10000),
            ...formValue,
        };
        const newPets = [...pets];
        newPets.push(pet);
        setPets(newPets);
    }
    function _handleUpdate(pet) {
        console.log(pet);
        const name = prompt("Please enter your name", pet.name);
        const species = prompt("Please enter your species", pet.species);
        const age = prompt("Please enter your age", pet.age);
        pets.map((x) => {
            if (pet.id === x.id) {
                x.name = name;
                x.species = species;
                x.age = age;
            }
        });
        const newPets = [...pets];
        setPets(newPets);
    }

    return (
        <div className="App">
            {console.log("render app")}
            <div className="task-form">
                <PetForm onSubmit={_handleOnSubmit} />
            </div>
            <div className="task-list">
                <PetList
                    pets={pets}
                    onDelete={_handleDelete}
                    onUpdate={_handleUpdate}
                />
            </div>
        </div>
    );
}

export default App;
