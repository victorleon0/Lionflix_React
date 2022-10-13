import axios from 'axios'
import { useState ,useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router';
import {Table,Button} from 'react-bootstrap';
import { MdDelete} from 'react-icons/md';

// toma los favoritos de un usuario y muestra los resultados 
// puedo eliminar un favorito 

function FavoritesPage(){
    const [favorites,setFavorites] = useState([])
    const [actualUser,setActualUser] = useState({})
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
    useEffect(()=>{
        axios.get(`/api/user/${user.id}/favorites`)
        .then((favoritos)=> setFavorites(favoritos.data))
        axios.get(`/api/user/${user.id}`).then((user)=> setActualUser(user.data))
    },[])
    const removeFavorite = function(item, i){
        axios.put(`/api/user/${user.id}/favorites/${i}`,{favorite:item})
        .then((favoritos)=>setFavorites(favoritos.data) )
    }
    
return (
    <>
    <Card className='profile' >
     <img variant="left"  height='300px' width='300px' align='center' src={actualUser.picture} alt="Card image"/>
     {/* <div class="container">
        <form action={`http://localhost:3001/api/upload/${user.id}`} method="POST" enctype="multipart/form-data">
            <input type="file" name="image"></input>
            <button > 
                Change my picture
            </button>
        </form>
    </div> */}

    <Card.Body >
    <Card.Title className="TextBold">{actualUser.name}</Card.Title>
    </Card.Body>
    </Card>
    <h3 className="title">Favorites</h3>
    <Table responsive striped bordered hover size="sm" className="table">
    <thead>
    <tr>
        <th></th>
        <th>Title</th>
    </tr>
    </thead>
    <tbody>
    {favorites.map((item , i) => {
        return (
        <tr key = {i}>
       <th><Button variant="outline-primary" onClick={() => removeFavorite(item, i)}> <MdDelete/></Button> </th>
       <th>*{item}</th>
        </tr>
        ) 
    })}
    </tbody>
    </Table>
    </>
)
}

export default FavoritesPage