import { useContext } from 'react'
import ModeloContext from './ModeloContext';
import Alerta from '../../comuns/Alerta';

function Tabela() {

    const { setObjeto, alerta, setAlerta, listaObjetos, remover, setEditar, recuperar, recuperarCarros} = useContext(ModeloContext);

    return (
        <div style={{ padding: '20px' }}>
        <h1>Modelo</h1>
        <Alerta alerta={alerta} />
        {listaObjetos.length === 0 && <h1>Nenhuma modelo encontrada</h1>}
        {listaObjetos.length > 0 && (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" style={{ textAlign : 'center' }}>Ações</th>
                        <th scope="col">Código</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Número de Portas</th>
                        <th scope="col">Lugares</th>
                        <th scope="col">ID Marca</th>
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
                                            numero_portas: "",
                                            lugares: "",
                                            marca:""
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
                                <button className="btn btn-success" title="Carros"
                                            onClick={() => {
                                                recuperarCarros(objeto.codigo);
                                                setAlerta({ status: "", message: "" });
                                            }}>
                                            <i className="bi bi-pc-display"></i>
                                        </button>                                  
                            </td>
                            <td>{objeto.codigo}</td>
                            <td>{objeto.nome}</td>
                            <td>{objeto.numero_portas}</td>
                            <td>{objeto.lugares}</td>
                            <td>{objeto.marca}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
    )
}

export default Tabela;