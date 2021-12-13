import React, {useState} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb =[
    {
        id:1,
        name:"Hector",
        age:27,
        email:"rahe06@gmail.com"
    },
    {
        id:2,
        name:"Jose",
        age:50,
        email:"jose@gmail.com"
    },
    {
        id:3,
        name:"Luis",
        age:25,
        email:"luis@gmail.com"
    },
    {
        id:4,
        name:"Mario",
        age:33,
        email:"mario@gmail.com"
    },
    {
        id:5,
        name:"Ruben",
        age:40,
        email:"ruben@gmail.com"
    },
];

function CrudApp() {
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);
    
    const createData=(data)=>{
        data.id= Date.now();
        //console.log(data);
        setDb([...db,data]);
    }

    const updateData=(data)=>{

    }

    const deleteData=(id)=>{

    }

    return (
        <div>
            <h2>CRUD App</h2>
            <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />
            <CrudTable 
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}  
            />
        </div>
    );
}

export default CrudApp;
