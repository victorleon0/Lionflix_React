import React from "react";
import "./ContactCard.scss";

const ContactCard = () => {
  return (
    <div className="containercards">
      <aside className="profile-card">
        <header>
          <a href="https://github.com/victorleon0">
            <img
              src="https://media-exp1.licdn.com/dms/image/D4E03AQGT65qc9KZ1nw/profile-displayphoto-shrink_400_400/0/1663607452080?e=1671062400&v=beta&t=74dWTbndfCEKg-1I7F0Nb5K6A_UtCyOBNtCvYfk2NzY"
              alt="img"
            />
          </a>

          <h3>Víctor León</h3>

          <h2>Full Stack Developer</h2>
        </header>

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
      </aside>
      
    </div>
  );
};

export default ContactCard;
