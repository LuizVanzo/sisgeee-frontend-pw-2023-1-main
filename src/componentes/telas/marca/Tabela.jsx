import { useContext } from 'react'
import MarcaContext from './MarcaContext';
import Alerta from '../../comuns/alerta';

function Tabela() {

    const { setObjeto, alerta, setAlerta, listaObjetos, remover, setEditar, recuperar} = useContext(MarcaContext);

    return (
        <div style={{ padding: '20px' }}>
        <h1>Marca</h1>
        <Alerta alerta={alerta} />
        {listaObjetos.length === 0 && <h1>Nenhuma marca encontrada</h1>}
        {listaObjetos.length > 0 && (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" style={{ textAlign : 'center' }}>Ações</th>
                        <th scope="col">Código</th>
                        <th scope="col">Nome</th>
                        <th scope="col">país</th>
                    </tr>
                </thead>
                <tbody>
                    {listaObjetos.map(objeto => (
                        <tr key={objeto.codigo}>
                            <td align="center">
                                
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEdicao"
                                    onClick={() => {
                                        setObjeto({
                                            codigo: 0,
                                            nome: "",
                                            pais: ""
                                        });
                                        setEditar(false);
                                        setAlerta({ status: "", message: "" });
                                    }}>
                                    Novo <i className="bi bi-file-earmark-plus"></i>
                                </button>

                                <button className="btn btn-info" title='Editar'
                                    data-bs-toggle="modal" data-bs-target="#modalEdicao"
                                    onClick={() => {
                                    recuperar(objeto.codigo);
                                    setEditar(true);
                                    setAlerta({ status: "", message: "" });
                                    }}>
                                    <i className="bi bi-pencil-square"></i>
                                </button>

                                <button className="btn btn-danger" title="Remover"
                                    onClick={() => { remover(objeto); }}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                            <td>{objeto.codigo}</td>
                            <td>{objeto.nome}</td>
                            <td>{objeto.pais}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
    )
}

export default Tabela;