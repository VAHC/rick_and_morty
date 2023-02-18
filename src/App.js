import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from "./components/NavBar/NavBar.jsx";
import { useState, useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Error from './components/Error/Error.jsx';
import Form from './components/Form/Form.jsx';
import {Favorites} from './components/Favorites/Favorites';
//import SearchBar from './components/SearchBar/SearchBar.jsx'
//import Card from './components/Card/Card.jsx'
//import characters, { Rick } from './data.js'

function App () {

  // const example = {
  //   name: 'Morty Smith',
  //   species: 'Human',
  //   gender: 'Male',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  // };

  // Aqui se crea un estado...
  const [characters, setCharacters] = useState([]);

  // const onSearch = () => {
  //   setCharacters((oldChars) => [...oldChars, example])
  // };
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje repetido, prueba otro ID.");
          } else {
             alert('No hay personajes con ese ID');
          }
       });
  }

  function random() {
    let randomId = Math.floor(Math.random() * 826);
    console.log(randomId)
    onSearch(randomId);
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id));
  };

  const location = useLocation();

  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const username = "victor@gmail.com";
  const password = "victor123";

  function login(userData){
    if (userData.username === username && 
      userData.password === password) {
      setAccess(true);
      navigate("/home");
   }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function logout() {
    setAccess(false);
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <NavBar onSearch={onSearch} random={random} logout={logout} />}

      <Routes>
        <Route exact path="/" element={<Form login={login} />}></Route>
        <Route
          exact
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
        <Route exact path="/detail/:detailId" element={<Detail />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

//   return (
//     <div className='App' style={{ padding: '25px' }}>
//       {/* <div>
//         <Card
//           name={Rick.name}
//           species={Rick.species}
//           gender={Rick.gender}
//           image={Rick.image}
//           onClose={() => window.alert('Emulamos que se cierra la card')}
//         />
//       </div>
//       <hr /> */}
//       {/* <div> */}
//         {location.pathname !== "/" && <NavBar onSearch={onSearch} 
//         random={random} logout={logout} />}
//         <Routes>
//           <Route exact path="/" element={<Form login={login} />}></Route>
//           <Route exact path="/home" element={<Cards 
//            characters={characters} onClose={onClose} />}></Route>
//           <Route exact path="/about" element={<About />}></Route>
//           <Route exact path="/detail/:detailId" element={<Detail />}></Route>
//           <Route path="*" element={<Error />}></Route>
//         </Routes>
      
      
      
//       {/* </div> */}
//       {/* <div>
//         <Cards characters={characters} onClose={onClose} />
//       </div> */}
//       {/* <hr />
//       <div>
//         <SearchBar
//           onSearch={(characterID) => window.alert(characterID)}
//         />
//       </div> */}
//     </div>
//   );
// }

export default App
