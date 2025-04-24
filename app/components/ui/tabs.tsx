import { ReactNode } from "react";

type TabsProps = {
  children: ReactNode;
  };

  export function Tabs({ children }: TabsProps) {
    return <div className="tabs">{children}</div>;
    }

    export function TabsList({ children }: TabsProps) {
      return <div className="tabs-list">{children}</div>;
      }

      type TabsTriggerProps = {
        children: ReactNode;
          onClick?: () => void;
          };

          export function TabsTrigger({ children, onClick }: TabsTriggerProps) {
            return <button onClick={onClick} className="tab-trigger">{children}</button>;
            }

            export function TabsContent({ children }: TabsProps) {
              return <div className="tabs-content">{children}</div>;
              }