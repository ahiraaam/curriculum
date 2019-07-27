import React from 'react';
import H2Styled from '../styled/h2styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificates = props =>(
    <div className="Certificates">
        <H2Styled name="Certificates"></H2Styled>
            {props.data.map((cer,index) => (
                <div className="Certificates-item" key={`Certificate-${index}`}>
                    <H3Styled>{cer.date} {cer.institution} {cer.name}</H3Styled>
                    <PStyled name={cer.description}></PStyled>
                </div>
            ))}
            
    </div>
);

export default Certificates;