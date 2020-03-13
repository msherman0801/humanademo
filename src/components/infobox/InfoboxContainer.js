import React from 'react'

class InfoboxContainer extends React.Component {

    constructor(props) {
        super(props)
        this.plan = this.props.plan
    }

    render() {
        return (
            <div class="card mb-3 bshadow">
                <img class="card-img-top" src={this.plan.name+".jpg"} alt="Card image cap" />
                <div class="card-body">
                    <h4 class="card-title">{this.plan.name} Insurance</h4>
                    <p class="card-text">{this.plan.description}</p>
                    <p class="card-text"><small class="text-muted">Avg. Cost: ${this.plan.cost}/mo</small></p>
                </div>
            </div>
        )
    }
}

export default InfoboxContainer