import React from 'react'

class Card extends React.Component {

    constructor(props) {
        super(props)
        this.plan = this.props.plan
        this.state = {
            border: null
        }
    }

    select() {
        this.props.select(this.plan)
        if (this.state.border) {
            this.state.border = null
        } else {
            this.state.border = "border border-danger rounded"
        }
    }

    render() {
        return (
               <div class="col-sm mt-3">
               <div className={this.state.border}>
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{this.plan.name}</h5>
                        <p class="card-text">{this.plan.description}</p>
                        <a href="#" class="btn btn-secondary" onClick={this.select.bind(this)}>Select</a>
                    </div>
                    </div>
                    </div>
                </div>
        )
    }
}

export default Card