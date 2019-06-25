import React from 'react'
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificates = props =>(
    <div className="Certificates">
        <H2Styled name="Certificates"></H2Styled>
        <div className="Certificates-container">
            {props.data.map((cer,index) => (
                <div className="Certificates-item" key={`Certificate-${index}`}>
                    <H3Styled>{cer.date} {cer.institution} {cer.name}</H3Styled>
                    <PStyled name={cer.description}></PStyled>
                </div>
            ))}
            
        </div>
    </div>
);

export default Certificates;