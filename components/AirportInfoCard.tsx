import Image from "next/image";

type label = string;

interface AirportInfoCardProps {
  iconTitle?: string;
  title: string;
  subTitle?: string;
  data?: Record<label, string>;
}
export default function AirportInfoCard({
  data,
  title,
  iconTitle,
  subTitle = "",
}: AirportInfoCardProps) {
  return (
    <div className="card-background relative flex w-full flex-col gap-3 rounded-md border p-5">
      <div className="flex items-center gap-3">
        {iconTitle && (
          <Image width={30} height={30} src={iconTitle} alt="info" />
        )}
        <h4 className="text-color-primary-gradient text-xl">{title}</h4>
      </div>
      {subTitle !== "" && <p className="mt-1">{subTitle}</p>}
      {data && (
        <div>
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="my-2 flex items-center gap-3">
              <p className="font-bold">{key}:</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
