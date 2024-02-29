import React from 'react';
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface StoreCardProps {
  name: string;
  picture: string;
  address: string;
  tags: string[];
}

const StoreCard: React.FC<StoreCardProps> = ({
  name,
  picture,
  address,
  tags,
}) => {
  return (
    <Card className="border-2  p-2 max-w-xs sm:max-w-full bg-secondary/50">
      <CardContent className="pt-4 px-4 pb-2">
        <CardTitle className="py-2 font-bold">{name}</CardTitle>
        <CardDescription>{address}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <Badge key={tag} className="bg-primary-dark">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end py-4 px-4">
        <Button size={'sm'}>Visit</Button>
      </CardFooter>
    </Card>
  );
};

export default StoreCard;