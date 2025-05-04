import { Suspense } from "react";
import Images from "./components/Images";
import Loading from "./components/Loading";

interface PageProps {
  searchParams?: {
    query?: string;
  };
}

export default async function Home({ searchParams }: { searchParams?: { query?: string } }) {
  const query = typeof searchParams?.query === "string" ? searchParams.query : "";
  return (
    <main>
      <Suspense key={query} fallback={<Loading />}>
        <Images searchData={query} />
      </Suspense>
    </main>
  );
}
