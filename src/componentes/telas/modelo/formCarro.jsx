import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import ModeloContext from "./ModeloContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";

function FormCarro() {

    const { carro, handleChangeCarro,
        acaoCadastrarCarro, alerta } = useContext(ModeloContext);

    return (
        <Dialogo id="modalEdicaoCarro" titulo="Carro"
            acaoCadastrar={acaoCadastrarCarro}
            idform="formularioCarro">
            <Alerta alerta={alerta} />
            <CampoEntrada id="txtCodigo" label="Código"
                tipo="number" name="codigo" value={carro.codigo}
                onchange={handleChangeCarro} requerido={false}
                readonly={true} />
            <CampoEntrada id="txtPlaca" label="Placa"
                tipo="number" name="placa" value={carro.placa}
                onchange={handleChangeCarro} requerido={true}
                readonly={false} maxlength={8}
                msgvalido="Valor OK"
                msginvalido="Informe a Placa" />  
            <CampoEntrada id="txtdisponivel" label="Disponivel"
                tipo="number" name="disponivel" value={carro.disponivel}
                onchange={handleChangeCarro} requerido={true}
                readonly={false} maxlength={1}
                msgvalido="Valor OK"
                msginvalido="Informe se está Disponivel" /> 
            <CampoEntrada id="txtkm" label="Km"
                tipo="number" name="km" value={carro.km}
                onchange={handleChangeCarro} requerido={true}
                readonly={false} maxlength={10}
                msgvalido="Valor OK"
                msginvalido="Informe os Km" />          
        </Dialogo>
    )

}

export default FormCarro;