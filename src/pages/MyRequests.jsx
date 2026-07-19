import { useState, useMemo } from "react";
import { ClipboardList } from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import SearchInput from "../components/common/SearchInput";
import EmptyState from "../components/common/EmptyState";
import RequestCard from "../components/event/RequestCard";

const FAKE_REQUESTS = [
  {
    id: "req-1",
    title: "Global Tech Summit 2026",
    category: "Technology",
    submittedDate: "Aug 15, 2025",
    status: "Pending",
  },
  {
    id: "req-2",
    title: "Web3 Developers Meetup",
    category: "Technology",
    submittedDate: "Jul 22, 2025",
    status: "Approved",
    eventId: 1, // matches fake event
  },
  {
    id: "req-3",
    title: "Local Art Exhibition",
    category: "Design",
    submittedDate: "Jul 10, 2025",
    status: "Rejected",
    rejectionReason: "Does not align with our current platform focus.",
  },
];

export default function MyRequests() {
  const [requests] = useState(FAKE_REQUESTS);
  const [search, setSearch] = useState("");

  const filteredRequests = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return requests.filter((req) => 
      req.title.toLowerCase().includes(lowerSearch) ||
      req.category.toLowerCase().includes(lowerSearch)
    );
  }, [search, requests]);

  return (
    <div className="min-h-screen bg-[#F9F9FB] flex flex-col">
      <Navbar />

      <Container as="main" className="flex-1 py-4 md:py-8">
        <PageHeader
          title="My Requests"
          subtitle="Track the status of your event creation requests."
        />

        {requests.length > 0 && (
          <div className="mb-8 lg:mb-10 w-full md:max-w-md">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Search requests by title or category..."
            />
          </div>
        )}

        {requests.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm py-12 mt-8">
            <EmptyState
              icon={<ClipboardList size={32} />}
              title="No requests found"
              description="You haven't submitted any event requests yet."
            />
          </div>
        ) : filteredRequests.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm py-12">
            <EmptyState
              icon={<ClipboardList size={32} />}
              title="No matching requests"
              description="Try adjusting your search criteria."
            />
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500 font-medium">
                Showing{" "}
                <span className="text-gray-900 font-bold">
                  {filteredRequests.length}
                </span>{" "}
                {filteredRequests.length === 1 ? "request" : "requests"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {filteredRequests.map((req) => (
                <RequestCard key={req.id} request={req} />
              ))}
            </div>
          </>
        )}

        <div className="pb-20 md:pb-24" />
      </Container>
    </div>
  );
}
