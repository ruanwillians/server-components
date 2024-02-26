import { Suspense } from "react";
import Loading from "./Loading";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav></nav>
      <section>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </section>
    </section>
  );
}
