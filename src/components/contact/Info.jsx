import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { purple } from "@mui/material/colors";

function Info() {
  const infos = [
    {icon: LocationOnIcon,text1: "Adress:",text2: "Aswan Egypt",},
    {icon: EmailIcon,text1: "My Email:",text2: "ranyamohamed381@gmail.com",},
    {icon: CallIcon,text1: "Call Me Now:",text2: "0114 714 2033",},
  ];

  return (
    <>
      {/* <div className='info-container'> */}
      <div className="info">
        <p className="text-3xl font-semibold dark:text-white">Let’s discuss your Project</p>
        <p className="text-slate-500 text-xl dark:text-slate-400">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out if you'd like to connect!
        </p>
        <div className="info-details">
          {infos.map((item, index) => (
            <div
              key={index}
              className="details-item hover:shadow-xl hover:scale-100 duration-500"
            >
              <p className="item-icon dark:bg-slate-600">
                <item.icon sx={{ color: purple["A700"] }} />
              </p>
              <div className="item-text">
                <p className="text-slate-500 text-sm dark:text-white">{item.text1}</p>
                <p className="text-l font-semibold dark:text-slate-400">{item.text2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Info;
