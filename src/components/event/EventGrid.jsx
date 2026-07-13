import { CalendarX } from "lucide-react";

import EmptyState from "../common/EmptyState";
import EventCard from "./EventCard";

export default function EventGrid({ events }) {
  if (!events || events.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm py-12">
        <EmptyState
          icon={<CalendarX size={32} />}
          title="No events found"
          description="Try adjusting your search or filters to find what you're looking for."
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
