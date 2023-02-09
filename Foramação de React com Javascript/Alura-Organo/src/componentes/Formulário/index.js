import './formulario.css'
import CampoTexto from '../CampoDeTexto/';

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para ciar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe seu endereço de imagem" />
            </form>
        </section>
    )
}

export default Formulario