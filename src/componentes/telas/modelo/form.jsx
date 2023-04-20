import { useContext } from 'react'
import Alerta from '../../comuns/alerta';
import ModeloContext from './ModeloContext';

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(ModeloContext);

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
    })()	  

    return (
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modelo</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar} className="needs-validation" noValidate>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="form-group">
                                <label htmlFor="txtCodido" className="form-label">
                                    Código
                                </label>
                                <input
                                    type="text"
                                    readOnly
                                    className="form-control"
                                    id="txtCodido"
                                    name="codigo"
                                    value={objeto.codigo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtNome" className="form-label">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtNome"
                                    name="nome"
                                    value={objeto.nome}
                                    onChange={handleChange}
                                    required
                                />
                                <div class="invalid-feedback">
                                    Informe o nome
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtPais" className="form-label">
                                    Número de Portas
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="txtSite"
                                    name="numero_portas"
                                    value={objeto.numero_portas}
                                    onChange={handleChange}
                                    required
                                />
                                <div class="invalid-feedback">
                                    Informe o Número de Portas
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtLugares" className="form-label">
                                    Lugares
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="txtLugares"
                                    name="lugares"
                                    value={objeto.lugares}
                                    onChange={handleChange}
                                    required
                                />
                                <div class="invalid-feedback">
                                    Informe o Número de Lugares
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtMarca" className="form-label">
                                    ID Marca
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="txtMarca"
                                    name="marca"
                                    value={objeto.marca}
                                    onChange={handleChange}
                                    required
                                />
                                <div class="invalid-feedback">
                                    Informe o ID da Marca
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success" >
                                Salvar  <i className="bi bi-save"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Form;