import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFunction } from "../services/Authentication";

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password is too long"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),

    mode: "onSubmit",
    reValidateMode: "onChange",

    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="bg-red-500 min-h-screen bg-gradientBg3 flex items-center justify-center px-4 py-5">
      <div className="w-full max-w-md bg-card rounded-card shadow-soft p-6">
        <h1 className="text-h2 text-text text-center mb-6">
          Welcome Back
        </h1>

        <p className="text-caption text-gray-500 text-center mb-8">
          Sign in to continue to your account
        </p>

        <form onSubmit={handleSubmit(loginFunction)} className="space-y-6">
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
              <p className="text-error text-micro mt-2">
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
              <p className="text-error text-micro mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-card bg-primary py-3 text-textInvert text-body transition-all duration-300 hover:opacity-90 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-8 flex items-center justify-between text-caption">
          <a
            href="#"
            className="text-primary hover:text-secondary transition-colors"
          >
            Forgot Password?
          </a>

          <p className="text-text">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-primary hover:text-secondary transition-colors"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}