import React from 'react'
import './App.css';
import CreateStudent from './components/createStudent';
import EditStudent from './components/editStudent';
import ListStudent from './components/listStudent';
import TableStudent from './components/tableStudent';
import {Navbar ,Container} from "react-bootstrap"
import {BrowserRouter, Link} from 'react-router-dom'

function App() {
  return (<BrowserRouter>
    <div className="App">
    <header>
      <Navbar varient="dark" bg="dark">
        <Container >
        <Navbar.Brand>
              <Link to={"/create-student"} >
                Student App
              </Link>
            </Navbar.Brand>
        </Container>
      </Navbar>
      
    </header>
     <CreateStudent/>
     <EditStudent/>
     <ListStudent/>
     <TableStudent/>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
