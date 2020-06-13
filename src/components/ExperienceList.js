import React from 'react';
import './experience-list.scss';

import Icon from '../components/Icon';

import { format, subYears, differenceInMonths, differenceInYears } from 'date-fns';
import { enUS } from 'date-fns/locale';

const ExperienceList = ({ experienceList }) => {
  const experienceListElement = experienceList.map(experience => {
    const startArray = experience.start.split('-');
    const endArray = experience.end ? experience.end.split('-') : null;

    const expStart = new Date(Date.UTC(startArray[0], startArray[1]));
    const expEnd = experience.end ? new Date(Date.UTC(endArray[0], endArray[1])) : null;

    const from = format(expStart, 'MMM yyyy', { locale: enUS });
    const fromCapitalized = from.charAt(0).toUpperCase() + from.slice(1);
    const to = expEnd ? format(expEnd, 'MMM yyyy', { locale: enUS }) : 'present';
    const toCapitalized = to === 'present' ? 'present' : to.charAt(0).toUpperCase() + to.slice(1);

    const fromTo = `${fromCapitalized} - ${toCapitalized}`;

    const end = expEnd ? expEnd : new Date();

    const calcYears = differenceInYears(end, expStart);

    let diffRemain = subYears(end, calcYears);

    const calcMonths = differenceInMonths(diffRemain, expEnd);

    let diffInWords = `${calcMonths} month${calcMonths > 0 ? 's' : ''}`;

    if (calcYears) {
      diffInWords = `${calcYears} year${calcYears > 0 ? 's' : ''} ` + diffInWords;
    }

    return (
      <div key={expStart} className="experience">
        <div className="dot-container">
          <div className="dot"></div>
        </div>
        <div className="title-time">
          <div className="line"></div>
          <div className="title-time-container">
            <div className="title">{experience.title}</div>
            <div className="time">
              <span className="from-to">{fromTo}</span>
              <span className="calc">{diffInWords}</span>
            </div>
          </div>
        </div>
        <div className="description-box">
          <div className="title">{experience.title}</div>
          <div className="info-location">
            <div className="company">{experience.company}</div>
            <span className="separator">
              <Icon icon="circle" size={4} color="#333" />
            </span>
            <div className="location">{experience.location}</div>
          </div>
          <div className="time">
            <div className="from-to">{fromTo}</div>
            <span className="separator">
              <Icon icon="circle" size={4} color="#333" />
            </span>
            <div className="calc">{diffInWords}</div>
          </div>
          <div className="description">{experience.description}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="experience-list">
      <div className="background">
        <div className="line-container">
          <div className="line"></div>
        </div>
      </div>
      <div className="list">{experienceListElement}</div>
    </div>
  );
};

export default ExperienceList;
