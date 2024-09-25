import Image from "next/image";
import governor from "../../image/governor.png"


export default function Home() {
  return (
    <>
      <div className="flex flex-col  md:flex-row bg-gray-50">
        <div className=" w-full h-fit md:w-1/2 pt-5 md:py-10 ">
          <h1 className="whitespace-nowrap text-[2rem] p-4 text-blue-900 tracking-wider font-extrabold leading-10 sm:text-5xl sm:leading-none lg:text-6xl">Governor Sindh</h1>
          <h1 className="whitespace-nowrap text-[1.5rem] leading-[2rem] tracking-wider text-blue-800 font-semibold pl-4 sm:text-4xl sm:leading-[3rem]  lg:text-[2.5rem]">kamran Khan Tessori</h1>
          <p className="whitespace-nowrap  pl-4 text-[1.5rem] font-black leading-[2rem] tracking-wider text-blue-400  sm:text-4xl sm:leading-[3rem]  lg:text-[2.5rem]">Certified Cloud <br/> Applied Generative AI <br/> Engineer (GenEng)</p>
          <p className="text-blue-900 pl-4 tracking-wider font-bold text-[1rem] sm:text-2xl">Earn up to $5,000 / month<br/>
          Now admissions are open in hyderabad</p>
        </div>
        <div className="mt-2 flex justify-center md:m-auto md:justify-end "><Image src={governor} height={500} width={500} alt="governor" className="min-w-[900px] h-96 mt-[65px] ml-[20px] -mr-52 items-end justify-center md:ml-40 md:mr-150 md:w-[200px] lg:w-[800px]"/></div>
      </div>
    </>
  );
}
 