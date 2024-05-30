export function Footer() {
  return (
    <div className="bg-highlight absolute bottom-auto left-0 w-full place-items-center">
      <div className="  text-secondary lg:text-1xl lg:text-md mx-auto grid h-[300px] max-w-[1300px] grid-cols-2 grid-rows-1 gap-2 px-[30px] py-5 text-sm sm:grid-cols-4 sm:grid-rows-1 sm:px-[70px] sm:py-[70px]">
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
            <a
              href="https://adamfilchoir.com/"
              className=" hover:text-tertiary transition-all duration-300"
            >
              Portoflio
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/adamadamadam/"
              className=" hover:text-tertiary transition-all duration-300"
            >
              Linkedin
            </a>
          </div>
          <div>
            <a
              href="https://github.com/AdamFilch"
              className=" hover:text-tertiary transition-all duration-300"
            >
              Github
            </a>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-1 md:gap-2">
          <div className=" text-text-secondary mb-2 text-[15px] font-semibold">
            TECH STACK
          </div>
          <div>
            <span className=" hover:text-tertiary transition-all duration-300">
              Typescript
            </span>
          </div>
          <div>
            <span className=" hover:text-tertiary transition-all duration-300">
              React
            </span>
          </div>
          <div>
            <span className=" hover:text-tertiary transition-all duration-300">
              Tailwind
            </span>
          </div>
          <div>
            <span className=" hover:text-tertiary transition-all duration-300">
              MongoDB
            </span>
          </div>
          {/* <div>Express</div> */}
          <div>
            <span className=" hover:text-tertiary transition-all duration-300">
              Youtube API
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
