import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2 } from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import { CATEGORIES } from "../constants/eventsData";

const formCategories = CATEGORIES.filter((c) => c !== "All");

export default function Requests() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      title: "",
      description: "",
      category: "",
      location: "",
      date: "",
      time: "",
      capacity: "",
      image: "",
    },
  });

  const onSubmit = (data) => {
    // Fake submission
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsSuccess(true);
        reset();
        resolve();
      }, 800);
    });
  };

  return (
    <div className="min-h-screen bg-[#F9F9FB] flex flex-col">
      <Navbar />

      <Container as="main" className="flex-1 py-4 md:py-8 flex flex-col items-center">
        <div className="w-full max-w-2xl">
          <PageHeader
            title="Request New Event"
            subtitle="Submit a proposal for a new event to be hosted."
          />

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 mt-6">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
                <p className="text-gray-500 mb-8 max-w-md">
                  Your event request has been successfully submitted and is pending review. We will notify you once it's approved.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-primary text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Title */}
                  <div className="md:col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Event Title</label>
                    <input
                      type="text"
                      placeholder="e.g., Tech Innovators Conference"
                      className={`w-full rounded-xl border bg-gray-50/50 px-4 py-3 outline-none transition-all duration-200 ${
                        errors.title
                          ? "border-red-500 focus:ring-2 focus:ring-red-500"
                          : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      }`}
                      {...register("title", { required: "Event title is required" })}
                    />
                    {errors.title && (
                      <p className="mt-1.5 text-red-500 text-xs">{errors.title.message}</p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                    <textarea
                      placeholder="Provide a detailed description of the event..."
                      rows={4}
                      className={`w-full rounded-xl border bg-gray-50/50 px-4 py-3 outline-none transition-all duration-200 resize-none ${
                        errors.description
                          ? "border-red-500 focus:ring-2 focus:ring-red-500"
                          : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      }`}
                      {...register("description", { required: "Description is required" })}
                    />
                    {errors.description && (
                      <p className="mt-1.5 text-red-500 text-xs">{errors.description.message}</p>
                    )}
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                    <select
                      className={`w-full rounded-xl border bg-gray-50/50 px-4 py-3 outline-none transition-all duration-200 ${
                        errors.category
                          ? "border-red-500 focus:ring-2 focus:ring-red-500"
                          : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      }`}
                      {...register("category", { required: "Category is required" })}
                    >
                      <option value="">Select a category</option>
                      {formCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="mt-1.5 text-red-500 text-xs">{errors.category.message}</p>
                    )}
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Location</label>
                    <input
                      type="text"
                      placeholder="e.g., Virtual, New York"
                      className={`w-full rounded-xl border bg-gray-50/50 px-4 py-3 outline-none transition-all duration-200 ${
                        errors.location
                          ? "border-red-500 focus:ring-2 focus:ring-red-500"
                          : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      }`}
                      {...register("location", { required: "Location is required" })}
                    />
                    {errors.location && (
                      <p className="mt-1.5 text-red-500 text-xs">{errors.location.message}</p>
                    )}
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Date</label>
                    <input
                      type="date"
                      className={`w-full rounded-xl border bg-gray-50/50 px-4 py-3 outline-none transition-all duration-200 ${
                        errors.date
                          ? "border-red-500 focus:ring-2 focus:ring-red-500"
                          : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      }`}
                      {...register("date", { required: "Date is required" })}
                    />
                    {errors.date && (
                      <p className="mt-1.5 text-red-500 text-xs">{errors.date.message}</p>
                    )}
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Time</label>
                    <input
                      type="time"
                      className={`w-full rounded-xl border bg-gray-50/50 px-4 py-3 outline-none transition-all duration-200 ${
                        errors.time
                          ? "border-red-500 focus:ring-2 focus:ring-red-500"
                          : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      }`}
                      {...register("time", { required: "Time is required" })}
                    />
                    {errors.time && (
                      <p className="mt-1.5 text-red-500 text-xs">{errors.time.message}</p>
                    )}
                  </div>

                  {/* Capacity */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Capacity</label>
                    <input
                      type="number"
                      placeholder="e.g., 100"
                      className={`w-full rounded-xl border bg-gray-50/50 px-4 py-3 outline-none transition-all duration-200 ${
                        errors.capacity
                          ? "border-red-500 focus:ring-2 focus:ring-red-500"
                          : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      }`}
                      {...register("capacity", {
                        required: "Capacity is required",
                        valueAsNumber: true,
                        min: { value: 1, message: "Capacity must be a positive number" },
                      })}
                    />
                    {errors.capacity && (
                      <p className="mt-1.5 text-red-500 text-xs">{errors.capacity.message}</p>
                    )}
                  </div>

                  {/* Image URL */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Image URL</label>
                    <input
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      className={`w-full rounded-xl border bg-gray-50/50 px-4 py-3 outline-none transition-all duration-200 ${
                        errors.image
                          ? "border-red-500 focus:ring-2 focus:ring-red-500"
                          : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      }`}
                      {...register("image", { required: "Image URL is required" })}
                    />
                    {errors.image && (
                      <p className="mt-1.5 text-red-500 text-xs">{errors.image.message}</p>
                    )}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-primary py-3.5 text-white font-semibold transition-all duration-300 hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
                  >
                    {isSubmitting ? "Submitting Request..." : "Submit Event Request"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
