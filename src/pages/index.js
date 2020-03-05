import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
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
                <SEO title="Video chat with aspiring startup founders."/>

                <div className={"page-header home"}>
                    
                    <div className={"feature__item"}>
                            <div className={"feature__content"}>
                                <h1>Connect with founders</h1>
                                <p>Video chat with other founders to share your story practice your pitch, learn someone else's lessons & engage with founders from around the world.</p>
                            </div>
                            <div className={"row"}>
                                <div className={"col-6"}>
                                <div className={"call-to-action"} id="download_beta">
                                    <iframe src="https://cdn.forms-content.sg-form.com/9a6678d9-5442-11ea-9cf4-a27321d5a3b7"/>
                                </div>
                                </div>
                                <div className={"col-6 first"}>
                                    <div className={"thumbnail"}>
                                    <img style={{marginTop:0, width: "100%", height: "auto"}} alt={"News"} src={thumbnailVideo}/>
                                    </div>
                                </div>
                            </div>
                                <div className={"copyright"}>
                                    <p> Organized by <a href="https://t.co/BJO0xeoNSR?amp=1" title={"Adam"}> Adam Upchurch</a></p>
                                </div>
                        </div>
                </div>
            </Layout>
        )}
    }

export default IndexPage
