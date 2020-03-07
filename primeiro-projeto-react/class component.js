import React, {Component} from 'react'

// Se não importar em cima, usar extends React.Component
class Button extends Component {

    constructor(props){
        super(props);
        this.state = {
            disabled: false,
            // title: {
                // text: '1234',
                // color: 'red',
            // }
        }
    }

    // Executado quando o componente está sendo montado. (ng-init?)
    componentDidMount() {
        console.log('oi');
    }

    //Executado quando o componente atualizar/mudar o estado
    componentDidUpdate() {
        console.log('oi');
    }

    // No fim
    componentWillUnmount() {

    }

    // Função para alterar o estado
    // Quando isso acontecer, vai renderizar novamente, executando o render
    userClicked = () => this.setState({
        disabled: !disabled,
    })

    render() {
        // Retorna JSX
        return (
        <button disabled={this.state.disabled}>Click me</button>
        )
    }

}