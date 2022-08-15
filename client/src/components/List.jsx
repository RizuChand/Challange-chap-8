import React from 'react'


const List = ({players, selectEdit}) => {
   
  return (

    <div>
        
         <table className="table mt-4">
            <thead>
                <tr>
                <th scope="col">nomor</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Experience</th>
                <th scope="col">Option</th>
                </tr>
            </thead>
            <tbody>
                {players.map((players, index) => (
                    <tr key={index}>
                        <td>{index +1}</td>
                        <td>{players.Username}</td>
                        <td>{players.Email}</td>
                        <td>{players.Experience}</td>
                        <td><button onClick={() => selectEdit(players.id)} type="button" className="btn btn-primary">edit</button></td>
                    </tr>
                ))}
            </tbody>
 
</table>
    </div>
  )
}

export default List
