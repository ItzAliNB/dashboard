import React from 'react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const UsageCard = ({ title, description, action, footer }) => {
  return (
    <div className="w-full max-w-[400px] mx-auto">
      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg md:text-xl">{title}</CardTitle>
          <CardDescription className="text-sm sm:text-base">{description}</CardDescription>
          <CardAction className="text-lg sm:text-xl md:text-2xl">{action}</CardAction>
        </CardHeader>
        <div className="px-4 sm:px-6">
          <Progress value={0} className="h-2 sm:h-3" />
        </div>
        <CardFooter className="p-4 sm:p-6">
          <p className="text-sm sm:text-base">{footer}</p>
        </CardFooter>
      </Card>
    </div>
  );
};