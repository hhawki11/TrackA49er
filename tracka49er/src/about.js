import React from 'react';
import './App.css';

function About() {
    return (
        <div className='about'>
            <h1>About Us</h1>


            <div>
                <div className='strip'>
                    We are a group of computer science students at the University of North Carolina at Charlotte.
                    We created TrackA49er in order to help studetns, falculty, staff, and visitors better navigate the campus.

                    <h2>How to Use TrackA49er</h2>

                    <h3>Advertise</h3>
                    Check the advertise panel to get a glimpse on campus and find the best time to promote your product!
                    <h3>Plan</h3>
                    As a student,staff member, or visitor you can find great the quitest places on campus, the most active, or get a general feel with the heatmap!
                    <h3>Research</h3>
                    As a network engineer you are able to detect issues in any building at any point in time

                    <h2>Tutorial</h2>

                    <h3>Heat Map</h3>
                    <p>The Heat Map shows the amount of connections at any part of campus at any given time.</p>
                    <p>On the left hand side, you can change the time of day as well as the day of the week. The map will then update to show connections during that time.</p>
                    <p>You can view any building name as well as the exact amount of connections it has on this page.</p>

                    <h3>High / Low Activity Areas</h3>
                    <p>You can click the High Activity Areas or the Low Activity Areas tabs and see the areas on campus that currently have the highest or lowest amount of connections.</p>
                    <p>The High Activity page shows which areas currently have the most connections.</p>
                    <p>If you want to find a quiet place to relax during any time, the Low Activity page lets you choose the time and day of the week for that purpose.</p>
                </div>
            </div>

        </div>
    );
}

export default About;