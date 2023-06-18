import { useContext } from "react";
import ModeloContext from "./ModeloContext";
import Alerta from '../../comuns/Alerta'

function TabelaCarros() {

    const { alerta, setAlerta, listaCarros, removerCarro,
        objeto, setEditarCarro, setCarro, recuperarCarro,
        setExibirCarros }
        = useContext(ModeloContext);

    return (
        <div style={{ padding: '20px' }}>
            <button className="btn btn-secondary" onClick={() => {
                setExibirCarros(false);
                setAlerta({ status: "", message: "" });
            }}>
               Voltar <i className="bi bi-backspace"></i>
            </button>
            <Alerta alerta={alerta} />
            <button type="button" className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalEdicaoCarro"
                onClick={() => {
                    setEditarCarro(false);
                    setAlerta({ status: "", message: "" });
                    setCarro({
                        codigo: 0,
                        placa: "", disponivel: "",
                        km : "", modelo: objeto.codigo
                    });
                }}>
                Novo
            </button>
            {listaCarros.length === 0 &&
                <h1>Nenhum carro encontrado</h1>}
            {listaCarros.length > 0 && (
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"
                                    style={{ textAlign: 'center' }}>Ações</th>
                                <th scope="col">Código</th>
                                <th scope="col">Placa</th>
                                <th scope="col">Disponivel</th>
                                <th scope="col">KM</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaCarros.map(carro => (
                                <tr key={carro.codigo}>
                                    <td align="center">
                                        <button className="btn btn-info" title="Editar"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalEdicaoCarro"
                                            onClick={() => {
                                                recuperarCarro(carro.codigo);
                                                setEditarCarro(true);
                                                setAlerta({ status: "", message: "" });
                                            }}>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button className="btn btn-danger" title="Remover"
                                            onClick={() => removerCarro(carro)}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                    <th scope="row">{carro.codigo}</th>
                                    <td>{carro.placa}</td>
                                    <td>{carro.disponivel}</td>
                                    <td>{carro.km}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            )}

        </div>
    )

}

export default TabelaCarros;