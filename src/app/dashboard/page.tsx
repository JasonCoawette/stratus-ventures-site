import TotalUsersCard from "@/components/cards/TotalUsersCard";

export default function Dashboard() {

    return (
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
    );
}