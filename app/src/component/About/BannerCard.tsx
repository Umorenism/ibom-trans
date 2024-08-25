interface BannerCardProps {
  icon: any;
  title: any;
  description: any;
}

export const BannerCard = ({ icon, title, description }: BannerCardProps) => {
  return (
    <div className="max-w-[350px] mx-auto">
      <div className="flex items-center gap-4">
        <div>
          <span className="h-[60px] w-[60px] rounded-full text-black bg-primary flex items-center justify-center">
            {icon}
          </span>
        </div>
        <div className="space-y-2">
          <h1 className="text-xl uppercase text-primary font-bold">{title}</h1>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};
