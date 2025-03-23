import Link from "next/link";
import { use } from "react";

type Params = Promise<{ id: string }>;

export default function Layout({
  children,
  details,
  params,
}: {
  children: React.ReactNode;
  details: React.ReactNode;
  params: Params;
}) {
  const pageParams = use(params);
  const id = pageParams.id;
  return (
    <>
      <nav>
        <Link href={`/airport/${id}/info`}>Info</Link>
        <Link href={`/airport/${id}/location`}>Location</Link>
      </nav>
      <div>{children}</div>
      <div>{details}</div>
    </>
  );
}
