import React from 'react'
import Card from './Card'

class MyPlans extends React.Component {

    constructor(props) {
        super(props)
        this.select = this.select.bind(this)
        this.state = {
            plans: [],
            box: {}
        }
        this.planCards = []
    }

    componentDidMount() {
        fetch("http://localhost:5000/users/5e69b32167dbfb1157c1becf/myplans")
            .then(res => res.json())
            .then(plans => {
                this.setState({
                    plans: plans
                })
            })
            .catch(err => console.log(err))
            this.genPlanCards()
    }

    genPlanCards() {
        let cards = []
        for (let i = 0; i < this.state.plans.length; i++) {
            cards.push(
                <div className={this.props.border}>
                    <Card plan={this.state.plans[i]} select={this.select} />
                    {this.props.toggle ? this.props.button : ""}
                </div>
            )
        }
        this.planCards = cards
    }

    select(plan) {
        if (plan.name in this.state.box) {
            delete this.state.box[plan.name]
        }else {
             this.state.box[plan.name] = plan._id
        }
    }

    addPlan = (type) => {
        console.log('HIT')
        fetch('http://localhost:5000/users/5e69b32167dbfb1157c1becf/addplan', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({name: type})
        }).then(res => res.json())
        .then(plans => {
            this.setState({
                plans: plans
            })
            this.genPlanCards()

        })
        .catch(err => console.log(err))
    }

    removePlans() {
        fetch("http://localhost:5000/users/5e69b32167dbfb1157c1becf/myplans", { 
            method: 'delete', 
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.box)
        }).then(res => res.json())
        .then(plans => {
            this.setState({
                plans: plans
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <div className="container mt-3">
                    <div className="text-left mb-3">
                        <button className="btn btn-outline-primary" value="Health" onClick={(e) => this.addPlan(e.target.value)}>Add Health</button>&nbsp;
                        <button className="btn btn-outline-primary" value="Dental" onClick={(e) => this.addPlan(e.target.value)}>Add Dental</button>&nbsp;
                        <button className="btn btn-outline-primary" value="Vision" onClick={(e) => this.addPlan(e.target.value)}>Add Vision</button>
                    </div>
                    <h3 className="text-left">Here are your active plans:</h3>
                    <div className="row">
                        {this.genPlanCards()}
                        {this.planCards}
                    </div>
                    <div class="text-left mt-3">
                        <button class="btn btn-outline-secondary" onClick={e => this.removePlans()}>Remove Plans</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyPlans