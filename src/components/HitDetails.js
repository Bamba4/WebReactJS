import React, {Component} from 'react';
import axios from 'axios';
import HitItem from "./HitItem";

class HitDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hit: null,
        }
    }
    componentDidMount() {
        this.getHit(this.props.match.params.id);
    }
    getHit = (id) => {
      let url = 'https://pixabay.com/api/?key=7702561-f5132c8dfe875c4f3d4281af6&id='+id;
      axios.get(url)
          .then((resp) => {
             console.log(resp.data.hits[0]);
             this.setState({
                 hit: resp.data.hits[0]
             })
          }).catch(error => {
              console.error(error)
      })
    };
    render() {

        return (
            <div>
                {
                    (this.state.hit !== null) ? <HitItem isDetail={true} hit={this.state.hit}/> : <h1>No hit</h1>
                }
            </div>
        );
    }
}

export default HitDetails;
