import React from "react";

function About () {
    const imgRef = React.useRef(null);
    const containerRef = React.useRef(null);

    const initContainer = (image: React.SyntheticEvent<HTMLImageElement>) => {
        const container = containerRef.current! as HTMLElement;
        if (window.innerWidth < 576) {
            container.style.height = '300px'; 
        }
        else {
            container.style.height = (image.target as HTMLElement).clientHeight + 'px';
        }   
    }

    React.useEffect(() => {
        const handleContainer = () => {
            const container = containerRef.current! as HTMLElement;
            if (window.innerWidth < 576) {
                container.style.height = '300px'; 
            }
            else {
                container.style.height = (imgRef.current! as HTMLImageElement).height + 'px';
            }
        }

        window.addEventListener("resize", handleContainer);
        return () => {
            window.removeEventListener("resize", handleContainer);
        }
    }, []);

    return (

        <React.Fragment>

            <img id="img-about-top" className='d-none d-sm-block'
                src='/images/frames/bg-curve.jpg' alt="bg-curve"/>

            <section id="about">

                <img ref={imgRef} 
                    className='d-none d-sm-block'
                    src='/images/frames/bg-about.png' alt="bg-about" 
                    onLoad={(image) => initContainer(image)}/>

                <div ref={containerRef} className='container'>
                    <div id="about-content">
                        <h4>About "Beauty Equipment"</h4>

                        <p>For several years, Beauty Equipment has been successfully selling cosmetology equipment and preparations for injectable cosmetology in the Baltics. In close cooperation with leading manufacturing companies from Italy and Poland and on the basis of exclusive representation, we offer our customers the highest quality products, including hardware cosmetics and popular techniques on the market.
                            <br/><br/>
                            Buying products in our company means not only receiving the purchased goods on time, but also full support.
                            <br/><br/>
                            We take into account the individual characteristics of each client, his preferences and needs. That is why it is important for us to know how successfully the equipment is used by our customers, whether it brings the desired results, and also special attention is paid to recommendations for improvement, which we pass on to our manufacturing partners for consideration.
                            <br/><br/>
                            All presented equipment is certified in accordance with international quality standards ISO and have the appropriate CE certificates.
                            <br/><br/>
                            We organize advanced training seminars and trainings approved by the Latvian Association of Occupational Medical Specialists (LAPPOS).
                            <br/><br/>
                            We cooperate with several Latvian schools of cosmetologists (CIDESCO International School of Cosmetics in Riga, P. Stradins Medical College of Latvia, University of Latvia, Tiara Training Center, etc.)
                            <br/><br/>
                            We participate in various congresses and exhibitions of the Baltic countries (in Latvia - the Baltic Beauty exhibition, in Estonia - ILU SONUM, etc.)
                        </p>
                    </div>
                </div>

            </section>

        </React.Fragment>
        
    );
}

export default About;