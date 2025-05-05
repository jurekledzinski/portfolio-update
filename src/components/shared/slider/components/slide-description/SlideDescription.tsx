import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';
import { getClassNamesSlideDescription } from '../../utils';
import { Icon } from '@/components/shared/icon';
import { SlideDescriptionProps } from './types';

export const SlideDescription = ({ data, isActive }: SlideDescriptionProps) => {
  const classes = getClassNamesSlideDescription(isActive);

  return (
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        <h4 className={classes.title}>{data.title}</h4>
        <p className={classes.text}>{data.description}</p>

        {Object.entries(data)
          .slice(2)
          .map(([key, value]) => {
            return (
              <Fragment key={key}>
                <h4 className={classes.title}>{key}</h4>
                <ul className={classes.list}>
                  {Array.isArray(value) &&
                    value.map((item) => (
                      <li key={item} className={classes.listItem}>
                        <Icon className={classes.icon} icon={faSquareCheck} />
                        <span>{item}</span>
                      </li>
                    ))}
                </ul>
              </Fragment>
            );
          })}
      </div>
    </div>
  );
};
