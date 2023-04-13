import Navigation from "@/components/navigation/Navigation";
import { FC } from "react";

const Users: FC = () => {
    return (
        <>
            <div className="h-screen">
                <Navigation />
                <div className="h-3/4 flex justify-center items-center tx-xl">Пользователи</div>
            </div>
        </>
    )
}

export default Users