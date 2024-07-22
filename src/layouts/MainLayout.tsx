import Sidebar from "../components/sidebar.jsx";
import Navbar from "../components/navbar.jsx";

interface MainLayoutProps {
    children: React.ReactNode;
  }

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className=" min-h-screen h-full overflow-x-hidden">
      <div className=" dark:bg-black dark:text-white text-black  min-h-screen  pt-3 justify-center">
        <Navbar />
        <div className=" flex flex-row gap-4 ss:justify-center ">
          <Sidebar />
          {/* MAİN  */}
          <div className="w-5/6 h-full flex flex-col gap-4 p-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
