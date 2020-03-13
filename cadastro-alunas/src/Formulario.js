import React from 'react'
import css from './Formulario.css'

export class Formulario extends React.Component{

constructor(props){
    super(props);
    this.state = {
        nome: "",
        cidade: "",
        email: "",
        cpf: "",
        telefone: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.recebeFormulario = this.recebeFormulario.bind(this);
}

validarEmail(email){
    return email.includes("@") && email.includes(".")
}

handleChange(name,value){
    this.setState({
        [name]: value
    })
}

recebeFormulario(){
    //event.preventDefault();
    alert("Aluna adicionada - " + 
    "Nome: " + this.state.nome + " Cidade: " + this.state.cidade +
    " Email: " + this.state.email + " CPF: " + this.state.cpf +
    " Telefone: " + this.state.telefone);
}

// Validar campos do form quando ocorrer a submissão
handleSubmitForm = event => {
    event.preventDefault();
    let {nome, cidade, email, cpf, telefone} = this.state;
    if (!nome || !cidade || !email || !cpf || !telefone){
        return alert ("Você precisa preencher todos os campos")
    }
    this.recebeFormulario();

}

    render(){
        return(
        <div class="formulario" >

            <h1>Cadastro de alunas</h1>

            <form onSubmit={this.handleSubmitForm}>

            <FormularioInput name="nome" campo="Nome Completo" value={this.state.nome} handleChange={this.handleChange} descricao="Digite seu nome" />
            <FormularioInput name="cidade" campo="Cidade" value={this.state.cidade} handleChange={this.handleChange} descricao="Digite a cidade"/>
            <FormularioInput name="email" campo="Email" value={this.state.email} handleChange={this.handleChange} descricao="email@email.com"/>
            <FormularioInput name="cpf" campo="CPF" value={this.state.cpf} handleChange={this.handleChange} descricao="000.000.000-00"/>
            <FormularioInput name="telefone" campo="Telefone" value={this.state.telefone} handleChange={this.handleChange} descricao="(xx) xxxxx-xxxx"/>

            <FormularioSubmit nome="Submit" />

            </form>
        </div>
        );
    }
}

export class FormularioInput extends React.Component{
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange (e) {
        this.props.handleChange(e.target.name, e.target.value);
    }

    render(){
        return (
            <div>
            <p>{this.props.campo}</p>
            <input placeholder={this.props.descricao} name={this.props.name} value={this.props.value} onChange={this.handleInputChange}/>
            </div>
        )
    }
}

export function FormularioSubmit(props){
    return (
        <div class="botao">
            <input type="submit" value={props.nome} />
        </div>
    )
}