interface DashboardTitle {
  title: string;
}
export const DashboardTitle: React.FC<DashboardTitle> = ({ title }) => {
  return <h3 className="px-3 py-2 font-semibold hover:text-accent bg-secondary text-primary">{title}</h3>;
};
