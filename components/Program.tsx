import { anim, program } from "@/data/data";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export function Program() {
  return (
    <div className="FontSHK_Dzeragir text-vrayi py-5 tracking-[25%]">
      <motion.h3 {...anim} className=" relative  text-[40px] tracking-widest font-bold mb-20">
        ժԱՄԱՆԱԿԱՑՈՒՅՑ
      </motion.h3>
      <div className="flex flex-col gap-20">
        {program.map((el: any, i: number) => {
          return (
            <div
              key={i}
              className={`${i % 2 == 0 ? "flex-row-reverse" : ""} flex items-center justify-between`}
            >
              <Image
                src={el.img}
                width={500}
                height={500}
                alt="jamanak"
                className={`w-[40%] ${i == 3 ? "w-[50%]" : ""}`}
              />

              <Link
                href={`${el.address}`}
                className={`${i % 2 == 0 ? "text-start" : "text-end"} ${i == 3 ? "pl-4" : ""} px-7 self-center `}
              >
                <motion.h2 {...anim} className="tracking-[25%] text-4xl">
                  {el.time}
                </motion.h2>
                <motion.p
                  {...anim}
                  className="tracking-[25%] my-2 text-2xl font-bold relative"
                >
                  {el.title}
                </motion.p>
                <motion.h3
                  {...anim}
                  className={`${i % 2 != 0 ? "flex-row-reverse " : " "} tracking-[25%] flex justify-start gap-2 items-center text-lg`}
                >
                  <span>{el.loc}</span>
                  <Image
                    src="/icon3.png"
                    alt="icon1"
                    width={500}
                    height={500}
                    className=" w-5 h-5 object-cover"
                  />
                </motion.h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
