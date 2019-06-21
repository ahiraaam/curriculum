import React from 'react';
import Main from '../components/Main';
import SideBar from '../components/SideBar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import Social from '../components/Social';
import useGetData from '../hooks/useGetData';
const App = () => {
    const data = useGetData();
    console.log(data)
    return (
        <Main>
            <SideBar>
                <About>

                </About>
            </SideBar>
            <Info>
                <Education></Education>
                <Experience></Experience>
                <Certificates></Certificates>
                <Skills></Skills>
            </Info>
        </Main>
    );
};

export default App;