import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
    Navbar,
    Feed,
    VideoDetail,
    ChannelDetail,
    SearchFeed
} from './compoments';

function App() {
    return (
        <BrowserRouter>
            <div className="bg-black">
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Feed />} />
                    <Route path="/video/:id" exact element={<VideoDetail />} />
                    <Route path="/channel/:id" exact element={<ChannelDetail />} />
                    <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
