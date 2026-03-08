import { cn } from "@/lib/utils";

const SectionTop = ({
  titleTop,
  titleBottom,
  description,
  className,
  position = "left",
}: {
  titleTop: string;
  titleBottom: string;
  description: string;
  className?: string;
  position?: "left" | "center" | "right";
}) => {
  return (
    <div
      className={cn(
        "max-w-2xl",
        position === "center" && "mx-auto text-center",
        position === "right" && "ml-auto text-right",
        position === "left" && "text-left",
        className,
      )}
    >
      <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
        {titleTop}
        <br />
        <span className="text-muted-foreground">{titleBottom}</span>
      </h2>

      <p className="mt-4 text-sm text-subtle sm:text-base">{description}</p>
    </div>
  );
};

export default SectionTop;
