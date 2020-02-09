import React from 'react';
import './Components.css';

export class FilterableProductTable extends React.Component{
    render(){
        return(
            <div>
                <SearchBar />
                <br></br>
                <ProductTable />
            </div>
        )
    }
}

export class SearchBar extends React.Component{
    render(){
        return(
            <div>
                <input type="text" class="barraBusca" placeholder="Search..." />
                <br></br>
                <input type="checkbox" />Somente produtos em estoque               
            </div>
        )
    }
}

export class ProductTable extends React.Component{
    constructor(props){
        super(props);
        this.produtos = [
            {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
            {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
            {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
            {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
            {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
            {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
          ];
          //this.produto = {category: 'instrumentos musicais', name:'Violão', price: '$10'}
        
    }

    render(){
        const rows = [];
        let primeiraCategoria = 'a';
        this.produtos.forEach( product => {
            if (product.category !== primeiraCategoria){
                rows.push(<ProductCategoryRow produto = {product} />)
                primeiraCategoria = product.category;
            }
            rows.push(<ProductRow produto = {product} />)
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
        return(
                <tr>
                    <td>{this.props.produto.name}</td>
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