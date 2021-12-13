import React from 'react'

function CrudTableRow({element}) {
    return (
        <tr>
            <td>{element.name}</td>
            <td>{element.age}</td>
            <td>{element.email}</td>
            <td>
                <button>Editar</button>
                <button>Eliminar</button>
            </td>
        </tr>
    )
}

export default CrudTableRow
