import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import styled from 'styled-components';
import { Typography } from '@mui/material';

const XTabs = styled(Tabs)({
  '&.MuiTabs-root': {
    border: '1px solid rgba(255,255,255,0.2)',
    // backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: '100px',
    minHeight: '28px',
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
});

const XTab = styled(Tab)({
  '&.MuiTab-root': {
    textTransform: 'none',
    padding: '0 14px',
    minHeight: '28px',
    borderRadius: '100px'
  },
  '&.MuiTab-root.Mui-selected': {
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
});

function HSC(props) {
  const [content, setContent] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(props.api);
    setContent(data.results);
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="hsc">
      <div className="scroller">
        {
          content && content.map(item => {
            return <Card key={item.id} {...item} media_type={item.media_type ? item.media_type : props.media_type} />
          })

        }

      </div>
    </div>
  )
}

function TabPanel(props) {
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
        <Box sx={{ height: '400px', }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <Typography variant="h5">{props.name}</Typography>

        {
          props.tabs.length > 1 &&
          <XTabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {
              props.tabs.map((tab, index) => <XTab key={index} label={tab.name} {...a11yProps(0)} />)
            }
          </XTabs>
        }

      </Box>
      {
        props.tabs.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            <HSC api={tab.api} media_type={tab.media_type}/>
          </TabPanel>))
      }
    </Box>
  );
}
