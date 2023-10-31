'use client'
import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CompanyGrid from "../components/CompanyGrid";

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
};

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export default function TabsContainer() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <div className="lg:align-center justify-center" >
     {/* mx-40 mt-10 sm:mx-10 sm:mt-5"> */}
      <div  style={{width:'100vw', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Tabs style={{display:'flex', justifyContent:'center', alignItems:'center'}} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Top Gainers" {...a11yProps(0)} />
          <Tab   label="Top Losers" {...a11yProps(1)} />
          </Tabs>
      </div>
      <CustomTabPanel value={value} index={0}>
        <CompanyGrid route="topGainers" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CompanyGrid route="topLosers" />
      </CustomTabPanel>
      </div>
  );
}
