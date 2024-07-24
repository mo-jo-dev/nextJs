import React from "react";
import Link from "next/link";

export default function BlogLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            BlogLayout
            <Link href="/">
                Click to go to Home Page
            </Link>
            <br />
            {children}
        </div>
    );
  }