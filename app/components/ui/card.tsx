import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  }

  export function Card({ children }: CardProps) {
    return <div className="p-4 shadow rounded">{children}</div>;
    }