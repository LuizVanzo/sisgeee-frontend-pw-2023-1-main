import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import ModeloContext from './ModeloContext';
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(ModeloContext);

    return (
        <Dialogo id="modalEdicao" titulo="Modelos"
        acaoCadastrar={acaoCadastrar} idform="formulario">
        <Alerta alerta={alerta} />
        <CampoEntrada id="txtCodigo" label="Código"
                tipo="number" name="codigo" value={objeto.codigo}
                onchange={handleChange} requerido={false}
                readonly={true} />
        <CampoEntrada id="txtNome" label="Nome"
            tipo="text" name="nome" value={objeto.nome}
            onchange={handleChange} requerido={true}
            readonly={false} maxlength={40}
            msgvalido="Nome OK"
            msginvalido="Informe o nome" />
        <CampoEntrada id="txtPortas" label="Número de portas"
            tipo="number" name="numero_portas" value={objeto.numero_portas}
            onchange={handleChange} requerido={true}
            readonly={false} 
            msgvalido="Descrição OK"
            msginvalido="Informe o Número de Portas" />

        <CampoEntrada id="txtLugares" label="Lugares"
            tipo="number" name="lugares"
            value={objeto.lugares}
            onchange={handleChange} requerido={true}
            readonly={false} 
            msgvalido="Descrição OK"
            msginvalido="Informe o Número de Lugares" />
        <CampoEntrada id="txtMarca" label="Marca"
            tipo="number" name="marca"
            value={objeto.marca}
            onchange={handleChange} requerido={true}
            readonly={false} 
            msgvalido="Descrição OK"
            msginvalido="Informe o Informe o ID da Marca" />
    </Dialogo>
    )
}

export default Form;