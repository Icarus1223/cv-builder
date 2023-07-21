import React, { useState } from "react";
import "./style.css";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { Input } from "@material-tailwind/react";
import Search from "../../assets/Svg/HomePageSvg/Search";

export default function SideBarTab() {


  return (
    <Tabs value="dashboard" orientation="vertical" className="h-screen  bg-dark-black">
      <TabsHeader className="w-40  pe-0 bg-transparent">

        <Tab key={1} value={1} className="place-items-start " >
          <div className="">
            {React.createElement(Square3Stack3DIcon, { className: "m-auto h-5" })}
            <Typography className="text-[10px]">Design</Typography>

          </div>
        </Tab>
        <Tab key={2} value={2} className="place-items-start " >
          <div className="">
            {React.createElement(UserCircleIcon, { className: "m-auto h-5" })}
            <Typography className="text-[10px]">Element</Typography>

          </div>
        </Tab>
        <Tab key={3} value={3} className="place-items-start " >
          <div className="">
            {React.createElement(Cog6ToothIcon, { className: "m-auto h-5" })}
            <Typography className="text-[10px]">History</Typography>


          </div>
        </Tab>

      </TabsHeader>
      <TabsBody className="py-3.5 px-6 bg-light-black">

        <TabPanel key={1} value={1} className="py-0">
          <div className="search-input relative">
            <Input
              type="email"
              placeholder="Email Address"
              className="focus:!border-light-grey rounded-[10px]  !border !border-light-grey bg-white placeholder:text-xs"
              labelProps={{
                className: "hidden"
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
            <div className="search-icon absolute bottom-3.5 right-5">
              <Search />
            </div>
          </div>
          <div className="design_tabs">
            <Tabs value="dashboard" orientation="horizontal" className="">

              <TabsHeader className=" pe-0 bg-transparent flex justify-between	">

                <Tab key={1} value={1} className="place-items-start " >
                  <div className="">
                    <Typography className="text-[14px] text-white font-medium	">Templates</Typography>

                  </div>
                </Tab>
                <Tab key={2} value={2} className="place-items-start " >
                  <div className="">
                    <Typography className="text-[14px] text-white font-medium	">Styles</Typography>

                  </div>
                </Tab>
              </TabsHeader>
            </Tabs>
          </div>

        </TabPanel>
        <TabPanel key={2} value={2} className="py-0">

          <div className="w-72">
            <Typography>focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500</Typography>
          </div>

        </TabPanel>
        <TabPanel key={3} value={3} className="py-0">

          <div className="w-72">
            <Typography>

              fsdggadsgfdsagfydgfydgfyadgfyadsgfyasdgfyadsgfydsgfadsyg
            </Typography>
          </div>

        </TabPanel>

      </TabsBody>
    </Tabs>
  );
}