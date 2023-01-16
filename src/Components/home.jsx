import '../Components/home.css'

export const Home = () => {
    return (<section className={'home'}>
            <div className="max_width">
                <div className="h_container">
                    {[...Array(10)].map((x, i) =>
                        <figure>
                            <img src="https://www.deere.com/assets/images/common/home-page/agriculture-PSO-181x102.jpg"
                                 alt=""/>
                            <p>Agriculture</p>
                        </figure>
                    )}
                </div>
            </div>
            <div className="h_headingBanner">
                <figure>
                    <img src="https://www.deere.com/assets/images/common/home-page/ces-may-hero-1366x347.jpg" alt=""/>
                </figure>
            </div>
        </section>
    )
}