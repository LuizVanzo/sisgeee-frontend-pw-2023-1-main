import { useState, useEffect } from 'react';
import MarcaContext from './MarcaContext';
import Tabela from './Tabela';
import Form from './form';

function Marca() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({
        codigo: "", nome: "", pais: ""
    })
	
   const recuperar = async codigo => {    
    await fetch(`${process.env.REACT_APP_ENDERECO_API}/marcas/${codigo}`)
        .then(response => response.json())
        .then(data => setObjeto(data))
        .catch(err => setAlerta({status : "error", message: err}))
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            await fetch(`${process.env.REACT_APP_ENDERECO_API}/marcas`, {
                method: metodo,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(objeto),
            }).then(response => response.json())
                .then(json => {
                    setAlerta({ status: json.status, message: json.message });
                    setObjeto(json.objeto);
                    if (!editar) {
                        setEditar(true);
                    }
                });
        } catch (err) {
            console.error(err.message);
        }       
        recuperaMarcas();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }	    

    const recuperaMarcas = async () => {
        await fetch(`${process.env.REACT_APP_ENDERECO_API}/marcas`)
            .then(response => response.json())
            .then(data => setListaObjetos(data))
            .catch(err => setAlerta({status : "error", message: err}))
    }

    const remover = async objeto => {
        if (window.confirm('Deseja remover este objeto?')) {
            try {
                await fetch(`${process.env.REACT_APP_ENDERECO_API}/marcas/${objeto.codigo}`,
                    { method: "DELETE" })
                    .then(response => response.json())
                    .then(json => setAlerta({ status: json.status, message: json.message }))
                recuperaMarcas();
            } catch (err) {
                console.log('Erro: ' + err)
            }
        }
    }

    useEffect(() => {
        recuperaMarcas();
    }, []);

    return (
        <MarcaContext.Provider value={
            {
                alerta, setAlerta,
                listaObjetos, setListaObjetos,               
                recuperaMarcas,
                remover, objeto, setObjeto,
                editar, setEditar,
                recuperar, acaoCadastrar, handleChange
            }
        }>
            <Tabela />
            <Form />
        </MarcaContext.Provider>
    );
}

export default Marca;