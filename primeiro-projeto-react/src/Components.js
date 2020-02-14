import React from 'react';
import './Components.css';

export class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }

        this.produtos = [
            {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
            {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
            {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
            {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
            {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
            {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
          ];

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
                <h2>Produtos</h2>
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
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    handleFilterTextChange (e){
        this.props.onFilterTextChange(e.target.value);
    }
    handleInStockChange (e){
        this.props.onInStockChange(e.target.checked);
    }
    render(){
        return(
            <form>
                <input type="text" class="barraBusca" placeholder="Search..." value={this.props.filterText} onChange={this.handleFilterTextChange}/>
                <br></br>
                <input type="checkbox" checked = {this.props.inStockOnly} onChange={this.handleInStockChange}/>Somente produtos em estoque               
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
            if (product.name.indexOf(filterText) === -1){
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
        return(
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
            </table>
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