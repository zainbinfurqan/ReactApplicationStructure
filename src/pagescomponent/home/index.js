import React, { Component } from 'react'
import { Header } from 'component/common/header'

class HomeComp extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <>
                <Header />
                <h2>home</h2>
            </>
        )
    }
}
export default HomeComp