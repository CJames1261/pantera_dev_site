import type { Metadata } from "next";
import NotFoundView from "./NotFoundView";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Pantera Claw" },
  description: "The page you're looking for doesn't exist or has moved.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundView />;
}
