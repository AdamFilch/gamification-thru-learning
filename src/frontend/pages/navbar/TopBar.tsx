import MenuIcon from '@mui/icons-material/Menu';

export function TopBar() {
  return (
    <div className="bg-highlight text-text-secondary z-50 grid grid-flow-col px-2 font-mono text-lg tracking-wide sm:px-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="hidden lg:block"></div>
      <span className=" text-left sm:text-left lg:mx-5 lg:text-center">
        Gamification of Learning
      </span>
      <div className=" hidden justify-end gap-5 sm:flex">
        <div className="">Menu</div>
        <div>Profile</div>
      </div>
      <div className=" justify-self-end sm:hidden">
        <MenuIcon />
      </div>
    </div>
  );
}
