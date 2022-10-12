import React from 'react'
import { TiSocialFacebookCircular } from 'react-icons/ti/index';
import { TiSocialGithubCircular } from 'react-icons/ti/index';
import { TiSocialInstagramCircular } from 'react-icons/ti/index';
import { TiSocialLinkedinCircular } from 'react-icons/ti/index';



import './SocialMedia.scss'

const SocialMedia = () => {

    const socialMediaLinks = {
        gitHub: 'https://github.com/victorleon0',
        instagram: 'https://www.instagram.com/VictorLeon_',
        linkedin: 'https://www.linkedin.com/in/victorleon0/',
        facebook: 'https://facebook.com/victorleon0'
      }


  return (
    <div className="socialMenu">
          <div className="socialitem">
          <a href="https://github.com/victorleon0">
            <TiSocialGithubCircular />
          </a>
          </div>

          <div className="socialitem">
          <a href="https://www.linkedin.com/in/victorleon0/">
            <TiSocialLinkedinCircular url={socialMediaLinks.linkedin} />
            </a>
          </div>

          <div className="socialitem">
          <a href="https://www.instagram.com/VictorLeon_">
            <TiSocialInstagramCircular url={socialMediaLinks.instagram} />
          </a>
          </div>

          <div className="socialitem">
          <a href="https://facebook.com/victorleon0">
            <TiSocialFacebookCircular url={socialMediaLinks.facebook} />
          </a>
          </div>
      </div>
  )
}

export default SocialMedia
