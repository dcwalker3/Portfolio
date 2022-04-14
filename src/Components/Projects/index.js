import React from 'react'

import Portfolio from './Portfolio'
import ComingSoon from './ComingSoon';

export default function Project(props) {
    // Switch statement to determine which project to display based off props.project
    switch (props.project) {
        case 'portfolio':
            return (<Portfolio/>)
    
        default:
            return (<ComingSoon/>)
  }
}
