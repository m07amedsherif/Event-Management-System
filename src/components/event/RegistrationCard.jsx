import { MapPin, Calendar, ImageOff, Clock } from "lucide-react";

import Badge from "../common/Badge";
import Button from "../common/Button";

const STATUS_VARIANT_MAP = {
  Confirmed: "success",
  Pending: "warning",
  Cancelled: "error",
};

export default function RegistrationCard({ registration, onCancel }) {
  const {
    id,
    title,
    location,
    date,
    image,
    registrationStatus,
    registrationDate,
  } = registration;

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

        <div className="absolute top-4 right-4 z-10">
          <Badge
            label={registrationStatus}
            variant={STATUS_VARIANT_MAP[registrationStatus] ?? "default"}
            className="shadow-sm backdrop-blur-md bg-white/90"
          />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <h2 className="text-lg font-bold text-gray-900 leading-tight mb-4 line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {title}
        </h2>

        {/* Meta info */}
        <div className="mt-auto flex flex-col gap-3">
          <div className="flex items-center gap-2.5 text-sm text-gray-500">
            <MapPin size={16} className="shrink-0 text-primary/70" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-gray-500">
            <Calendar size={16} className="shrink-0 text-primary/70" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-gray-500">
            <Clock size={16} className="shrink-0 text-primary/70" />
            <span>Registered: {registrationDate}</span>
          </div>
        </div>

        {/* CTA */}
        <Button
          id={`cancel-registration-${id}`}
          ariaLabel={`Cancel registration for ${title}`}
          variant="danger"
          fullWidth
          className="mt-6 shadow-sm group-hover:shadow-md transition-all duration-300"
          onClick={() => onCancel(id)}
        >
          Cancel Registration
        </Button>
      </div>
    </article>
  );
}
