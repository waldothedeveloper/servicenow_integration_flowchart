import { Button } from "@/components/ui/button";
import Image from "next/image";
import night from "./night.png";

//
export function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <Image
        alt=""
        src={night}
        className="absolute inset-0 -z-10 size-full object-cover"
        fill
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Choose the Best ServiceNow Integration Pattern
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-50">
              Not sure how to connect ServiceNow with third-party systems?{" "}
              <br />
              We can help you decide.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button>Wizard coming soon...</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
