import React from "react";
import style from "./style/index.module.css";
import global from "../../global.module.css";
import cx from "classnames";

const About: React.FC = () => {
  return (
    <div id="about" className={style.about}>
      <div className={cx(global.container)}>
        <div className={cx(global.content, style.about__content)}>
          <h6>What about me</h6>
          <p>
            Phasellus a est. <span>Phasellus magna</span>. Integer ante arcu,
            accumsan a, consect etuer eget, posuere ut, maris. Nante arcu,
            accsan a, ectetuer eget, posue ut, mauris.
          </p>
        </div>
      </div>
      <div className={cx(global.container)}>
        <div className={cx(global.content, style.about__content)}>
          <h6>What i do</h6>
          <ul>
            <li>Blog.</li>
            <li>Portfolio.</li>
            <li>
              E<span>commerce</span>
            </li>
            <li>What ever you want</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
