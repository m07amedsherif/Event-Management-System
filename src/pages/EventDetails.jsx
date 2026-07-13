import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Users,
  Clock,
  Building,
  ArrowLeft,
  ImageOff,
} from "lucide-react";

import { EVENTS } from "../constants/eventsData";
import Navbar from "../components/layout/Navbar";
import Container from "../components/common/Container";
import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import EmptyState from "../components/common/EmptyState";
import { CATEGORY_COLORS } from "../constants/eventColors";

const STATUS_VARIANT_MAP = {
  Upcoming: "status",
  Ongoing: "success",
  Completed: "muted",
};

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = EVENTS.find((e) => e.id === parseInt(id, 10));

  if (!event) {
    return (
      <div className="min-h-screen bg-[#F9F9FB] flex flex-col">
        <Navbar />
        <Container as="main" className="flex-1 py-12">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm py-12">
            <EmptyState
              icon={<ImageOff size={32} />}
              title="Event Not Found"
              description="The event you are looking for does not exist or has been removed."
              action={
                <Button
                  onClick={() => navigate("/")}
                  variant="primary"
                  leftIcon={<ArrowLeft size={16} />}
                >
                  Back to Events
                </Button>
              }
            />
          </div>
        </Container>
      </div>
    );
  }

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

  // Use fallbacks for missing data in the fake array
  const time = event.time || "10:00 AM - 4:00 PM";
  const organizer = event.organizer || "Star Union Events";

  return (
    <div className="min-h-screen bg-[#F9F9FB] flex flex-col">
      <Navbar />

      <Container as="main" className="flex-1 py-6 md:py-10">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Large Image */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full bg-gray-50 overflow-hidden">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-300">
                <ImageOff size={64} />
              </div>
            )}
          </div>

          {/* Content Wrapper */}
          <div className="p-6 md:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Main Content: Badges, Title, Full Description */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge
                    label={category}
                    colorClass={
                      CATEGORY_COLORS[category] ?? "bg-gray-100 text-gray-600"
                    }
                  />
                  <Badge
                    label={status}
                    variant={STATUS_VARIANT_MAP[status] ?? "default"}
                  />
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
                  {title}
                </h1>

                <div className="prose prose-gray max-w-none">
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {description}
                  </p>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-4">
                    Join us for an incredible experience where you can connect,
                    learn, and grow. This event is designed to bring together
                    passionate individuals and provide valuable insights into
                    the latest trends and practices. Whether you are looking to
                    network with industry leaders or gain new skills, this is
                    the perfect opportunity to be part of something special!
                  </p>
                </div>
              </div>

              {/* Sidebar: Event Information & Buttons */}
              <div className="w-full lg:w-[380px] shrink-0">
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">
                    Event Information
                  </h3>

                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                        <Calendar className="text-primary shrink-0" size={20} />
                      </div>
                      <div className="pt-0.5">
                        <p className="text-sm font-semibold text-gray-900">
                          Date
                        </p>
                        <p className="text-sm text-gray-600 mt-1">{date}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                        <Clock className="text-primary shrink-0" size={20} />
                      </div>
                      <div className="pt-0.5">
                        <p className="text-sm font-semibold text-gray-900">
                          Time
                        </p>
                        <p className="text-sm text-gray-600 mt-1">{time}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                        <MapPin className="text-primary shrink-0" size={20} />
                      </div>
                      <div className="pt-0.5">
                        <p className="text-sm font-semibold text-gray-900">
                          Location
                        </p>
                        <p className="text-sm text-gray-600 mt-1">{location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                        <Building className="text-primary shrink-0" size={20} />
                      </div>
                      <div className="pt-0.5">
                        <p className="text-sm font-semibold text-gray-900">
                          Organizer
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {organizer}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                        <Users className="text-primary shrink-0" size={20} />
                      </div>
                      <div className="pt-0.5">
                        <p className="text-sm font-semibold text-gray-900">
                          Capacity
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {capacity.toLocaleString()} attendees
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200/60 flex flex-col gap-3">
                    <Button variant="primary" size="lg" fullWidth>
                      Register Now
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      fullWidth
                      onClick={() => navigate("/")}
                    >
                      Back to Events
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
