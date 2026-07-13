import { useState, useMemo } from "react";

import Navbar from "../components/layout/Navbar";
import PageHeader from "../components/common/PageHeader";
import SearchInput from "../components/common/SearchInput";
import FilterBar from "../components/common/FilterBar";
import EventGrid from "../components/event/EventGrid";
import Container from "../components/common/Container";

import { EVENTS, CATEGORIES, STATUSES } from "../constants/eventsData";

export default function Events() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredEvents = useMemo(() => {
    const lowerSearch = search.toLowerCase();

    return EVENTS.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(lowerSearch) ||
        event.description.toLowerCase().includes(lowerSearch) ||
        event.location.toLowerCase().includes(lowerSearch);

      const matchesCategory =
        selectedCategory === "All" || event.category === selectedCategory;

      const matchesStatus =
        selectedStatus === "All" || event.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [search, selectedCategory, selectedStatus]);

  return (
    <div className="min-h-screen bg-[#F9F9FB] flex flex-col">
      <Navbar />

      <Container as="main" className="flex-1 py-4 md:py-8">
        {/* Page Header */}
        <PageHeader
          title="Events"
          subtitle="Discover and register for upcoming events."
        />

        {/* Controls: Search + Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 lg:mb-10 lg:items-center">
          <div className="w-full lg:flex-1">
            <SearchInput value={search} onChange={setSearch} placeholder="Search events by title, description, or location..." />
          </div>
          <div className="w-full lg:w-auto shrink-0">
            <FilterBar
              categories={CATEGORIES}
              statuses={STATUSES}
              selectedCategory={selectedCategory}
              selectedStatus={selectedStatus}
              onCategoryChange={setSelectedCategory}
              onStatusChange={setSelectedStatus}
            />
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500 font-medium">
            Showing{" "}
            <span className="text-gray-900 font-bold">{filteredEvents.length}</span>{" "}
            {filteredEvents.length === 1 ? "event" : "events"}
          </p>
        </div>

        {/* Grid */}
        <EventGrid events={filteredEvents} />

        {/* Bottom padding */}
        <div className="pb-20 md:pb-24" />
      </Container>
    </div>
  );
}
