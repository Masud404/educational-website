import React from 'react';
import Testi from '../../images/testi-b1.png'
const About = () => {
    return (
        // About section and Image
        <div className="row my-5">
            <div className="col-6">
                <img src={Testi} alt="" />
            </div>
            {/* About Us Details */}
            <div className="col-6">
                <h2 className='fw-bold'>About Us</h2>
                <p>Universities are increasingly using text messaging to create a more connected campus. The medium is a natural fit for digital native students and its immediate nature makes it an effective way to contact staff. It’s also accessible when used with text-to-speech capabilities, screen magnifiers and mobile braille displays.

                    There’s plenty of evidence to prove that people want to receive customer service by text. As Social Media Today found, 76% of people report they’re more likely to read a message sooner if it’s a text rather than an email, while 7% thought it was a good way for an organisation to get their attention. Business Wire reports that 52% prefer customer support by text messaging. So, it’s clearly a medium universities would do well to utilise. Read on for a round-up of the key ways your university can make the most of this medium.</p>
                <p>Emergency Notification System: Send immediate alerts for safety matters including on-campus crime and weather hazards.

                    Reminders: Send reminders that are more certain to be read than email for approaching deadlines, registration, tuition and other due dates.

                    Event Notifications: Boost attendance at future events, or alert people to last minute campus gatherings such as career fairs, athletics, and volunteer opportunities.

                    Campus Deals: Boost bookstore revenue with promotions sent through text about book buybacks and sale events.

                    School Closings Alerts: Send a quick text message to make sure students don’t waste travel time.

                    Student Interaction: Boost participation in elections, new clubs, and campus contests.</p>
            </div>
        </div>
    );
};

export default About;