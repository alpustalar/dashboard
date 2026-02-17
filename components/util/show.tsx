import React from "react";

type Props = {
  children: Readonly<React.ReactNode>;
};
export const Show = ({ children }: Props) => {
  let when: React.ReactNode = null;
  let otherwise: React.ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.props.isTrue !== undefined) {
        if (child.props.isTrue && !when) {
          when = child;
        }
      } else if (!otherwise) {
        otherwise = child;
      }
    }
  });

  return when || otherwise;
};

const ShowWhen = ({
  isTrue,
  children,
}: {
  isTrue: boolean;
  children: React.ReactNode;
}) => (isTrue ? <>{children}</> : null);

ShowWhen.displayName = "Show.When";
Show.When = ShowWhen;

const ShowElse = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

ShowElse.displayName = "Show.Else";
Show.Else = ShowElse;
