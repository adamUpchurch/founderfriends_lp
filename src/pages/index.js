import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BasicForm from "../components/basicForm"
import Chimp from "../components/chimp"
import featureImage from "../../static/images/hero.png";
import thumbnailBook from "../../static/images/comm.png"
import thumbnailWizard from "../../static/images/pitch.png"
import thumbnailSalsa from "../../static/images/culture.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"
import thumbnailChat from "../../static/images/feature-user.png"
import thumbnailVideo from "../../static/images/video-call.png"
import iconTwitter from "../../static/images/icon-twitter.svg"



class IndexPage extends React.Component {

    render() {
        return (
            <Layout>
                <SEO title="Language Learning App"/>

                <div className={"page-header home"}>
                    <h1 style={{margin: 0}}>Founder Friends</h1>
                    <div style={{marginTop: 30}}>
                        <p>Video chat with other founders to share your story <br/> practice your pitch, learn someone else's lessons <br/> & engage with founders from around the world.</p>
                    </div>
                    {/* <div style={{margin: 50, marginBottom: -50, textAlign: "center"}}>
                        <iframe src="https://appetize.io/embed/<PUBLIC_KEY>?device=iphonex&scale=75&autoplay=false&orientation=portrait&deviceColor=black" width="378px" height="800px" frameborder="0" scrolling="no" style={{display: "inline-block"}}></iframe>
                    </div> */}
                    {/* <video width="100%" height="auto" autoPlay controls>
                        <source src={thumbnailVideo} type="video/mp4" />
                    </video> */}
                    <img width="40%" height="auto" alt={"News"} src={thumbnailVideo}/>

                </div>

                <div className={"container"}>
                    <div className={"features"}>
                        <div className={"feature__item"}>
                            <div className={"row"}>
                                <div className={"col-6 first"}>
                                    <div className={"thumbnail"}>
                                        <img alt={"Event"} src={thumbnailBook}/>
                                    </div>
                                </div>
                                <div className={"col-6"}>
                                    <div className={"feature__content"}>
                                        <h2>Connect with founders</h2>
                                        <p>Don't just learn a language. Enjoy learning a language by reading a thrilling novel or a must read classic. Read your favorite novels line by line in your native language and the language you're learning.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"feature__item"}>
                            <div className={"row"}>
                                <div className={"col-6"}>
                                    <div className={"feature__content"}>
                                        <h2>Practice your pitch & communication.</h2>
                                        <p>The Hobbit by JRR Tolkien has 96,072 words,<br/>with 6,911 unique words. You'll be a Word Wizard in no time!</p>
                                    </div>
                                </div>

                                <div className={"col-6 first"}>
                                    <div className={"thumbnail"}>
                                        <img alt={"Board"} src={thumbnailWizard}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"feature__item"}>
                            <div className={"row"}>
                                <div className={"col-6 first"}>
                                    <div className={"thumbnail"}>
                                        <img alt={"News"} src={thumbnailSalsa}/>
                                        <a href="https://www.vecteezy.com/"> Vectors by Vecteezy</a>
                                    </div>
                                </div>

                                <div className={"col-6"}>
                                    <div className={"feature__content"}>
                                        <h2>Embrace the culture!</h2>
                                        <ol>
                                            <li>Founders and startups are a culture and way of life.</li>
                                            <li>Founders and startups are a culture and way of life.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className={"feature__item"}>
                            <div className={"row"}>
                                <div className={"col-6"}>
                                    <div className={"feature__content"}>
                                        <h2>It's a three step process:</h2>
                                        <p>learn words & grammar <br/>learn how to pronounciate & listen<br/>Go converse! </p>
                                    </div>
                                </div>

                                <div className={"col-6 first"}>
                                    <div className={"thumbnail"}>
                                        <img alt={"Team"} src={thumbnailTeams}/>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className={"feature__item"}>
                            <div className={"row"}>
                                <div className={"col-6 first"}>
                                    <div className={"thumbnail"}>
                                        <img alt={"Users"} src={thumbnailStaff}/>
                                    </div>
                                </div>

                                <div className={"col-6"}>
                                    <div className={"feature__content"}>
                                        <h2>Staff management</h2>
                                        <p>Discard traditional ways to archive staff documents and information, and try new ways to store and archive them in HiStaff easily.</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className={"call-to-action"} id="download_beta">
                    <iframe src="https://cdn.forms-content.sg-form.com/9a6678d9-5442-11ea-9cf4-a27321d5a3b7"/>
                    {/* <Chimp /> */}
                    {/* z</div> */}
                </div>
            </Layout>
        )}
    }

export default IndexPage
