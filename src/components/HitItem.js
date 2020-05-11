import React from 'react';
import {Link} from "react-router-dom";

const HitItem = (props) => {

        return (
            <div className={!props.isDetail ? 'col-md-4' : 'm-2'}>
                <div className="card m-2">
                    <div className="card-header">{props.isDetail ? 'Detail' :props.hit.tags} | {props.hit.webformatHeight} X {props.hit.webformatWidth}</div>
                    <div className="card-body">
                        <img className="card-img" width={props.isDetail ? props.hit.webformatWidth  : 200} src={props.isDetail? props.hit.largeImageURL  :  props.hit.webformatURL} alt="Web "/>
                    </div>

                    {
                        (!props.isDetail) ?
                            <div>
                                <Link to={"/hitDetails/" + props.hit.id} className="btn btn-success m-2">Hit Details</Link>
                            </div> : <p></p>

                    }


                </div>
            </div>
        );

}

export default HitItem;
