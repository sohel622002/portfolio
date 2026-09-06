import type { TechStackIcon as TechStackIconType } from "@/lib/data/tech-stack";

type TechStackIconProps = {
  icon: TechStackIconType;
};

export default function TechStackIcon({ icon }: TechStackIconProps) {
  const padding = icon.padding ?? "p-7";

  return (
    <div
      className={`relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl ${padding} bg-card border border-border/70 shadow-(--shadow-soft)`}
    >
      <img
        src={icon.src}
        alt={icon.label}
        className="h-full w-full object-contain"
        loading="lazy"
        draggable={false}
      />
    </div>
  );
}
