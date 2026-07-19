import { Calendar, AlertCircle, Clock, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Badge from "../common/Badge";
import Button from "../common/Button";

const STATUS_CONFIG = {
  Pending: {
    variant: "warning",
    icon: Clock,
  },
  Approved: {
    variant: "success",
    icon: CheckCircle,
  },
  Rejected: {
    variant: "error",
    icon: AlertCircle,
  },
};

export default function RequestCard({ request }) {
  const {
    id,
    title,
    category,
    submittedDate,
    status,
    rejectionReason,
    eventId,
  } = request;
  
  const navigate = useNavigate();
  const StatusIcon = STATUS_CONFIG[status]?.icon || Clock;

  return (
    <article className="flex flex-col bg-white rounded-2xl border border-gray-200/75 shadow-sm hover:shadow-md transition-all duration-300 ease-out p-6">
      <div className="flex justify-between items-start mb-4 gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-gray-500 font-medium">{category}</p>
        </div>
        <Badge
          label={status}
          variant={STATUS_CONFIG[status]?.variant || "default"}
        />
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Calendar size={16} className="text-gray-400" />
        <span>Submitted on {submittedDate}</span>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3 min-h-[4rem] justify-center">
        {status === "Pending" && (
          <div className="flex items-center gap-2 text-sm font-medium text-amber-600">
            <StatusIcon size={18} />
            <span>Waiting for admin review</span>
          </div>
        )}

        {status === "Rejected" && (
          <div className="flex items-start gap-2 text-sm bg-red-50 p-3 rounded-xl border border-red-100">
            <StatusIcon size={18} className="text-red-500 shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="font-semibold text-red-800">Request Rejected</span>
              <span className="text-red-600">{rejectionReason}</span>
            </div>
          </div>
        )}

        {status === "Approved" && (
          <Button
            variant="primary"
            fullWidth
            onClick={() => navigate(`/events/${eventId}`)}
          >
            View Event
          </Button>
        )}
      </div>
    </article>
  );
}
