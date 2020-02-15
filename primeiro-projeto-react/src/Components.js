import React from 'react';
import './Components.css';
import { PRODUCTS } from './mock.js'

export class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }

        this.produtos = PRODUCTS;

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
      }
    
      handleFilterTextChange(filterText) {
        this.setState({
          filterText: filterText
        });
      }
      
      handleInStockChange(inStockOnly) {
        this.setState({
          inStockOnly: inStockOnly
        })
      }
          
    render(){
        return(
            <div class="tabelaTotal">
                <h2>Lista de Produtos</h2>
                <SearchBar 
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
                onFilterTextChange={this.handleFilterTextChange}
                onInStockChange={this.handleInStockChange}
                />
                <br></br>
                <ProductTable 
                produtos = {this.produtos} 
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }
}

export class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.lideComTextoFiltrado = this.lideComTextoFiltrado.bind(this);
        this.lideComCheckbox = this.lideComCheckbox.bind(this);
    }
    lideComTextoFiltrado (event){
        this.props.onFilterTextChange(event.target.value);
    }
    lideComCheckbox (event){
        this.props.onInStockChange(event.target.checked);
    }
    render(){
        return(
            <form>
                <input type="text" class="barraBusca" placeholder="Search..." value={this.props.filterText} onChange={this.lideComTextoFiltrado}/>
                <br></br>
                <input type="checkbox" checked = {this.props.inStockOnly} onChange={this.lideComCheckbox}/>Somente produtos em estoque               
            </form>
        )
    }
}

export class ProductTable extends React.Component{

    render(){
        const filterText  = this.props.filterText ;
        const inStockOnly  = this.props.inStockOnly;
        const produtos = this.props.produtos;
        const rows = [];
        let primeiraCategoria = 'a';
        produtos.forEach( product => {
            if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
                return;
            }
            if (inStockOnly && !product.stocked){
                return;
            }
            if (product.category !== primeiraCategoria){
                rows.push(<ProductCategoryRow produto = {product}  key={product.category}/>)
                primeiraCategoria = product.category;
            }
            rows.push(<ProductRow produto = {product} key={product.name}/>)
        }
            )
        const tabela = rows.length > 0 ? 
        <table>
        <tr class ="titulo">
            <td>
                Nome
            </td>
            <td>
                Preço
            </td>
        </tr>
            {rows}
        </table> : <div class="nenhumResultado"><span> Nenhum resultado encontrado</span></div>
        return(
            tabela
        )
    }
}

export class ProductRow extends React.Component{
    render(){
        const name = this.props.produto.stocked? this.props.produto.name : <span style={{color: 'red'}}>{this.props.produto.name}</span>;
        return(
                <tr>
                    <td>{name}</td>
                    <td>{this.props.produto.price}</td>
                </tr>
        )
    }
}

export function ProductCategoryRow(props){
    return (
        <tr class="tituloCategoria">
            <td>{props.produto.category}</td>
        </tr> 
    )
}