import styles from './Experience.module.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { Orientation } from '@mui/material';
import { isMobile } from 'react-device-detect';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box className={styles['tab-body']}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Experience = () => {
  const [value, setValue] = useState(0);
  const [orientation, setOrientation] = useState<Orientation>('vertical');

  const experienceRecord = [
    {
      organization: 'Cognizant',
      roles: [
        {
          designation: 'Senior Engineer',
          fromWhen: 'Aug-2021',
          till: 'Present',
          works: [
            'Write modern, performant, maintainable code for a diverse array of client and internal projects.',
            `Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript,
        Gatsby, React, Craft, WordPress, Prismic, and Netlify`,
          ],
        },
      ],
    },
    {
      organization: 'Mindtree Ltd',
      roles: [
        {
          designation: 'Senior Engineer',
          fromWhen: 'Jan-2021',
          till: 'Aug-2021',
          works: [
            'Write modern, performant, maintainable code for a diverse array of client and internal projects.',
            `Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript,
        Gatsby, React, Craft, WordPress, Prismic, and Netlify`,
          ],
        },
        {
          designation: 'Engineer',
          fromWhen: 'Oct-2018',
          till: 'Dec-2020',
          works: [
            'Write modern, performant, maintainable code for a diverse array of client and internal projects.',
            `Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript,
        Gatsby, React, Craft, WordPress, Prismic, and Netlify`,
          ],
        },
        {
          designation: 'Engineer',
          fromWhen: 'Oct-2018',
          till: 'Dec-2020',
          works: [
            'Write modern, performant, maintainable code for a diverse array of client and internal projects.',
            `Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript,
        Gatsby, React, Craft, WordPress, Prismic, and Netlify`,
          ],
        },
        {
          designation: 'Engineer',
          fromWhen: 'Oct-2018',
          till: 'Dec-2020',
          works: [
            'Write modern, performant, maintainable code for a diverse array of client and internal projects.',
            `Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript,
        Gatsby, React, Craft, WordPress, Prismic, and Netlify`,
          ],
        },
        {
          designation: 'Engineer',
          fromWhen: 'Oct-2018',
          till: 'Dec-2020',
          works: [
            'Write modern, performant, maintainable code for a diverse array of client and internal projects.',
            `Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript,
        Gatsby, React, Craft, WordPress, Prismic, and Netlify`,
          ],
        },
        {
          designation: 'Engineer',
          fromWhen: 'Oct-2018',
          till: 'Dec-2020',
          works: [
            'Write modern, performant, maintainable code for a diverse array of client and internal projects.',
            `Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript,
        Gatsby, React, Craft, WordPress, Prismic, and Netlify`,
          ],
        },
      ],
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (isMobile) {
      setOrientation('horizontal');
    }
  }, []);
  return (
    <section id="experience" className={styles['experience']}>
      <h2 className={styles['experience-header']}>Where I've Worked</h2>
      <Box
        className={`${styles['experience-body']} ${
          orientation === 'horizontal' ? styles['experience-body-sm'] : ''
        }`}
      >
        <Tabs
          orientation={orientation}
          variant={orientation === 'horizontal' ? 'fullWidth' : 'scrollable'}
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
          TabIndicatorProps={{
            style: { backgroundColor: '#64ffda' },
          }}
          className={styles['tab-heading-container']}
        >
          <Tab
            className={styles['tab-header']}
            label="Cognizant"
            {...a11yProps(0)}
          />
          <Tab
            className={styles['tab-header']}
            label="Mindtree Ltd."
            {...a11yProps(1)}
          />
        </Tabs>
        {experienceRecord.map((exp) => (
          <TabPanel
            value={value}
            index={experienceRecord.indexOf(exp)}
            key={exp.organization.toLowerCase()}
          >
            {exp.roles.map((role) => (
              <div
                className={styles.role}
                key={`${role.designation}-${role.fromWhen}`}
              >
                <h2 className={styles['designation']}>{role.designation}</h2>
                <span
                  className={styles['serve-year']}
                >{`${role.fromWhen} to ${role.till}`}</span>
                <div className={styles['works']}>
                  {role.works.map((work) => (
                    <p key={work}>{work}</p>
                  ))}
                </div>
              </div>
            ))}
          </TabPanel>
        ))}
      </Box>
    </section>
  );
};

export default Experience;
