import { SearchProvider } from './src/context/searchContext';
import RootNavigation from './src/navigation/RootNavigatior';

export default function App() {
  return (
    <SearchProvider>
      <RootNavigation />
    </SearchProvider>
  );
}
