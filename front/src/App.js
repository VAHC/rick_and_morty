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

function App () {
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
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
    onSearch(randomId);
  }

  const onClose = (id) => {
    setCharacters(characters.filter((e) => e.id !== id));
  };

  const location = useLocation();

  const [access, setAccess] = useState(true);
  const navigate = useNavigate();
  const username = "prueba@gmail.com";
  const password = "password321";

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
      {location.pathname !== "/" && (
      <NavBar onSearch={onSearch} random={random} logout={logout} 
    />)}

      <Routes>
        <Route exact path="/" element={<Form login={login} />}></Route> */
        <Route
          exact
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path='/favorites' element={<Favorites />}></Route>
        <Route exact path="/detail/:detailId" element={<Detail />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App
