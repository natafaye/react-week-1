import React, { Component} from 'react'
import ChannelView from './ChannelView'
import Sidebar from './Sidebar'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3 bg-dark">
                        <Sidebar />
                    </div>
                    <div className="col">
                        <ChannelView />
                    </div>
                </div>
            </div>
        )
    }
}
