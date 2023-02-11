import Colaborador from '../Colaborador'
import './time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corDoFundo }
    const borda = { borderColor: props.corDoCard }
    const cor = props.corDoCard

    return (
        (props.colaboradores.length >0) ? <section className='time' style={css}>
            <h3 style={borda} >{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    corDoCabeçalho={cor}
                />)}
            </div>
        </section>
        :''
    )
}

export default Time