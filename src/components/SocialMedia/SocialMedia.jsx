import React from 'react'



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
          <ul className="profile-social-links">
          <li>
            <a href="mailto:victor.leon.huerta@gmail.com">
              <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="logo" />
            </a>
          </li>

          <li>
            <a href="https://github.com/victorleon0">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/victorleon0/">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" />
            </a>
          </li>
        </ul>
      </div>
  )
}

export default SocialMedia
