interface SectionTitleProps {
  title: String;
  description: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
}) => {
  return (
    <div className="max-w-screen-sm mx-auto text-center py-4 px-2">
      <h3 className="text-primary text-2xl font-bold">{title}</h3>
      <p className="text-accent">{description}</p>
    </div>
  );
};
