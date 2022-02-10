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
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={styles['tab-body']}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
        <TabPanel value={value} index={0}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sit
          similique nobis delectus facilis ex minima porro nesciunt repellendus
          enim placeat dolorem, molestiae accusantium ratione doloribus atque.
          Neque, officia possimus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptate sit similique nobis delectus facilis ex
          minima porro nesciunt repellendus enim placeat dolorem, molestiae
          accusantium ratione doloribus atque. Neque, officia possimus.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptate sit
          similique nobis delectus facilis ex minima porro nesciunt repellendus
          enim placeat dolorem, molestiae accusantium ratione doloribus atque.
          Neque, officia possimus.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptate sit similique nobis delectus facilis ex
          minima porro nesciunt repellendus enim placeat dolorem, molestiae
          accusantium ratione doloribus atque. Neque, officia possimus.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptate sit
          similique nobis delectus facilis ex minima porro nesciunt repellendus
          enim placeat dolorem, molestiae accusantium ratione doloribus atque.
          Neque, officia possimus.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptate sit similique nobis delectus facilis ex
          minima porro nesciunt repellendus enim placeat dolorem, molestiae
          accusantium ratione doloribus atque. Neque, officia possimus.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptate sit
          similique nobis delectus facilis ex minima porro nesciunt repellendus
          enim placeat dolorem, molestiae accusantium ratione doloribus atque.
          Neque, officia possimus.
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two Description
        </TabPanel>
      </Box>
    </section>
  );
};

export default Experience;
