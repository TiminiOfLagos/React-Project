import React, {Component} from 'react'


class Userinput extends Component {
    constructor(props){
        super(props)

        // The sentence in the H1 tag is generated from this state
        this.state = {
            detailsOne:"Welcome To Senator Abiru Innovation Lab.",
            detailsTwo:"A place to learn Software engineeering to a job ready level",
            detailsThree:"Situated at No. 1 Muba Abiru street Ebute Ikorodu",
            
        }
    }
    

// This method changes the user-output to what they input 
    detailsSwitchHandler = (e) =>  {
        this.setState({
            detailsOne: e.target.value
           
        })
    }


    render() {
        return (
            <div>
                <input type="text" onChange={this.detailsSwitchHandler} />
            </div>
          )
    }
}

export default Userinput
