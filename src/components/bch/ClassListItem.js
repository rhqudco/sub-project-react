import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './SpaceClassList.css';

function ClassListItem(props) {
    return (
        <span id='wrap'>
            <div>
                {
                    props.class.classPhoto === ''
                        ? <img src={"img/default.png"} />
                        : <img src={props.class.classPhoto} />
                }
            </div>
            <span id='SpaceCard'>
                <p id='title'>{props.class.classTitle}</p>
                <p id='area'>{props.class.classArea}</p>
                <Link to={"/UpdateClass/" + props.class.classNo}><button class='fixBtn'>수정</button></Link>
            </span>
        </span>
    );
}

export default ClassListItem;