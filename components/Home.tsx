"use client";
import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { useEffect, useState } from "react";
import { MusicPlayer } from "./music";
import { anim, date, name, txt1, txt2, txt3, txt4, vazoxtox1, vazoxtox2 } from "@/data/data";
import { motion } from "framer-motion";
import { Program } from "./Program";
import { Tables } from "./Tables";
import { Footer } from "./footer";
import { Calendar } from "./Calendar";
import AttendanceGuests from "./RSVP";

export function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`text-center overflow-hidden  FontSHK_Dzeragir  bg-[#FFFDFB]`}>
      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 p-1  rounded-2xl bg-[#fffdfb2f]  right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <Image
            src="/musiconnn.png"
            alt="icon1"
            width={500}
            height={500}
            className=" w-full p-2 object-contain "
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div className="m-auto  h-max max-w-md ">
        {/* arajin mas */}
        <div className="font-bold h-[80vh] overflow-hidden relative">
          <Image
            src="/img1.jpg"
            alt="icon1"
            width={500}
            height={500}
            className="w-full ml-0 h-[80vh]  object-cover "
          />
          <div className="FontSHK_Dzeragir bottom-20 absolute text-white text-[40px] left-13  flex items-center justify-center tracking-[0.25em]">
            {/* FIRST NAME */}
            <h2 className="relative mb-20  -mr-10 FontArTarumianBarakBold">
              {name[0]}
            </h2>

            {/* AND */}
            <span className=" ml-10 relative FontArTarumianBarakBold">
              և
            </span>

            {/* SECOND NAME */}
            <h2 className="relative mt-20 -ml-5 FontArTarumianBarakBold">
              {name[1]}
            </h2>
          </div>
        </div>

        {/* 2rd mas teqster */}
        <div className=" px-5 mb-20 tracking-[10%]  ">
          <h2 className="FontSHK_Dzeragir text-vrayi text-5xl my-20">
            {date}
          </h2>
          <div className=" tracking-[15%] leading-10">
            <motion.h3
              {...anim}
              className="FontSHK_Dzeragir font-bold text-sovorakan text-[40px]"
            >
              Սիրելինե՜րս,
            </motion.h3>
            <motion.p
              {...anim}
              className="FontSHK_Dzeragir text-sovorakan  text-3xl mt-20 "
            >
              {txt1}
            </motion.p>
          </div>
        </div>

        {/* errord mas vazox tox + nkar */}
        <div className=" mt-20 relative w-full font-bold  text-3xl text-vrayi ">
          <div className="FontSHK_Dzeragir whitespace-nowrap animate-marquee-2  rotate-2  -translate-x-full">
            {vazoxtox1}
          </div>
          <div className="FontSHK_Dzeragir whitespace-nowrap animate-marquee my-15  -translate-x-full">
            {vazoxtox1}
          </div>
          <div className="FontSHK_Dzeragir whitespace-nowrap animate-marquee-2  -rotate-2 -translate-x-full">
            {vazoxtox1}
          </div>
          <div className="relative my-15">
            <Image
              src="/img2.jpg"
              width={500}
              height={500}
              alt="jamanak"
              className="w-[70vw] h-[80vw] mx-auto relative z-2 rounded-tl-[220px] object-cover "
            />

            <span className="absolute ml-2 -mt-27 z-0 w-[70vw] h-[80vw] rounded-tl-[220px] bg-guyn left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "></span>
            <span className="absolute -ml-2 -mt-32 z-0 w-[70vw] h-[80vw] rounded-tl-[220px] bg-guyn left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "></span>

            <p className="FontSHK_Dzeragir font-normal mt-15 text-3xl tracking-[25%] text-center ">
              {" "}
              {txt3}
            </p>
          </div>
          <div className="FontSHK_Dzeragir whitespace-nowrap animate-marquee-2  rotate-2  -translate-x-full">
            {vazoxtox1}
          </div>
          <div className="FontSHK_Dzeragir whitespace-nowrap animate-marquee my-15  -translate-x-full">
            {vazoxtox1}
          </div>
          <div className="FontSHK_Dzeragir whitespace-nowrap animate-marquee-2  -rotate-2 -translate-x-full">
            {vazoxtox1}
          </div>
        </div>

        <Calendar year={2026} month={10} highlightDay={3} />

        <Program />

        {/* dress code */}
        <div className=" text-vrayi">
          <motion.h3
            {...anim}
            className="FontSHK_Dzeragir font-bold text- text-[40px] my-20 "
          >
            Dress Code
          </motion.h3>

          <motion.p
            {...anim} className="FontSHK_Dzeragir text-3xl tracking-widest mb-20">{txt2}</motion.p>
          <Image
            src="/img3.png"
            width={500}
            height={500}
            alt="jamanak"
            className="w-[70%] mx-auto "
          />
        </div>

        {/* hethashxvark */}
        <TimeBox />

        {/* errord mas vazox tox + nkar */}
        <div className=" mt-20 relative w-full  text-3xl text-vrayi ">
          <div className="FontBabylonicaRegular whitespace-nowrap animate-marquee-2 -rotate-1  -translate-x-full">
            {vazoxtox2}
          </div>
          <div className="FontBabylonicaRegular whitespace-nowrap animate-marquee my-10  -translate-x-full">
            {vazoxtox2}
          </div>
          <div className="FontBabylonicaRegular whitespace-nowrap animate-marquee-2  rotate-1 -translate-x-full">
            {vazoxtox2}
          </div>
          <div className="FontBabylonicaRegular whitespace-nowrap animate-marquee my-10  -translate-x-full">
            {vazoxtox2}
          </div>
          <div className="FontBabylonicaRegular whitespace-nowrap animate-marquee-2  rotate-1 -translate-x-full">
            {vazoxtox2}
          </div>
          <div className="FontBabylonicaRegular whitespace-nowrap animate-marquee my-10  -translate-x-full">
            {vazoxtox2}
          </div>
          <div className="FontBabylonicaRegular whitespace-nowrap animate-marquee-2  rotate-1 -translate-x-full">
            {vazoxtox2}
          </div>
          <div className=" w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/img4.jpg"
              width={500}
              height={500}
              alt="jamanak"
              className="w-[70vw] min-[700px]:w-[30vw] min-[700px]:h-[30vw] mx-auto h-[70vw] object-cover relative z-10"
            />
            <div className=" absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[65vw]  h-[65vw]  min-[700px]:w-[30vw] min-[700px]:h-[30vw] rotate-45  bg-guyn "></div>
          </div>
        </div>

        {/* erb asen teqst */}
        <motion.p
          {...anim}
          className="FontSHK_Dzeragir mb-20 text-sovorakan  text-3xl mt-20"
        >
          {txt4}
        </motion.p>
        <AttendanceGuests />
      </div>

      <Footer />
    </div>
  );
}
