import React, {Component} from 'react';
import axios from 'axios';
import HitItem from "./HitItem";
class Gallery extends Component {
    onSearch = (event) => {
        event.preventDefault();
        this.getHits();

    };
    setKeyWord = (event) => {
        this.setState({
            currentKeyWord: event.target.value
        })
    };

    constructor(props){
        super(props);
        this.state = {
            hits: [],
            currentPage: 1,
            pageSize: 6,
            currentKeyWord: '',
            totalPages: 1,
            pages: []

        }
    }
    componentDidMount() {
       // this.getHits();
    }

    getHits() {
        let url = 'https://pixabay.com/api/?key=7702561-f5132c8dfe875c4f3d4281af6&q='+this.state.currentKeyWord+'&page='+this.state.currentPage+'&per_page='+this.state.pageSize;
        axios.get(url)
            .then(
                (resp)=> {
                    let totalPages = (resp.data.totalHits % this.state.pageSize === 0) ? resp.data.totalHits / this.state.pageSize : (resp.data.totalHits / this.state.pageSize |0) + 1;
                    this.setState({
                        hits: resp.data.hits,
                        totalPages: totalPages,
                        pages: new Array(totalPages).fill(0)
                    })
                }
            ).catch((err) => {
                console.error(err);
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSearch}>
                    <div className="row m-2 p-2">
                        <div className="col">
                            <input value={this.state.currentKeyWord}
                                   type="text" name="search"
                                   className="form-control"
                                   placeholder=" Rechercher des villes"
                                   onChange={this.setKeyWord}
                            />
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-success" type="submit">Search</button>
                        </div>
                    </div>
                </form>
                <div className="row">
                    {
                        this.state.hits.map((v,index) =>
                            <HitItem key={index} hit = {v}/>
                        )
                    }
                </div>
                <div>
                    <ul className="nav nav-pills">
                        {
                            this.state.pages.map((v,index) =>
                                    <li className=" m-2"  key={index}><button className={this.state.currentPage === index+1 ? 'btn btn-primary' : 'btn btn-link'} onClick={() => this.goToPage(index+1)}>{index+1}</button></li>
                            )
                        }
                    </ul>
                </div>
            </div>

        );
    }

    goToPage = (index) => {
        this.setState({
            currentPage: index
        }, () => {
            this.getHits()
        })

    }
}

export default Gallery;
