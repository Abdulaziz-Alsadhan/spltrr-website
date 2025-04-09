import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Partner from "@/pages/Partner";
import CaseStudy from "@/pages/CaseStudy";
import Contact from "@/pages/Contact";
import Checkout from "@/pages/Checkout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "./hooks/useLanguage";

function Router() {
  const [location] = useLocation();
  const isHomePage = location === '/';
  const isCheckoutPage = location === '/checkout';
  
  return (
    <div className="min-h-screen flex flex-col">
      {!isCheckoutPage && <Header />}
      <main className={`flex-grow w-full ${!isHomePage && !isCheckoutPage ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8' : ''}`}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/partner" component={Partner} />
          <Route path="/project/:slug" component={CaseStudy} />
          <Route path="/contact" component={Contact} />
          <Route path="/checkout" component={Checkout} />
          <Route component={NotFound} />
        </Switch>
      </main>
      {!isCheckoutPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Router />
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
