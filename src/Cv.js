import React from 'react'
import './Cv.css';

export default function Cv() {
    return (
        <div className="Cv">

            <div className="work">
                <h2 class="resumeH2">Arbetslivserfarenhet</h2>

                <h3 className="resumeH3">PostNord</h3>
                <h4 className="resumeH4">2010 - 2020</h4>
                <h4 className="resumeH4">Brevbärare</h4>

                <h3 className="resumeH3">Göteborgs universitet</h3>
                <h4 className="resumeH4">2018</h4>
                <h4 className="resumeH4">Studenthandledare</h4>
            </div>

            <div className="education">
                <h2 className="resumeH2">Utbildning</h2>

                <h3 className="resumeH3">Medieinstitutet Göteborg</h3>
                <h4 className="resumeH4">2020 - 2022</h4>
                <h4 className="resumeH4">Front End Developer</h4>

                <h3 className="resumeH3">Uppsala Universitet</h3>
                <h4 className="resumeH4">2020</h4>
                <h4 className="resumeH4">Dynamiska webbapplikationer (7.5 hp)</h4>

                <h3 className="resumeH3">Göteborgs universitet</h3>
                <h4 className="resumeH4">2017 - 2020</h4>
                <h4 className="resumeH4">Systemvetenskap: IT, människa och organisation (180 hp)</h4>

                <h4 className="resumeH4">2016</h4>
                <h4 className="resumeH4">Juridisk grundkurs (15 hp)</h4>

                <h4 className="resumeH4">2016</h4>
                <h4 className="resumeH4">Psykologi: Fortsättningskurs (30 hp)</h4>

                <h4 className="resumeH4">2015</h4>
                <h4 className="resumeH4">Psykologi: Grundkurs (30 hp)</h4>
            </div>
            <div className="about">
                <h2 className="resumeH2_2">Grejer jag kan:</h2>
                <h4 className="resumeH4">HTML</h4>
                <h4 className="resumeH4">CSS</h4>
                <h4 className="resumeH4">JavaScript</h4>
                <h4 className="resumeH4">TypeScript</h4>
                <h4 className="resumeH4">React</h4>
                <h4 className="resumeH4">Git</h4>
                <h4 className="resumeH4">GitHub</h4>
            </div>

        </div>
    );
}