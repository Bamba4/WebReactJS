import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddForm from "./AddForm";

class About extends Component {

    constructor(props){
        super(props);
        this.state =  {

            contact: {
                name: 'Bamba Diagne', profile: 'images/profile.jpeg', email: 'diagnec341@gmail.com'
            },
            skills: [
                {id: 1, skill: 'Sofware design'},
                {id: 2, skill: 'developper'},
                {id: 3, skill: 'Telecom & Reseaux'}
            ],
            title: 'Keep your smile'
        }

    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <strong>
                        <label className="align-content-center">{this.state.title}</label>
                    </strong>
                </div>
                <div className="row p-2">
                    <div className="col col-auto">
                        <img width={150} src={this.state.contact.profile} alt="profile"/>
                    </div>
                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item">{this.state.contact.name}</li>
                            <li className="list-group-item">{this.state.contact.email}</li>
                        </ul>
                    </div>
                </div>
                <div className="card m-2">
                    <div className="card-header">Skills</div>
                    <div className="card-body">
                        <AddForm addSkill={this.addSkill}/>
                        <table className="table">
                           <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Skill</th>
                                </tr>
                           </thead>
                            <tbody>
                                {
                                    this.state.skills.map((v,index) =>

                                        <tr key={index}>
                                            <td>{v.id}</td>
                                            <td>{v.skill}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => this.onDelete(v)}>X</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
    addSkill = (skillValue) => {
        let skill = {
            id: this.state.skills.length !== 0 ? [...this.state.skills].pop().id + 1 : 1,
            skill: skillValue
        };
        this.setState({
            skills: [...this.state.skills,  skill]
        })
    };


    onDelete = (s) => {
        let index = this.state.skills.indexOf(s);
        console.log(index);
        let listSkills = [...this.state.skills];
        listSkills.splice(index, 1);
        this.setState({
            skills: listSkills
        })
    }
   /* componentDidMount() {
        alert('Component didi mount')
    }
    componentWillMount() {
        alert('Component will mount')
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        alert('Will update')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert('Did update')
    }*/
}

export default About;
