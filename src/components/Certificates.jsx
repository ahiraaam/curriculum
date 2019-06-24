import React from 'react'

const Certificates = props =>(
    <div className="Certificates">
        <div className="Certificates-container">
            {props.data.map((cer,index) => (
                <div className="Certificates-item" key={`Certificate-${index}`}>
                    <h3>{cer.date} {cer.institution} {cer.name}</h3>
                    <p>{cer.description}</p>
                </div>
            ))}
            
        </div>
    </div>
);

export default Certificates;