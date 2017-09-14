import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search, clear } from './todoActions'


class TodoForm extends Component {
    constructor(props) {
        super(props)
        // Garantir que, ao chamar o this, aponte para o componente
        this.keyHandler = this.keyHandler.bind(this)
    }
    
    // Metodo de ciclo de vida
    componentWillMount() {
        // chama action creator
        this.props.search()
    }

    keyHandler (e) {
        // extrai de um objeto um conjunto de atributos
        const { add, search, description, clear } = this.props

        if (e.key === 'Enter') 
            e.shiftKey ? search() : add(description)
        else if (e.key === 'Escape')
            clear()
    }
    
    render() {
        const { add, search, description } = this.props
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa' 
                    value={this.props.description}
                    onKeyUp={this.keyHandler}
                    onChange={this.props.changeDescription}></input>
                </Grid>
                    
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={() => add(description)}></IconButton>
                    <IconButton style='info' icon='search' onClick={search}></IconButton>
                    <IconButton style='default' icon='close' onClick={this.props.clear}></IconButton>
                </Grid>
            </div>
        )
    }
}


// dispara a acao e passa para todos os reducers
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch)
// objeto controlado pelo reducer
const mapStateToProps = state => ({ description: state.todo.description })

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)