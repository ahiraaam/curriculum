import React from 'react';
import H2Styled from '../styled/h2styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Education = props => (
    <div className="Education">
        <H2Styled name="Education"></H2Styled>
        <div className="Education-Container">
            {props.data.map((edu, index) => (
                <div className='Education-item' key={`Education-${index}`}>
                <H3Styled>{edu.degree} {edu.institution} <span>{edu.startDate} - {edu.endDate}</span></H3Styled>
                <PStyled name={edu.description}/>
                </div>
            ))}
        </div>
      
    </div>
  );

export default Education;

