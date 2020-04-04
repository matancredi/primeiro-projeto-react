import React from 'react'
import { Form, FormGroup, Label, Input, FormFeedback, Container, Row, Col, Button, Spinner } from 'reactstrap';

class AddressForm extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      cep: '',
      bairro: '',
      logradouro: '',
      localidade: '',
      uf: '',
      numero: '',
      loading:false,
      error: '',
      cepExiste:false
    }
  }

  verificaCep = async (cep) => {
    console.log("VERIFICA", cep)
    this.setState({error:false})
    return await fetch(`http://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(cepResult => {
      this.setState({loading:false})

      return cepResult
    })
    .catch(error => this.setState({error:true, loading:false}))
  }

  handleChange = async (field) => {
    const { name, value } = field
    this.setState({[name]: value, error:false})
    if(name === 'cep' && value.length ===8 ){
      this.setState({loading:true})
      const cepObject = await this.verificaCep(value)
      if(!cepObject || cepObject.erro){
        this.setState({error:true})
        return
      }
      this.setState({cepExiste:true})
      alert(`Esse CEP é de: ${cepObject.localidade}`)
      console.log("CEPOBJ", cepObject)
      const { cep, logradouro, bairro, localidade, uf } = cepObject
      this.setState({cep, logradouro, bairro, localidade, uf})
    }
  }

  handleBlur = async value => {
    if(value.length === 8 ){
      this.setState({loading:true})
      const cepObject = await this.verificaCep(value)
      if(!cepObject || cepObject.erro){
        this.setState({error:true})
        return
      }
      this.setState({cepExiste:true})
      alert(`Esse CEP é de: ${cepObject.localidade}`)
      const { cep, logradouro, bairro, localidade, uf } = cepObject
      this.setState({cep, logradouro, bairro, localidade, uf})
    }
  }

  render() {
    const { loading, cep, logradouro, bairro, localidade, uf, numero, error } = this.state
    return(
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            {loading && <Spinner size="sm" color="primary" />}
            <br></br>
            <h5> Digite um CEP válido</h5>
            <Form style={{textAlign:'left'}}> 
            <FormGroup>
              <Label for="cep">CEP</Label>
              <Input invalid={this.state.error} valid = {this.state.cepExiste} name="cep" value={cep} onChange={e => this.handleChange(e.target)} onBlur={e => this.handleBlur(e.target.value)} maxLength={9}/>
              <FormFeedback invalid={error.toString()}>Error</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="logradouro">Logradouro</Label>
              <Input name="logradouro" value={logradouro} onChange={e => this.handleChange(e.target)}/>
            </FormGroup>
            <FormGroup>
              <Label for="bairro">Bairro</Label>
              <Input name="bairro" value={bairro} onChange={e => this.handleChange(e.target)}/>
            </FormGroup>
            <FormGroup>
              <Label for="localidade">Localidade</Label>
              <Input name="localidade" value={localidade} onChange={e => this.handleChange(e.target)}/>
            </FormGroup>
            <FormGroup>
              <Label for="uf">UF</Label>
              <Input name="uf" value={uf}  onChange={e => this.handleChange(e.target)}/>
            </FormGroup>
            <FormGroup>
              <Label for="numero">Numero</Label>
              <Input name="numero" value={numero}  onChange={e => this.handleChange(e.target)}/>
            </FormGroup>
            <FormGroup>
              <Button color="success" onClick={this.verificaCep}>Enviar</Button>
            </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AddressForm