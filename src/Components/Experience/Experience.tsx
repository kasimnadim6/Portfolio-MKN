import styles from './Experience.module.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
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
  console.log(children);
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
      role: 'Associate',
      fromWhen: 'Aug-2021',
      till: 'Present',
      works: [
        'Write modern, performant, maintainable code for a diverse array of client and internal projects.',
        `Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript,
        Gatsby, React, Craft, WordPress, Prismic, and Netlify`,
      ],
    },
    {
      organization: 'Mindtree Ltd',
      role: 'Senior Engineer',
      fromWhen: 'Oct-2018',
      till: 'Aug-2020',
      works: [
        'Write modern, performant, maintainable code for a diverse array of client and internal projects.',
        `Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript,
        Gatsby, React, Craft, WordPress, Prismic, and Netlify`,
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
            <h2 className={styles['role']}>
              {`${exp.role} @ `}
              <span className={styles['org']}>{exp.organization}</span>
            </h2>
            <span
              className={styles['serve-year']}
            >{`${exp.fromWhen} to ${exp.till}`}</span>
            <div className={styles['works']}>
              {exp.works.map((work) => (
                <p>{work}</p>
              ))}
            </div>
          </TabPanel>
        ))}
      </Box>
    </section>
  );
};

export default Experience;
