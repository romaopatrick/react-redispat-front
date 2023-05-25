import { Route, Routes } from "react-router-dom"
import { RedisValuePage } from "./pages/RedisValuePage/RedisValuePage"
import { RedisValueEmptyState } from "./pages/RedisValuePage/components/RedisValueEmptyState/RedisValueEmptyState"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/:k" element={<RedisValuePage />}></Route>
            <Route path="*" element={<RedisValueEmptyState />}></Route>
        </Routes>
    )
}