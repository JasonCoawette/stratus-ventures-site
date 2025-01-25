"use client";

import TotalUsersCard from "@/components/cards/TotalUsersCard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Dashboard() {

    return (
        <QueryClientProvider client={queryClient}>
            <main
                className="
                    relative flex flex-col
                    w-full h-full
                    justify-center items-center
                    p-4
                "
            >
                <TotalUsersCard />
            </main>
        </QueryClientProvider>
    );
}