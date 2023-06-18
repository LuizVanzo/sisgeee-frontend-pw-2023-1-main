import Autenticacao from "../seg/Autenticacao";

export const getModelosAPI = async () => {
    const response = 
        await fetch(`${process.env.REACT_APP_ENDERECO_API}/modelos`,
        {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                "x-access-token": Autenticacao.pegaAutenticacao().token
            }
        });
    const data = await response.json();
    return data;
}

export const getModeloPorCodigoAPI = async codigo => {
    const response = 
        await fetch(`${process.env.REACT_APP_ENDERECO_API}/modelos/${codigo}`,
        {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                "x-access-token": Autenticacao.pegaAutenticacao().token
            }
        });
    const data = await response.json();
    return data;
}

export const deleteModeloPorCodigoAPI = async codigo => {
    const response = 
        await fetch(`${process.env.REACT_APP_ENDERECO_API}/modelos/${codigo}`,
        {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json",
                "x-access-token": Autenticacao.pegaAutenticacao().token
            }
        });
    const data = await response.json();
    return data;
}

export const cadastraModelosAPI = async (objeto, metodo) => {
    const response = 
        await fetch(`${process.env.REACT_APP_ENDERECO_API}/modelos`,
        {
            method : metodo,
            headers : {"Content-Type" : "application/json",
            "x-access-token": Autenticacao.pegaAutenticacao().token},
            body : JSON.stringify(objeto)
        });
    const data = await response.json();
    return data;
}
