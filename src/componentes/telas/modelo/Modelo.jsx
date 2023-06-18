import { useState, useEffect } from 'react';
import ModeloContext from './ModeloContext';
import Tabela from './Tabela';
import Form from './form';
import WithAuth from "../../seg/WithAuth";
import { useNavigate } from "react-router-dom";
import Carregando from '../../comuns/Carregando';
import {
    getCarrosDoModeloAPI, getCarroPorCodigoAPI,
    deleteCarroPorCodigoAPI, cadastraCarrosAPI
} from '../../servicos/CarroServico';
import FormCarro from "./formCarro";
import TabelaCarro from './TabelaCarro';

import { getModelosAPI, getModeloPorCodigoAPI, deleteModeloPorCodigoAPI, cadastraModelosAPI } from '../../servicos/ModeloServico';

function Modelo() {

    let navigate = useNavigate();

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({
        codigo: "", nome: "", numero_portas: "",lugares: "",marca: ""
    });
    const [carregando, setCarrengando] = useState(true);
    const [editarCarro, setEditarCarro] = useState(false);
    const [carro, setCarro] = useState({
        codigo: "", placa: "", disponivel: "", km: "", modelo: ""
    })
    const [listaCarros, setListaCarros] = useState([]);
    const [exibirCarros, setExibirCarros] = useState(false);
	
    const recuperarCarros = async codigocarro => {
        try {
            setObjeto(await getModeloPorCodigoAPI(codigocarro));
            setListaCarros(await getCarrosDoModeloAPI(codigocarro));
            setExibirCarros(true);
        } catch (err) {
            window.location.reload();
            navigate("/login", { replace: true });
        }
    }

    const recuperarCarro = async codigo => {
        try {
            setCarro(await getCarroPorCodigoAPI(codigo));
        } catch (err) {
            window.location.reload();
            navigate("/login", { replace: true });
        }
    }

    const removerCarro = async carro => {
        if (window.confirm('Deseja remover este carro?')) {
            let retornoAPI =
                await deleteCarroPorCodigoAPI(carro.codigo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setListaCarros(await getCarrosDoModeloAPI(objeto.codigo));
        }
    }

    const acaoCadastrarCarro = async e => {
        e.preventDefault();
        const metodo = editarCarro ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraCarrosAPI(carro, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editarCarro) {
                setEditarCarro(true);
            }
        } catch (err) {
            window.location.reload();
            navigate("/login", { replace: true });
        }
        recuperarCarro(objeto.codigo);
    }

    const handleChangeCarro = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCarro({ ...carro, [name]: value });
    }

    const recuperar = async codigo => {
        try {
            setObjeto(await getModeloPorCodigoAPI(codigo));
        } catch (err) {
            window.location.reload();
            navigate("/login", { replace: true });
        }
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraModelosAPI(objeto, metodo);
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
        recuperaModelos();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }    

    const recuperaModelos = async () => {
        try {
            setCarrengando(true);
            setListaObjetos(await getModelosAPI());
            setCarrengando(false);
        } catch (err) {
            window.location.reload();
            navigate("/login", { replace: true });
        }
    }

    const remover = async objeto => {
        if (window.confirm('Deseja remover este objeto?')) {
            try {
                let retornoAPI = await deleteModeloPorCodigoAPI(objeto.codigo);
                setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            } catch (err) {
                window.location.reload();
                navigate("/login", { replace: true });
            }
        }
        recuperaModelos();
    }

    useEffect(() => {
        recuperaModelos();
    }, []);

    return (
        <ModeloContext.Provider value={
            {
                alerta, setAlerta,
                listaObjetos, setListaObjetos,               
                recuperaModelos,
                remover, objeto, setObjeto,
                editar, setEditar,
                recuperar, acaoCadastrar, handleChange,
                listaCarros, carro, setCarro, handleChangeCarro,
                removerCarro, recuperarCarro, acaoCadastrarCarro,
                setEditarCarro, editarCarro, recuperarCarros,
                setExibirCarros

            }
        }>
            <Carregando carregando={carregando}>
                {!exibirCarros ? <Tabela /> : <TabelaCarro />}
            </Carregando>
            <Form />
            <FormCarro />
        </ModeloContext.Provider>
    );
}

export default WithAuth(Modelo);
