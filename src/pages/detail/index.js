import React, { Component } from 'react'

import {
    DetialWrapper,
    DetialLeft,
    DetialRight
} from './style'
import DetialLeftC from './components/detialLeft'
export default class Home extends Component {
    render() {
        return (
            <DetialWrapper>
                <DetialLeft>
                    <DetialLeftC/>
                </DetialLeft>
                <DetialRight>
                    22
                </DetialRight>
            </DetialWrapper>
        )
    }
}
