import React from 'react';
import CrudTableRow from './CrudTableRow';

function CrudTable({data, setDataToEdit, deleteData}) {
    return (
        <div>
            <h3>Usuarios</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Correo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0? 
                    (
                        data.map((element) => 
                        <CrudTableRow 
                            key= {element.id} 
                            element= {element}
                            setDataToEdit = {setDataToEdit}
                            deleteData={deleteData}
                        />
                    )): 
                    (
                    <tr>
                        <td colSpan="3">Sin datos</td>
                    </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable;
