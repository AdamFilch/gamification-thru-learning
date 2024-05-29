export function Footer() {
  return (
    <div className="bg-highlight absolute bottom-auto left-0 w-full place-items-center">
      <div className="  text-secondary lg:text-1xl lg:text-md mx-auto grid h-[300px] max-w-[1300px] grid-cols-2 grid-rows-1 gap-2 px-[50px] py-4 text-sm sm:grid-cols-4 sm:grid-rows-1 sm:px-[70px] sm:py-[70px]">
        <div className=" col-span-2 flex flex-1 flex-col gap-1 text-left font-sans">
          <div className="text-text-secondary mb-2 text-[15px] font-semibold">
            GAMIFICATION OF LEARNING
          </div>
          <span className=" ">Developed with Love</span>
          <span className="">By Adam Filchoir</span>
        </div>
        <div className="flex flex-1 flex-col gap-1 md:gap-3">
          <div className=" text-text-secondary mb-2 text-[15px] font-semibold">
            CONTACT INFO
          </div>
          <div>
            <span>Portoflio</span>
          </div>
          <div>
            <span>Linkedin</span>
          </div>
          <div>
            <span>Github</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-1 md:gap-2">
          <div className=" text-text-secondary mb-2 text-[15px] font-semibold">
            TECH STACK
          </div>
          <span>Typescript</span>
          <span>React</span>
          <span>Tailwind</span>
          <span>MongoDB</span>
          {/* <span>Express</span> */}
          <span>YouTube API</span>
        </div>
      </div>
    </div>
  );
}
