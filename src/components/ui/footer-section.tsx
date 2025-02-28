"use client";

import * as React from "react";

function Footerdemo() {
  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 pb-12 md:px-6 lg:px-8">
        <div className="mt-6 flex flex-col items-center justify-between gap-4 pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Sprout Recovery. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="/privacy-policy" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="transition-colors hover:text-primary">
              Terms & Conditions
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footerdemo };
