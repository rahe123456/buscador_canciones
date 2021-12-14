import React, { useState, useEffect } from 'react';

const initialForm ={
    name:"",
    age:"",
    email:"",
    id: null,
}

function CrudForm({createData,updateData,dataToEdit,setDataToEdit}) {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if(dataToEdit !== null){
            setForm(dataToEdit);
        }else{
            setForm(initialForm);
        }
    }, [dataToEdit]);

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!form.name || !form.age || !form.email){
            alert("Datos Incompletos");
            return;
        }

        if(form.id === null){
            createData(form);
        }else{
            updateData(form);
        }

        handleReset();
    };

    const handleReset=(e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    };

    return (
        <div>
            <h3>{dataToEdit ? "Editar": "Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name}/>
                <input type="number" name="age" placeholder="Edad" onChange={handleChange} value={form.age}/>
                <input type="email" name="email" placeholder="Correo" onChange={handleChange} value={form.email}/>
                <input type="submit" value={dataToEdit? "Actualizar":"Enviar"} />
                <input type="reset" value="Limpiar" onClick={handleReset}/>
            </form>
        </div>
    )
}

export default CrudForm;
