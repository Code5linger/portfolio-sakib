'use client';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import FancyButon from '@/components/ui/fancy-button';
import Input from '@/components/ui/input';
import LiveClock from '@/components/ui/live-clock';
import Profile from '@/components/ui/profile';
import ScrollDown from '@/components/ui/scroll-down';
import TextArea from '@/components/ui/text-area';
import MagnetciWrapper from '@/components/visualEffects/magnetic-wrapper';
// import WaterWaveWrapper from '@/components/visualEffects/waterWaveWrapper';
import dynamic from 'next/dynamic';
const WaterWaveWrapper = dynamic(
  () => import('../components/visualEffects/waterWaveWrapper'),
  { ssr: false }
);

import { FaArrowRight, FaUser } from 'react-icons/fa';

import { GoHomeFill } from 'react-icons/go';

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius={3}
      perturbance={3}
      resolution={2048}
    >
      {() => (
        <div className="h-screen w-full p-10">
          <div className="max-w-2xl mx-auto">
            <Card title="UI component">
              <div className="grid grid-cols-4">
                <Button>Basic Button</Button>
                <Button>
                  <GoHomeFill />
                  Basic Button
                </Button>
                <Button isIcon>
                  <FaUser />
                </Button>
                <Button link="https://www.google.com/">Google</Button>
              </div>
              {/* Input */}
              <Input name="fullName1" type="text" placeholder="Full Name" />
              <Input
                name="fullName2"
                type="text"
                placeholder="Full Name"
                icon={<FaUser />}
              />
              <TextArea name="bio1" placeholder="Full Name" />
              <TextArea name="bio2" placeholder="Full Name" icon={<FaUser />} />
              {/* Profile */}
              <Profile />
              {/* Fancy Button */}
              <MagnetciWrapper className="w-[300px]">
                <FancyButon
                  text="Contact Us"
                  icon={<FaArrowRight />}
                ></FancyButon>
              </MagnetciWrapper>
              <FancyButon
                text="Contact Us"
                icon={<FaArrowRight />}
              ></FancyButon>
              {/* Live Clock */}
              <LiveClock timeZone="Asia/Dhaka" />
              {/* Scroll Down */}
              <MagnetciWrapper className="">
                <ScrollDown />
              </MagnetciWrapper>
            </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
