/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql, Link} from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/logo.svg"
import iconTwitter from "../../static/images/icon-twitter.svg"
import iconLinkedin from "../../static/images/icon-linkedin.svg"
import iconGitHub from "../../static/images/icon-github.svg"
import iconInstagram from "../../static/images/icon-instagram.svg"

const Layout = ({children}) => (
    <StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => (
        <>
        <Header siteTitle={data.site.siteMetadata.title}/>
            <main>{children}</main>
            {/* <footer>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-5"}>
                            <div className={"widget__item"}>
                                <h1 style={{marginTop: 0}}>Founder Friends</h1>

                                <div className={"about"}>
                                    <p>Video chat with other founders to share your story, practice your pitch, learn someone else's lessons and engage with founders from around the world.</p>
                                
                                </div>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <ul className={"links"}>
                                    <h4>Leo</h4>
                                    <ul>
                                        <li><a href={"https://histaff.io/blog"}>Blog</a></li>
                                        <li><a className={"links__special"} href={"https://feedback.histaff.io/"} target={"_blank"} title={"We look forward to receiving your great feedback"}>Feedback</a></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={"copyright"}>
                        <p> Organized by <a href="https://t.co/BJO0xeoNSR?amp=1" title={"Adam"}> Adam Upchurch</a></p>
                    </div>
                </div>
            </footer> */}
        </>
    )}/>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
