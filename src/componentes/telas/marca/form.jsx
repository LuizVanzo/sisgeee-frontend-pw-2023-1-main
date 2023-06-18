import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import MarcaContext from './MarcaContext';
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(MarcaContext);
	  
    return (
        <Dialogo id="modalEdicao" titulo="Marca"
            acaoCadastrar={acaoCadastrar} idform="formulario">
            <Alerta alerta={alerta} />
            <CampoEntrada id="txtCodido" label="Código"
                tipo="number" name="codigo" value={objeto.codigo}
                onchange={handleChange} requerido={false}
                readonly={true} />
            <CampoEntrada id="txtNome" label="Nome"
                tipo="text" name="nome" value={objeto.nome}
                onchange={handleChange} requerido={true}
                readonly={false} maxlength={40}
                msgvalido="Nome OK"
                msginvalido="Informe o nome" />
            <CampoEntrada id="txtPais" label="País"
                tipo="text" name="pais"
                value={objeto.pais}
                onchange={handleChange} requerido={true}
                readonly={false} maxlength={40}
                msgvalido="Descrição OK"
                msginvalido="Informe o País" />
        </Dialogo>
    )
}

export default Form;