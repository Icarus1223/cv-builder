import React from 'react'
import SideBarTab from '../../Components/SideBarTab/SideBarTab'
import ExportSvg from '../../assets/Svg/HomePageSvg/ExportSvg'
import { Typography } from '@material-tailwind/react'
import Embed from '../../assets/Svg/HomePageSvg/Embed'

const Home = () => {
    return (
        <>
            <div class="grid grid-cols-12">
                <div class="col-span-4">
                    <SideBarTab />
                </div>
                <div class="col-span-8 bg-home-white-smoke">
                    <div className="export_file  pt-2.5 pe-2.5 ">
                        <div className='export_button flex justify-end'>
                            <button class="rounded-[10px] bg-white px-3.5 py-3 text-sm font-normal flex gap-3"> <ExportSvg /> Export</button>
                        </div>
                        <div className='export_file_detail flex justify-end'>
                            <Typography variant="h5" className='flex items-center'><Embed /> HTML Embed Code</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home