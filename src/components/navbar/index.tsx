import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./nav-sheet";
import { ModeToggle } from "../ui/mode-toggle";

export const NavbarComponent = () => {
  return (
    <div className="">
      <nav className="fixed top-4 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full z-20">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <div className="flex items-center justify-center">
            <Logo className="w-auto h-12" />
            <h2 className="text-xl font-bold">Global Talent Portal</h2>
          </div>

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <ModeToggle />
            <Button className="rounded-full">Get Started</Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
