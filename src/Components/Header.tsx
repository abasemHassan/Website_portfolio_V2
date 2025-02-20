function Header() {
  const menu = [
    {
      id: 1,
      name: "HOME",
      link: "#header",
    },
    {
      id: 2,
      name: "SKILLS",
      link: "#skills",
    },
    {
      id: 3,
      name: "WORK EXPERIENCES",
      link: "#work-experiences",
    },
    {
      id: 4,
      name: "PROJECTS",
      link: "#projects",
    },
  ];

  return (
    <div>
      <section id="header" className="scroll-mt-24">
      <div className="flex items-center fixed w-full justify-between border-b-[1px] bg-white z-50">
        <div className="w-[90px] h-[90px] bg-black ">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="hidden md:flex gap-14 ">
          {menu.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="cursor-pointer font-medium transition-all duration-[100ms] text-green-500"
            >
              <h2>{item.name}</h2>
            </a>
          ))}
        </div>
        <div className="w-[90px] h-[90px] bg-red-500 flex justify-center items-center">
          <a href="PDF/_AmrHassanResumeUS.pdf">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 13v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5m7-4h4m0 0v4m0-4L10 14"/>
            </svg>
          </a>
        </div>
      </div>
      </section>
    </div>
    
  );
}

export default Header;
