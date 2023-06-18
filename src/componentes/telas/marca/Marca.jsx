import { useState, useEffect } from 'react';
import MarcaContext from './MarcaContext';
import Tabela from './Tabela';
import Form from './form';
import WithAuth from "../../seg/WithAuth";
import { useNavigate } from "react-router-dom";
import Carregando from '../../comuns/Carregando';

import { getMarcasAPI, getMarcaPorCodigoAPI, deleteMarcaPorCodigoAPI, cadastraMarcasAPI } from '../../servicos/MarcaServico';

function Marca() {

    let navigate = useNavigate();

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({
        codigo: "", nome: "", pais: ""
    });
    const [carregando, setCarrengando] = useState(true);

    const recuperar = async codigo => {
        try {
            setObjeto(await getMarcaPorCodigoAPI(codigo));
        } catch (err) {
            window.location.reload();
            navigate("/login", { replace: true });
        }
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraMarcasAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err) {
            console.log(err);
            window.location.reload();
            navigate("/login", { replace: true });
        }
        recuperaMarcas();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }    

    const recuperaMarcas = async () => {
        try {
            setCarrengando(true);
            setListaObjetos(await getMarcasAPI());
            setCarrengando(false);
        } catch (err) {
            window.location.reload();
            navigate("/login", { replace: true });
        }
    }

    const remover = async objeto => {
        if (window.confirm('Deseja remover este objeto?')) {
            try {
                let retornoAPI = await deleteMarcaPorCodigoAPI(objeto.codigo);
                setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            } catch (err) {
                window.location.reload();
                navigate("/login", { replace: true });
            }
        }
        recuperaMarcas();
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
            <Carregando carregando={carregando}>
                <Tabela />
            </Carregando>
            <Form />
        </MarcaContext.Provider>
    );
}

export default WithAuth(Marca);
