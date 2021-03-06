import React from 'react';
import H2Styled from '../styled/h2styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Experience = props =>(
    <div className="Experience">
        <H2Styled name="Experience"></H2Styled>
        <div className="Experience-container">
           {props.data.map((exp,index)=>(
                <div className="Experience-item" key={`Experience-${index}`} >
                    <H3Styled>{exp.company} {exp.jobTitle} <span>{exp.startDate} - {exp.endDate}</span></H3Styled>
                    <PStyled name={name.description}/>
                </div>
           ))}
        </div>
    </div>
);

export default Experience;