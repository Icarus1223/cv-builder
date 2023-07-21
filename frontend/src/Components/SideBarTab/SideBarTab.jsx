import React from "react";
import "./style.css";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
  Tooltip
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import Search from "../../assets/Svg/HomePageSvg/Search";
import RightArrow from "../../assets/Svg/HomePageSvg/RightArrow";
import DesignIcon from "../../assets/Svg/HomePageSvg/DesignIcon";
import ElementIcon from "../../assets/Svg/HomePageSvg/ElementIcon";
import TextIcon from "../../assets/Svg/HomePageSvg/TextIcon";

export default function SideBarTab({ toggleProp }) {
  const [siderTogle, setSiderTogle] = useState(false)

  const activeTabHandler = () => {
    setSiderTogle(true)
    toggleProp(true)
  }
  const hideHandle = () => {
    setSiderTogle(false)
    toggleProp(false)
  }

  return (
    <Tabs value="dashboard" orientation="vertical" className="  overflow-visible sidebar-tabs">
      <TabsHeader className="w-[72px] pe-0 bg-transparent pt-0 ps-2">

        <Tab key={1} value={1} className="place-items-start py-3" onClick={activeTabHandler} >
          <div className="">
            <DesignIcon />
            <Typography className="text-[15px] text-white ">Design</Typography>

          </div>
        </Tab>
        <Tab key={2} value={2} className="place-items-start py-3" onClick={activeTabHandler} >
          <div className="text-center">
            <ElementIcon className='m-auto' />
            <Typography className="text-[10px]">Element</Typography>

          </div>
        </Tab>
        <Tab key={3} value={3} className="place-items-start py-3" onClick={activeTabHandler}  >
          <div className="">
            <TextIcon className='m-auto' />
            <Typography className="text-[10px]">History</Typography>


          </div>
        </Tab>

      </TabsHeader>
      {
        siderTogle && (
          <>
            <TabsBody className="py-3.5 px-6 bg-light-black relative overflow-visible"
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}

            >
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

                    fsdggadsgfdsagfyd
                    cbc
                  </Typography>
                </div>

              </TabPanel>
              <div className="sidebar-close-btn absolute right-[-16px] top-[50%] translate-y-[-50%] z-10">
                <Tooltip content="Hide" placement="right">
                  <button onClick={hideHandle}><RightArrow /> </button>
                </Tooltip>
              </div>

            </TabsBody ></>
        )
      }

    </Tabs >
  );
}