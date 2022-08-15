import React from 'react'
import { useState, useEffect } from 'react'

const Form = ({handleCreate, playerEdit, performEdit, cancelEdit}) =>{
    const [Email, setEmail] = useState('')
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [Experience, setExperience] = useState(0)

    useEffect(() => {
      if(typeof playerEdit === 'object') {
        console.log('masuk use efek')
        setEmail(playerEdit.Email)
        setUsername(playerEdit.Username)
        setPassword(playerEdit.Password)
        setExperience(playerEdit.Experience)
      }
    }, [playerEdit])

const submitHandler = (e) =>{
  e.preventDefault()
  let player = {
    Email, Username, Password, Experience
  }
  // console.log(player);

  if(typeof playerEdit === 'object' && playerEdit.id)

       performEdit({...player, id: playerEdit.id})

  else

  handleCreate(player)

  handleReset()

}

const handleReset = () => {

  // console.log("mereset");
  cancelEdit()
  setEmail('')
  setUsername('')
  setPassword('')
  setExperience('')

}

    return(

<form onSubmit={e => submitHandler(e)}>
  <div className='container'>
  <div className="row">
        <div className="col">
          <input onChange={(e) => setUsername(e.target.value)} type="text" class="form-control" placeholder="Username" 
          id="Username" value={Username}/>
        </div>

        <div className="col">
          <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" placeholder="Email" id="Email" value={Email} />
        </div>

        <div className="col">
          <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" placeholder="Password" id="Password" value={Password} />
        </div>

        <div className="col">
          <input onChange={(e) => setExperience(e.target.value)} type="number" class="form-control" placeholder="Experience" id="Experience" value={Experience} />
        </div>
  </div>
      <div className='container'>
        <div className='row'>
        <div className='col-6'>
          <button type="submit" className='btn btn-primary m-2'>submit</button>
          <button type="button" onClick={handleReset} className="btn btn-warning m-2">Reset</button>
        </div>
        </div>
    </div>
  </div>
  </form>
  )
}

export default Form;