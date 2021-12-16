import React, {useState} from 'react'

const initialForm ={
    artist:"",
    song:"",
};

function SongForm({handleSearch}) {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.artist || !form.song){
            alert("Datos Incompletos");
            return;
        }

        handleSearch(form);
        setForm(initialForm);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="artist" 
                    value={form.artist} 
                    onChange={handleChange} 
                    placeholder="Nombre del Intérprete" />
                <input 
                    type="text" 
                    name="song"
                    value={form.song}
                    onChange={handleChange} 
                    placeholder="Nombre de la Canción" />
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default SongForm
