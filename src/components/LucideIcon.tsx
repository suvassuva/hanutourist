import React from 'react';
import { 
  Plane, MapPin, Car, Briefcase, Heart, Landmark, CalendarDays, CheckCircle, Smile, HelpCircle
} from 'lucide-react';

interface IconProps extends React.ComponentProps<typeof HelpCircle> {
  name: string;
}

export default function LucideIcon({ name, ...props }: IconProps) {
  const IconComponent = (() => {
    switch (name) {
      case 'PlaneLanding':
      case 'PlaneTakeoff':
        return Plane;
      case 'MapPin':
        return MapPin;
      case 'Car':
        return Car;
      case 'Briefcase':
        return Briefcase;
      case 'Heart':
        return Heart;
      case 'Landmark':
        return Landmark;
      case 'CalendarDays':
        return CalendarDays;
      case 'CheckCircle':
        return CheckCircle;
      case 'Smile':
        return Smile;
      default:
        return HelpCircle;
    }
  })();

  return <IconComponent {...props} />;
}
