type PillProps = {
  title: string;
};

const Pill = ({ title }: PillProps) => (
  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 capitalize">
    {title}
  </div>
);

export default Pill;
