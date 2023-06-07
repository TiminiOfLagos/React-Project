import React, {Component} from 'react'


class Useroutput extends Component {
    constructor(props){
        super(props)

        // The sentence in the H1 tag is generated from this state
        this.state = {
            detailsOne:"Welcome To Senator Abiru Innovation Lab.",
            detailsTwo:"A place to learn Software engineeering to a job ready level",
            detailsThree:"Situated at No. 1 Muba Abiru street Ebute Ikorodu",
            
        }
    }
    



    render() {
        return (
            <div>
                <h1> {this.state.detailsOne} </h1>
                <h1> {this.state.detailsTwo} </h1>
                <h1> {this.state.detailsThree} </h1>
            </div>
          )
    }
}

export default Useroutput
