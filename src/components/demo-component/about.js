import React from 'react';
// import Navigation from '../components/navigation/navigation'
import Navigation from '../navigation/navigation'
import Footer from '../footer-component/footer';

export default function About() {
    return (
        <div className="container-fluid p-0 h-100">
            <div className="h-100 overflow-auto">
                {/* Top with box, divider and text */}
                <div className="d-flex justify-content-center w-60 mx-auto h-60 align-items-center">
                    <div className="border border-5 team d-flex justify-content-center align-items-center">
                        <span className="h4">The Team</span>
                    </div>
                    <div className="border-0 border-start border-5 ms-5 h-60 my-auto"></div>
                    <div className="ms-5">
                        <p className="lead">
                            We are <span className="fw-bolder">digital fans</span> , geek by nature, addicted to social networks and completely crazy about design.
                        </p>
                        <p>
                            Our team with a sharp mind mobilizes creative, technical and strategist profiles to support you in the craziest projects!
                        </p>
                    </div>
                </div>

                {/* bottom with people */}
                <div className="d-flex w-80 flex-wrap mx-auto mt-3 flex-fill">
                    {getTeamMembersInfo().map((member, index) => (
                        <TeamMember key={member.name + index} name={member.name} title={member.title} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

function TeamMember(props) {
    return (
        <div className="d-flex me-5">
            <div className="">
                {/* Inline style here on purpose because this should be replaced with team member photo or avatar */}
                <i className="bi bi-person-fill" style={{fontSize:'10rem'}}></i> 
            </div>
            <div className="d-flex flex-column justify-content-center">
                <span className="h6">{props.name}</span>
                <span className="fw-lighter">{props.title}</span>
            </div>
        </div>
    );
}

function getTeamMembersInfo() {
    return [
        { name: 'Melanie', title: 'developer' },
        { name: 'Melanie', title: 'developer' },
        { name: 'Melanie', title: 'developer' },
        { name: 'Melanie', title: 'developer' },
        { name: 'Melanie', title: 'developer' },
        { name: 'Melanie', title: 'developer' },
        { name: 'Melanie', title: 'developer' },
        { name: 'Melanie', title: 'developer' },
        { name: 'Melanie', title: 'developer' },
        { name: 'Melanie', title: 'developer' },
        { name: 'Melanie', title: 'developer' },
        { name: 'Melanie', title: 'developer' },
        { name: 'Melanie', title: 'developer' },
        { name: 'Melanie', title: 'developer' },
        { name: 'Melanie', title: 'developer' },
        { name: 'Melanie', title: 'developer' },
        { name: 'Melanie', title: 'developer' },
    ];
}