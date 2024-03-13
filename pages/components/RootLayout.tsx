"use client";
import React from "react";
import { useState, useEffect } from "react";
import Loader from "./common/Loader";
import Navbar from "./Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      setTimeout(() => setLoading(false), 1000);
    }, []);
  
    return (
          <>
            {loading ? (
              <Loader />
            ) : (
              <>
              <Navbar />
              <div className="flex overflow-hidden">
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                  <main>
                    <div className="mx-auto">
                      {children}
                    </div>
                  </main>
                </div>
              </div>
              </>
            )}
          </>
    );
  }
