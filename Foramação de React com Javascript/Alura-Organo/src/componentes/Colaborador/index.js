import './colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corDoCabeçalho }) => {
    const cor = { backgroundColor: corDoCabeçalho }
    return (
        <section className='colaborador'>
            <div style={cor} className='cabecalho'>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </section>
    )
}

export default Colaborador