import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PetForm from './component/PetForm';
import PetList from './component/PetList';
import "./styles.css"

App.propTypes = {
  
};

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
]

function App(props) {
  console.log("App");
  const [pets, setPets] = useState(initialPet);

  function _handleDelete(pet){
    const index = pets.findIndex(x => x.id === pet.id);
    console.log(index);
    if(index < 0) return;
    const newPets = [...pets];
    newPets.splice(index,1);
    setPets(newPets);
  }


  return (
    <div className="App">
    {console.log("render app")}
    <div className="task-form">
      <PetForm />
    </div>
    <div className="task-list">
      <PetList pets={pets} onDelete={_handleDelete} />
    </div>
  </div>
  );
}

export default App;