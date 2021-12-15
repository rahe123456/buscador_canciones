import React, {useEffect, useState} from 'react';
import { helpHttp } from '../helpers/helpHttp';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';

function CrudApi() {
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url ="http://localhost:5000/usuarios";
    useEffect(() => {
        setLoading(true);
        helpHttp().get(url)
        .then((response)=>{
            console.log(response);
            if(!response.error){
                setDb(response);
                setError(null);
            }else{
                setDb(null);
                setError(response);
            }
        setLoading(false);
        });
    }, [url])

    const createData=(data)=>{
        data.id= Date.now();
        //console.log(data);
        let options = {
            body:data,
            headers: {"content-type":"application/json"},
        };

        api.post(url, options)
        .then((response)=>{
            console.log(response);
            if(!response.error){
                setDb([...db,response]);
            }else{
                setError(response);
            }
        });
    }

    const updateData=(data)=>{
        let endpoint = `${url}/${data.id}`;
        
        let options = {
            body:data,
            headers: {"content-type":"application/json"},
        };
        
        api.put(endpoint, options)
        .then((response)=>{
            //console.log(response);
            if(!response.error){
                let newData = db.map(element => element.id === data.id ? data: element);
                setDb([...db,response]);
                setDb(newData);
            }else{
                setError(response);
            }
        });
    };

    const deleteData=(id,name)=>{
        let isDelete = window.confirm(`¿Estás seguro de eliminar el usuario '${name}'?`);

        if(isDelete){
            let endpoint = `${url}/${id}`;
            let options = {
                headers: {"content-type":"application/json"},
            };

            api.delet(endpoint, options)
            .then((response)=>{
            if(!response.error){
                let newData = db.filter(element =>element.id !== id);
                setDb(newData);
            }else{
                setError(response);
            }
            });
        }
    }

    return (
        <div>
            <h2>CRUD Api</h2>
            <article className='grid-1-2'>
            <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />
            {loading && <Loader/>}
            {error && (
            <Message 
            msg={`Error ${error.status}: ${error.statusText}`} bgColor={"#dc3545"}
            />
            )}
            {db && (
            <CrudTable 
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}  
            />
            )}
            </article>
        </div>
    );
}

export default CrudApi;
