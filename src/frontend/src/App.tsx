import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AdminPage from './pages/AdminPage';
import DebugLeadsPage from './pages/DebugLeadsPage';

// Create root route with layout
const rootRoute = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex-1 pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  ),
});

// Create index route (landing page)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LandingPage,
});

// Create admin route
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: AdminPage,
});

// Create debug leads route
const debugLeadsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/debug-leads',
  component: DebugLeadsPage,
});

// Create router with route tree
const routeTree = rootRoute.addChildren([indexRoute, adminRoute, debugLeadsRoute]);
const router = createRouter({ routeTree });

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
