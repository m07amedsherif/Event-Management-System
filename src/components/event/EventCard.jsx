import { MapPin, Calendar, Users, ImageOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Badge from "../common/Badge";
import Button from "../common/Button";
import { CATEGORY_COLORS } from "../../constants/eventColors";

/**
 * Maps an event status string to a Badge variant.
 * Keeps status rendering semantic and decoupled from raw colour classes.
 */
const STATUS_VARIANT_MAP = {
  Upcoming: "status", // purple  – matches primary brand colour
  Ongoing: "success", // emerald – "in progress"
  Completed: "muted", // grey    – past / inactive
};

export default function EventCard({ event }) {
  const {
    title,
    description,
    category,
    status,
    location,
    date,
    capacity,
    image,
  } = event;
  const navigate = useNavigate();

  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-gray-200/75 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5 hover:border-primary/30 transition-all duration-300 ease-out overflow-hidden flex-1">
      {/* Image */}
      <div className="relative aspect-video w-full bg-gray-50 overflow-hidden shrink-0">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            loading="lazy"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-300">
            <ImageOff size={40} />
          </div>
        )}

        {/* Status badge – uses semantic variant */}
        <div className="absolute top-4 right-4 z-10">
          <Badge
            label={status}
            variant={STATUS_VARIANT_MAP[status] ?? "default"}
            className="shadow-sm backdrop-blur-md bg-white/90"
          />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Category */}
        <div className="mb-4">
          <Badge
            label={category}
            colorClass={
              CATEGORY_COLORS[category] ?? "bg-gray-100 text-gray-600"
            }
          />
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-900 leading-tight mb-2.5 line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-6">
          {description}
        </p>

        {/* Meta info */}
        <div className="mt-auto flex flex-col gap-3 pt-2">
          <div className="flex items-center gap-2.5 text-sm text-gray-500">
            <MapPin size={16} className="shrink-0 text-primary/70" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-gray-500">
            <Calendar size={16} className="shrink-0 text-primary/70" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-gray-500">
            <Users size={16} className="shrink-0 text-primary/70" />
            <span>{capacity.toLocaleString()} seats</span>
          </div>
        </div>

        {/* CTA */}
        <Button
          id={`view-details-${event.id}`}
          ariaLabel={`View details for ${title}`}
          variant="primary"
          fullWidth
          className="mt-6 shadow-sm group-hover:shadow-md transition-all duration-300"
          onClick={() => navigate(`/events/${event.id}`)}
        >
          View Details
        </Button>
      </div>
    </article>
  );
}
