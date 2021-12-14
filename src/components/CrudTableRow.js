import React from 'react'

function CrudTableRow({element, setDataToEdit, deleteData}) {
    let {name, age, email, id} = element;
    return (
        <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{email}</td>
            <td>
                <button onClick={()=>setDataToEdit(element)}>Editar</button>
                <button onClick={()=>deleteData(id,name)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default CrudTableRow
