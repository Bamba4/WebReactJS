import React, {Component} from 'react';

class AddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            skillValue: ''
        }
    }
    onChangeSkill = (event) => {
        this.setState({
            skillValue: event.target.value
        })
    };
    onAddSkill = (event) => {
        event.preventDefault();
        this.props.addSkill(this.state.skillValue);
        this.setState({
            skillValue: ''
        })
    };
    render() {
        return (
            <div>
                <form className='m-2' onSubmit={this.onAddSkill}>
                    <div className="row">
                        <div className="col">
                            <input type="text" value={this.state.skillValue} onChange={this.onChangeSkill} placeholder="Skill to add" className='form-control p-1'/>
                        </div>
                        <div className="col-auto">
                            <button className='btn btn-primary' type='submit'>ADD</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddForm;
