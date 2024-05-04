import { FaGear } from "react-icons/fa6";

interface DashboardTitle {
  title: string;
}
export const DashboardTitle: React.FC<DashboardTitle> = ({ title }) => {
  return <h3 className="flex items-center gap-2 px-3 py-2 font-semibold hover:text-accent bg-secondary text-primary"><FaGear className="animate-spin duration-700"/> {title}</h3>;
};
