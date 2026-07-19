import { useState, useMemo } from "react";
import { Ticket } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import PageHeader from "../components/common/PageHeader";
import SearchInput from "../components/common/SearchInput";
import Container from "../components/common/Container";
import EmptyState from "../components/common/EmptyState";
import Button from "../components/common/Button";
import RegistrationCard from "../components/event/RegistrationCard";

import { EVENTS } from "../constants/eventsData";

// Generate fake registrations using events data
const INITIAL_REGISTRATIONS = EVENTS.slice(0, 4).map((event, index) => ({
  ...event,
  registrationId: `reg-${index}`,
  registrationStatus: index === 1 ? "Pending" : "Confirmed",
  registrationDate: `Jul ${10 + index}, 2025`,
}));

export default function Registrations() {
  const navigate = useNavigate();
  const [registrations, setRegistrations] = useState(INITIAL_REGISTRATIONS);
  const [search, setSearch] = useState("");

  const filteredRegistrations = useMemo(() => {
    const lowerSearch = search.toLowerCase();

    return registrations.filter((reg) => {
      return (
        reg.title.toLowerCase().includes(lowerSearch) ||
        reg.location.toLowerCase().includes(lowerSearch)
      );
    });
  }, [search, registrations]);

  const handleCancelRegistration = (id) => {
    setRegistrations((prev) => prev.filter((reg) => reg.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F9F9FB] flex flex-col">
      <Navbar />

      <Container as="main" className="flex-1 py-4 md:py-8">
        <PageHeader
          title="My Registrations"
          subtitle="Manage your upcoming event attendances."
        />

        {registrations.length > 0 && (
          <div className="mb-8 lg:mb-10 w-full md:max-w-md">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Search by title or location..."
            />
          </div>
        )}

        {registrations.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm py-12 mt-8">
            <EmptyState
              icon={<Ticket size={32} />}
              title="No registrations yet"
              description="You haven't registered for any events. Discover what's happening around you."
              action={
                <Button variant="primary" onClick={() => navigate("/events")}>
                  Browse Events
                </Button>
              }
            />
          </div>
        ) : filteredRegistrations.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm py-12">
            <EmptyState
              icon={<Ticket size={32} />}
              title="No matching registrations"
              description="Try adjusting your search criteria."
            />
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500 font-medium">
                Showing{" "}
                <span className="text-gray-900 font-bold">
                  {filteredRegistrations.length}
                </span>{" "}
                {filteredRegistrations.length === 1 ? "registration" : "registrations"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
              {filteredRegistrations.map((reg) => (
                <RegistrationCard
                  key={reg.registrationId}
                  registration={reg}
                  onCancel={handleCancelRegistration}
                />
              ))}
            </div>
          </>
        )}

        <div className="pb-20 md:pb-24" />
      </Container>
    </div>
  );
}
