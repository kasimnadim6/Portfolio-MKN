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
          designation: 'Associate',
          fromWhen: 'Aug-2021',
          till: 'Present',
          works: [`Working with a small team as a React developer.`],
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
            `As a Senior Engineer I will be handling 2 projects Parallel, Working on Front- End Development.`,
            `Participated in the whole process of the development: Code design, Estimation and development, Devops.`,
            `Designed, developed and implemented software applications for website based on analyzed requirements and understanding of industry techincal standards.`,
            `Revised, Modularized and updated old code bases to modern development,
standards by reducing operating costs and improving functionality.`,
            `Coordinated with project management staff on database development timelines
and project scope.`,
            `Performed code reviews and PR approvals to meet project guidelines.`,
            `Wrote quality codes and Mentor junior developers and guid them with the best practices.`,
          ],
        },
        {
          designation: 'Engineer',
          fromWhen: 'Oct-2018',
          till: 'Dec-2020',
          works: [
            'Hands on Experience in building SPA using Angular as well as in MEAN Stack Development.',
            'Experienced in Angular Material Design.',
            'Have a good understanding in HTML and CSS/SASS.',
            'Experience in designing and development of REST API’s using Node, Express JS.',
            `Experience in Microsoft Azure Services like Active Directory, Virtual Machines,
            Azure DevOps, Azure App Services, Azure Storage, ARM Templates.`,
            'Experience in usage of Progressive Web App design & service workers for caching and provide feel like native app.',
            'Basic Knowledge in Web Application Development using ASP. Net, MVC, Entity Framework.',
            'Worked on Unit testing in angular using Jasmin/Karma frameworks.',
            'Generated code quality report using SonarQube.',
            'Know agile methodology, Bitbucket, Git, JIRA.',
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
            style: { backgroundColor: '#f7590f' },
          }}
          className={styles['tab-heading-container']}
        >
          {experienceRecord.map((exp) => (
            <Tab
              className={styles['tab-header']}
              key={exp.organization}
              label={exp.organization}
              {...a11yProps(experienceRecord.indexOf(exp))}
            />
          ))}
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
