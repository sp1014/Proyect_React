import React, { Component } from "react";
import { unmountComponentAtNode } from "react-dom";
import axios from "axios";

class DatosApi extends Component{

    constructor(props){
        super(props);

        this.state = {
            posts: []
        }

    }

    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/sp1014/DataJson/characters')
        .then(resp => {
            this.setState({
                posts: resp.data
            })
        })
    }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/posts', {method: 'get'})
    //     .then(response => response.json())
    //     .then(dataResponse => {
    //         this.setState({
    //             posts: dataResponse
    //         })
    //     });
    // }

    render(){
        const {posts} = this.state
        return (
            <>
                <div>
                    {
                        posts.map( u => (
                            <>
                               
                               <p>{u.nombre}</p> 
                               <p>{u.edad}</p> 
                               <p>{u.descripcion}</p> 
                               <p><img src={u.imagen} width="300px;"></img></p> 
                               <hr/>
                            </>
                        ))
                    }
                </div>
            </>
        )
    }

}

export default DatosApi;