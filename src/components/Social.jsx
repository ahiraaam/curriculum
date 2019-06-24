import React from 'react';

const Social = props => (
    <div className="Social">
        {props.social &&
            <ul>
                {props.social.map((item,index)=> (
                    <li key={`Social-${index}`} target="_blanck"> 
                        <a href={item.url}>{item.name}</a>
                    </li>
                ))}
            </ul>

        }
    </div>
);

export default Social;