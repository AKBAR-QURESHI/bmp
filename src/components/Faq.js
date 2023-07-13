import React from 'react'

const Detail = (props) => {
    return (

        <ul>
            <li data-aos="fade-up">
            <i class="fa-regular fa-circle-question icon-help"></i><a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">{props.question}<i class="bx bx-chevron-down icon-show"></i></a>
                <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                    <p>
                        {props.ans}
                    </p>
                </div>
            </li>
        </ul>

    )
};





const Faq = () => {
    return (
        
            <section id="faq" className="faq">
              <div className="container">

                <div className="section-title" data-aos="fade-down">
                    <span>F.A.Q</span>
                    <h2>F.A.Q</h2>
                    <p>Frequently Asked Questions</p>
                </div>

                <div className="faq-list">
                    <Detail question={'Non consectetur a erat nam at lectus urna duis? '} ans={'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'} />
                    <Detail question={'Feugiat scelerisque varius morbi enim nunc?'} ans={'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'} />
                    <Detail question={'Dolor sit amet consectetur adipiscing elit?'} ans={'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis'} />
                    <Detail question={'Tempus quam pellentesque nec nam aliquam sem et tortor consequat?'} ans={'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.'} />
                    <Detail question={'Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?'} ans={'Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.'} />
                </div>
            </div>
        </section>
   

    )
};
export default Faq;
