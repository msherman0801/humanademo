import React from 'react'
import NavBar from '../navbar/NavBar'
import Infobox from '../infobox/InfoboxContainer'

class HomeContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            plans: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:5000/plans/all")
            .then(results => results.json())
            .then(plans => {
                this.setState({
                    plans: plans
                })
            })
            .catch(err => console.log(err))
    }

    getAllPlans() {
        let list = []
        console.log(this.state.plans.length)
        for (let i = 0; i < this.state.plans.length; i++) {
            let plan = this.state.plans[i]
            list.push(<Infobox plan={plan} />)
        }
        return list
    }

    render() {
        return (
            <>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body text-left">
                                <h5 className="card-title text-danger font-weight-bold">Coronavirus COVID-19: Prevention and preparedness</h5>
                                <p className="card-text text-left">Coronavirus COVID-19: Prevention and preparedness
                                    Humana is actively monitoring the coronavirus situation and coordinating with public health authorities. 
                                    We have plans in place to keep our members, employees and provider partners safe, and as the situation evolves we will adapt our policies to ensure access to essential care.<hr></hr>
                                    It’s important for people to stay grounded in facts from public health authorities, including the Centers for Disease Control and Prevention.<br /><br />
                                    The CDC recommends that you wash your hands frequently and thoroughly, clean and disinfect surfaces and frequently touched objects, and avoid touching your face. You should also stay home when you are sick and avoid close contact with others who are sick.
                                    Humana will provide updates as the situation changes.
                                    Read this article for more information.
                                </p>
                                <a href="https://www.humana.com/" className="btn btn-success">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">{this.getAllPlans()}</div>
                </div>
            </div>
            </>
        )
    }
}

export default HomeContainer