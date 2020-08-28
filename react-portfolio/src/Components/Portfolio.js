import React, {Component, Fragment} from 'react'

import Projects from './Projects'
import {NavLink, Route} from 'react-router-dom'

class Portfolio extends Component {
    render() {
        const {projects, match} = this.props
        return (
            <Fragment>
                <h1>Projects:</h1>
                {Object.keys(projects).map(id=> {
                    return (
                        <Fragment>
                            <NavLink key={id} to={`/portfolio/${id}`}>{projects[id].title}</NavLink>
                        </Fragment>
                    )
                })}
            </Fragment>
        )
    }
}

export default Portfolio