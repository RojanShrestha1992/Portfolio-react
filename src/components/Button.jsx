export const Button = ({
  className,
  size = "default",
  variant = "primary",
  children,
  ...props
}) => {
  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm shadow-primary/20",
    secondary:
      "bg-surface text-secondary-foreground border border-[#e7cfc4] hover:bg-soft-accent",
  };

  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-300";

  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${variants[variant]} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
