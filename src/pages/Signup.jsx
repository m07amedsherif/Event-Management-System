import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { signupFunction } from "../services/Authentication";

const signupSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(3, "Name must be at least 3 characters"),

    email: z
      .string()
      .trim()
      .email("Please enter a valid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(50, "Password is too long"),

    confirmPassword: z.string(),

    terms: z.boolean().default(false),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),

    mode: "onSubmit",
    reValidateMode: "onChange",

    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  return (
    <div className="min-h-screen bg-gradientBg3 flex items-center justify-center px-4 py-5">
      <div className="w-full max-w-lg rounded-card bg-card shadow-soft p-6">
        <h1 className="text-h2 text-text text-center mb-2">
          Create Account
        </h1>

        <p className="text-caption text-center text-gray-500 mb-8">
          Sign up to get started
        </p>

        <form
          onSubmit={handleSubmit(signupFunction)}
          className="space-y-6"
        >
          {/* Full Name */}
          <div>
            <label className="block mb-2 text-body text-text">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className={`w-full rounded-card border bg-background px-4 py-3 outline-none transition-all duration-200 ${
                errors.fullName
                  ? "border-error focus:ring-2 focus:ring-error"
                  : "border-muted focus:border-primary focus:ring-2 focus:ring-primary"
              }`}
              {...register("fullName")}
            />

            {errors.fullName && (
              <p className="mt-2 text-error text-micro">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-body text-text">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full rounded-card border bg-background px-4 py-3 outline-none transition-all duration-200 ${
                errors.email
                  ? "border-error focus:ring-2 focus:ring-error"
                  : "border-muted focus:border-primary focus:ring-2 focus:ring-primary"
              }`}
              {...register("email")}
            />

            {errors.email && (
              <p className="mt-2 text-error text-micro">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-body text-text">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className={`w-full rounded-card border bg-background px-4 py-3 outline-none transition-all duration-200 ${
                errors.password
                  ? "border-error focus:ring-2 focus:ring-error"
                  : "border-muted focus:border-primary focus:ring-2 focus:ring-primary"
              }`}
              {...register("password")}
            />

            {errors.password && (
              <p className="mt-2 text-error text-micro">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-body text-text">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className={`w-full rounded-card border bg-background px-4 py-3 outline-none transition-all duration-200 ${
                errors.confirmPassword
                  ? "border-error focus:ring-2 focus:ring-error"
                  : "border-muted focus:border-primary focus:ring-2 focus:ring-primary"
              }`}
              {...register("confirmPassword")}
            />

            {errors.confirmPassword && (
              <p className="mt-2 text-error text-micro">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-card bg-primary py-3 text-body text-textInvert transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {isSubmitting ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-8 text-center text-caption text-text">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary hover:text-secondary transition-colors"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}