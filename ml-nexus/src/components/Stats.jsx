import React, { useEffect } from 'react'
import { FaCode, FaDatabase, FaExclamationCircle, FaFileContract, FaRegStar } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
import { GrLicense } from "react-icons/gr";
function Stats({data, index}) {

  const icons = {
    0: <FaRegStar size={"30px"} />,
    1: <BiGitRepoForked size={"30px"} />,
    2: <FaCode size={"30px"} />,
    3: <FaExclamationCircle size={"30px"} />,
    4: <FaDatabase size={"30px"} />,
    5: <FaFileContract size={"30px"} />,
  }

  const icon = icons[index]


  return (
    <>
        <div className="h-56 group duration-200 ease-in w-52 px-8 py-6 rounded-lg flex justify-between flex-col items-center bg-[#324655]">
        <span
    className="group-hover:text-[#D4AF37]"
  >
    {icon}
  </span>
            <h1 className='text-2xl font-semibold text-center'>{data.title}</h1>
            <h4 className='text-2xl text-center'>{index == 4 ? (data.info / (1024 * 1024)).toFixed(2)  + "MB" : data.info}</h4>
            {/* //  / (1024 * 1024)).toFixed(2) */}
        </div>
    </>
  )
}

export default Stats