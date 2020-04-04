import React from 'react';
import ApiGif from './Components/Gif/ApiGif';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: "",
            clicked: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    inputText = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleClick() {
        this.setState({
            clicked: true
        });
    }

    render() {

        const { search } = this.state;

        return (
            <div style={{margin:'15px'}}>
                <h1><label>Pesquise um GIF</label></h1>
                <input
                    type="text"
                    name="search"
                    value={search}
                    onChange={this.inputText} />
                <button onClick={this.handleClick}>Pesquisar</button>
                <br></br>
                {this.state.clicked ? <ApiGif search={search}/> : null}
            </div>
        );
    }
};

export default App;