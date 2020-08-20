import React, { Component } from 'react'

export default class Employees extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.employees = [
            {
                id: 1,
                name: 'Tomas Lam'
            },
            {
                id: 2,
                name: 'Terry Lam'
            },
            {
                id: 3,
                name: 'Mike Fox'
            },
            {
                id: 5,
                name: 'Molly Box'
            },
            {
                id: 6,
                name: 'William Fox'
            },
        ]
        this.state = {value: '', em: this.employees, outPuts: ''}
    }

    handleChange(event) {
        this.setState({value: event.target.value})
        this.state.em = this.employees.filter((e)=>(
            e.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
        ))
        this.setState({outPuts: event.target.value})
    }

    render(){
        const employee = this.state.em.map((e)=>(<li key={e.id}>{e.name}</li>))
        return (
            <form>
                <label> Employees : </label>
                <input type="text" style={{color:'orange'}} value={this.state.value} onChange={this.handleChange}/>
                <ul style={{color:'blue'}}>
                    {employee}
                </ul>
                <p>{this.state.outPuts.toUpperCase()}</p>
            </form>
        )
    }
}