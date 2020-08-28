import React, {Component} from 'react'

class Projects extends Component {
    render() {
        const {match, projects} = this.props
        return (
            <div>
                <h1>{projects[match.params.id].title}</h1>
                <a href='#'>{projects[match.params.id].link}</a>
            </div>
        )
    }
}

export default Projects