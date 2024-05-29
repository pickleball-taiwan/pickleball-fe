import Header from './components/Header.jsx';
import Content from './components/Content.jsx';

export default function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header></Header>
            <Content></Content>
        </div>
    );
}
