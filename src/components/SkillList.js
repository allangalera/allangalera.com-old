import React from "react"
import "./skill.list.scss"

import Icon from "../components/Icon"
import Ruler from "../components/ruler"

const SkillList = ({ skillList }) => {
  const skillListElement = skillList.map(skill => {
    return (
      <div key={skill.name} className="skill">
        <div className="skill-name">
          <Icon icon={skill.icon} color="#333333" size={24} />
          <span>{skill.name}</span>
        </div>
        <div className="skill-level-bar">
          <div className="skill-default-level">
            <Ruler height={16} background="#D7D7D7" />
          </div>
          <div className="skill-current-level">
            <Ruler height={16} width={`${skill.level}%`} background="#8A05BE" />
          </div>
        </div>
        <div className="skill-level">{skill.level}%</div>
      </div>
    )
  })
  return (
    <div className="skill-list">
      <div className="skill-background">
        <div className="skill-legend">
          <div className="skill-legend-level">
            <span>beginner</span>
          </div>
          <div className="skill-legend-level">
            <span>intermediate</span>
          </div>
          <div className="skill-legend-level">
            <span>advanced</span>
          </div>
          <div className="skill-legend-level">
            <span>master</span>
          </div>
        </div>
      </div>
      <div className="skill-list-container">{skillListElement}</div>
    </div>
  )
}

export default SkillList
