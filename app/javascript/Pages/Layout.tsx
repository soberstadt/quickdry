import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Page, PageProps } from "@inertiajs/inertia";
import Alert from "../Components/Alert";

interface propsInterface extends Page<PageProps> {
  props: {
    flash: {
      message: string;
    };
    errors: any;
  };
}

export default function Layout({ children }) {
  const { flash } = usePage<propsInterface>().props;
  const [flashState, setFlashState] = useState(undefined);
  useEffect(() => setFlashState(flash.message), [flash]);

  return (
    <main className="h-full flex flex-col bg-gray-20 text-gray-700 dark:bg-gray-700 dark:text-gray-50">
      <header className="border-b-2 border-solid border-gray-200 dark:border-gray-600">
        <div className="w-full max-w-screen-lg mx-auto p-2">
          <span className="font-bold font-mono">QuickDry</span>
        </div>
      </header>
      <div className="flex flex-grow w-full max-w-screen-lg mx-auto">
        {flashState && (
          <Alert
            message={flashState}
            onDismiss={() => setFlashState(undefined)}
          ></Alert>
        )}

        {children}
      </div>
    </main>
  );
}
