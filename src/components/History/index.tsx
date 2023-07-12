import React from "react";
import style from "./style/index.module.css";
import global from "../../global.module.css";
import cx from "classnames";

const jobs = [
  {
    date: "now",
    title: "Software engineer",
    company: "Capgemini",
    type: "job",
  },
  {
    date: "2021",
    title: "Mern Stack Developer",
    company: "Magellan Formation",
    type: "formation",
  },
  {
    date: "2020",
    title: "Web Developer",
    company: "Openclassroom",
    type: "formation",
  },
];

const History: React.FC = () => {
  return (
    <div id="history" className={style.history}>
      <div className={cx(global.container, style.history__title)}>
        <h6>History</h6>
      </div>
      <div className={style.history__container_items}>
        {jobs.map((job) => (
          <div className={style.history__item}>
            <div
              className={cx(global.container, style.history__container_item)}
            >
              <div className={style.item__date}>
                <h5>{job.date}</h5>
              </div>
              <div className={style.item__description}>
                <h5>{job.title}</h5>
                <h6>{job.company}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
