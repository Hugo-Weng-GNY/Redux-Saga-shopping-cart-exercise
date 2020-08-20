import React, {Component} from 'react'

export default class Inventory extends Component {
    constructor(props){
        super(props)
        //this.buttonCycle = this.buttonCycle.bind(this)
        // this.getPageTitles = this.getPageTitles.bind(this)
        this.state = { buttonValue: this.getValue(), count: this.getValue(), pagesData: [], pagesInfo: ''}
    }

    componentDidMount() {
        fetch('https://jsonmock.hackerrank.com/api/articles?page=1')
            .then(resp => resp.json()).then(data=> this.setState({ pagesInfo: data, pagesData: data.data }))
    }

    getValue() {
        return 3
    }

    getButtonArr() {
        let n =1
        const arr= []
        while(n<=this.state.pagesInfo.total_pages) {
            arr.push(n)
            n++
        }
        return arr
    }

    getPageTitles(en){
        let paramsString = "https://jsonmock.hackerrank.com/api/articles?page="
        let api = paramsString + en
        fetch(api).then(resp => resp.json()).then(data=> this.setState({ pagesData: data.data }))
    }

    buttonCyc(e) {
        console.log(this.state.pagesData)
        if(this.state.buttonValue === 4) {
            this.setState({buttonValue: 0, count:0})
        } else {
            this.setState({count: this.state.buttonValue++})
            // console.log(this.state.buttonValue,this.state.count )
        }
    }

    render() {
        const buttonCycle = (<button onClick={this.buttonCyc.bind(this)}>{this.state.buttonValue}</button>)
        const { pagesInfo, pagesData } = this.state
        const pageArr = pagesData.map((e,index)=>(<li key={index}>{e.title}</li>))
        const pageButton = this.getButtonArr().map(en=>
            <button key={en} style={btnStyle} onClick={this.getPageTitles.bind(this,en)}>{en}</button>
        )

        return (
            <div>
                <p>Inventory...</p>
                {buttonCycle}
                <br/>
                <p>Page: {pagesInfo.page}</p>
                <p>Per Page: {pagesInfo.per_page}</p>
                <p>Total: {pagesInfo.total}</p>
                <p>Total Pages: {pagesInfo.total_pages}</p>
                <ul>
                    {pageArr}
                </ul>
                {pageButton}
            </div>
        )
    }
}

const btnStyle = {
    margin: '5px'
}