"use client";
import { useTheme } from "next-themes";
import { Toggle } from "./toggle";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(function () {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div suppressHydrationWarning={true}>
      <Toggle
        variant="outline"
        onPressedChange={() => setTheme(theme === "light" ? "dark" : "light")}
        pressed={theme === "dark"}
        className="group size-9 rounded-none transition-none data-[state=on]:bg-transparent"
      >
        {theme === "dark" ? (
          <>
            <Sun
              size={16}
              strokeWidth={2}
              className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
              aria-hidden="true"
            />
            <Moon
              size={16}
              strokeWidth={2}
              className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
              aria-hidden="true"
            />
          </>
        ) : (
          <>
            <Moon
              size={16}
              strokeWidth={2}
              className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
              aria-hidden="true"
            />
            <Sun
              size={16}
              strokeWidth={2}
              className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
              aria-hidden="true"
            />
          </>
        )}
      </Toggle>
    </div>
  );
}
