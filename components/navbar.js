import Link from "next/link"
import Router from "next/router"
import { useRouter } from "next/router";
import logo from "../public/logo.png"
import Image from "next/image";
import {GiHamburgerMenu} from "react-icons/gi"
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
  MdCalendarMonth,
  MdAttachMoney
} from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import {GiPapers} from "react-icons/gi";
import {SiTestcafe} from "react-icons/si"

export default function NavBar(props){
  const activeLink = 'text-blue-500'
  const inactiveLink = 'text-white hover:text-blue-500'
  const router = useRouter();
  const {pathname} = router;
    return(
        <div className="m-2 mt-0">
          
          <div className="flex flex-col justify-center item-center">
            <div className="my-4">
              <div className="border-b-4 bg-slate-200 p-2 rounded-md">
                <Image className="ml-14 mb-2 h-20 w-auto" alt="NA" src={logo} ></Image>
                <Link href={'/'} className="flex mb-2 justify-start items-center gap-4 pl-2">
                  <div className="text-2xl font-semibold mb-2">
                    National Academy
                  </div>
                </Link>
              </div>
              <div className="flex mt-2 mb-2 justify-start items-center gap-4 pl-2 hover:bg-blue-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
                <Link href={'/'} className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Dashboard
                </Link>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-2 hover:bg-blue-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <IoIosPeople className="text-2xl text-gray-600 group-hover:text-white " />
                <Link href={'students'} className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Students
                </Link>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-2 hover:bg-blue-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdCalendarMonth className="text-2xl text-gray-600 group-hover:text-white " />
                <Link href={'attendence'} className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Attendence
                </Link>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-2 hover:bg-blue-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdAttachMoney className="text-2xl text-gray-600 group-hover:text-white " />
                <Link href={'fees'} className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Finance
                </Link>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-2 hover:bg-blue-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <GiPapers className="text-2xl text-gray-600 group-hover:text-white " />
                <Link href={'papers'} className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Paper Generating
                </Link>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-2 hover:bg-blue-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <SiTestcafe className="text-2xl text-gray-600 group-hover:text-white " />
                <Link href={'results'} className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Tests and Results
                </Link>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-2 hover:bg-blue-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white" />
                <Link href={'others'} className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Others
                </Link>
            </div>
          </div>
            
          </div>
          
        </div>
    )
};



