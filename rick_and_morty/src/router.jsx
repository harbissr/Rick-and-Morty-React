import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import EpisodeGuide from "./pages/EpisodeGuide";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                index: "episodeGuide",
                element: <EpisodeGuide />,
            }
        ],
        errorElement: <NotFound />,
    },
]);

export default router;