import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "../ui/card";

import { luckyColor, prayersMockData } from "@/mocks/StudentProfileMockData";

import React from "react";

const Prayer: React.FC = () => {
  return (
    <>
      <span className="text-2xl font-bold">Enhance your luck</span>
      <div className="m-2 flex justify-center">
        <Carousel className="w-full">
          <CarouselContent>
            {prayersMockData.map((value, idx) => (
              <CarouselItem key={idx}>
                <div className="">
                  <Card className="bg-gray-300">
                    <CardContent className="flex flex-col items-center justify-center">
                      {value.map((txt, iidx) => (
                        <div key={`${idx}_${iidx}`} className="m-1">
                          {txt}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 border-black" />
          <CarouselNext className="absolute right-0 border-black" />
        </Carousel>
      </div>
    </>
  );
};

const LuckyColor: React.FC = () => {
  return (
    <div>
      <span className="text-2xl font-bold">Today's Lucky Color</span>
      <div className="m-2 flex justify-center">
        <Carousel className="w-full">
          <CarouselContent>
            {luckyColor.map(({ colorType, colors }, idx) => (
              <CarouselItem key={idx}>
                <div className="">
                  <Card className="bg-gray-300">
                    <CardContent className="flex flex-col items-center justify-center p-0 py-0">
                      <span className="text-xl font-semibold">{colorType}</span>
                      <div className="flex h-full w-full flex-row">
                        {colors.map((col, iidx) => (
                          <div
                            className="h-40 flex-1/2"
                            key={`${idx}_${iidx}`}
                            style={{ backgroundColor: col }}
                          ></div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 border-black" />
          <CarouselNext className="absolute right-0 border-black" />
        </Carousel>
      </div>
    </div>
  );
};

const ProfileLuck: React.FC = () => {
  return (
    <>
      <Prayer />
      <LuckyColor />
    </>
  );
};

export default ProfileLuck;
