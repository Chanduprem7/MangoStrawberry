import { createFileRoute } from "@tanstack/react-router";
import { BirthdayJourney } from "@/components/surprise/BirthdayJourney";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Birthday Surprise for Mango ♡" },
      { name: "description", content: "A private birthday surprise, made with love for Mango by Strawberry." },
      { property: "og:title", content: "A Birthday Surprise for Mango ♡" },
      { property: "og:description", content: "A little journey of love, memories, and birthday magic." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <BirthdayJourney />;
}
