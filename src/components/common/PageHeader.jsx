export default function PageHeader({ title, subtitle }) {
  return (
    <div className="py-10 md:py-14">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-base md:text-lg text-gray-500 font-normal">
          {subtitle}
        </p>
      )}
      {/* Decorative accent line */}
      <div className="mt-4 flex items-center gap-2" aria-hidden="true">
        <span className="block h-1 w-12 rounded-full bg-primary" />
        <span className="block h-1 w-4 rounded-full bg-primary/30" />
        <span className="block h-1 w-2 rounded-full bg-primary/15" />
      </div>
    </div>
  );
}
