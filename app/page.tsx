'use client';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import Input from '@/components/ui/input';
import TextArea from '@/components/ui/text-area';
import WaterWaveWrapper from '@/components/visualEffects/waterWaveWrapper';
import { FaUser } from 'react-icons/fa';

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
            </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
