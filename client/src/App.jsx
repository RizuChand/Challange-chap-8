import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import List from './components/List';
import {useState} from 'react'

  // Mas riandi maaf saya banyak comot di yang codingan mas

function App() {
  let data = [
    {
        id : 1,
        Username : "hutao",
        Email    : "hutao@genshin.com",
        Password : "1234",
        Experience: 1001
    },

    {   id : 2,
        Username : "ayaka",
        Email    : "ayaka@genshin.com",
        Password : "12345",
        Experience: 1000
    },

    {   id : 3,
        Username : "yes",
        Email    : "eulada@genshin.com",
        Password : "superuy",
        Experience: 1300
    }  
]
const [Player, setPlayers] = useState(data)
const [PlayerEdit, setPlayerEdit] = useState('')
const [Keyword, setKeyword] = useState('')

const addPlayer = (newPlayer) => {

  // console.log("masuk");
  newPlayer.id = Math.max(...Player.map(player => player.id))+1
  setPlayers(Player => [...Player, newPlayer])
}

const selectEdit = (playerId) => {
  let player = Player.filter(player => player.id === playerId)
  console.log(player[0])
  setPlayerEdit(player[0])
}

const performEdit = (player) => {
  console.log(`perubahan data dari username ${player.Username}`)
  const indexToEdit = Player.findIndex(item => item.id === player.id)
  console.log(`Id yang di edit = ${indexToEdit}`)
  
  let copyPlayer = [...Player]
  copyPlayer[indexToEdit] = player

  setPlayers(copyPlayer)
}

const cancelEdit = () => {
  setPlayerEdit('')
}

const filteredPlayerData = () => {
  //console.log("filter masuk");
  return Player.filter(player => new RegExp(Keyword, 'g').test(player.Username) ||
  new RegExp(Keyword, 'g').test(player.Email) ||
  new RegExp(Keyword, 'g').test(player.Experience))
}

  return (
    <div>
      <div className="container mt-5">
      <input class="form-control" type="text" placeholder="Search" onChange={(e) => setKeyword(e.target.value)} value={Keyword}></input>
        <h1 className='text-center'>Data Player</h1>

          <List players= {filteredPlayerData()} selectEdit={selectEdit}/>
       
      </div>

  <div className='col align-self-center mt-5'>
      <div>
        <div>
          <h1 className="text-center">Form</h1>
          </div>
          <div><Form handleCreate={addPlayer} playerEdit={PlayerEdit} performEdit={performEdit} cancelEdit={cancelEdit}/></div>
      </div>
      </div>
    </div>
  );
}

export default App;
