import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Martini, Hamburger } from "lucide-react";
import { toast } from "sonner";
import "./index.css";

export function Battersea() {
  const [isLoading, setIsLoading] = useState(false);

  const handleRequest = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/dates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location: 'Battersea',
		  establishment: 'Gordon Ramsay Bread Street',
          date: '2025-01-31'
        })
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('Sounds like a plan!', { position: "top-center" } );
      } else {
        toast.error(`Error: ${data.error}`, {position: "top-center"});
      }
    } catch (error) {
      toast.error('Failed to request date', {position: "top-center"});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container flex flex-row mx-auto p-8 items-center justify-center text-center relative z-10 h-[calc(100vh-4rem)]">
       <Card className="mx-auto w-[650px]">
        <CardHeader className="gap-4">
			<img className="rounded-sm h-[400px] w-[600px] object-cover" src="https://www.gordonramsayrestaurants.com/assets/Uploads/grr-battersea.jpg" />
          <CardTitle className="text-3xl font-bold text-left">Gordon Ramsay Bread Street</CardTitle>
		  <CardDescription className="text-2xl font-semibold text-left">Saturday 31st Jan</CardDescription>
        </CardHeader>
		<CardContent className="flex flex-col">
			<div className="flex flex-row gap-2 mb-8">
				<div className="w-fit shadow-xs hover:shadow-md transition-all duration-300 shadow-lime-400 flex flex-row rounded-xl border-2 p-3 text-center justify-center gap-2">
					<Martini />
					Cocktails
				</div>
				<div className="w=[100px] shadow-xs hover:shadow-md transition-all duration-300 shadow-red-500 flex flex-row rounded-xl border-2 p-3 text-center justify-center gap-2">
					<Hamburger />
					Burger
				</div>
			</div>
			<Button className="h-12 text-md" onClick={handleRequest} disabled={isLoading}>
				{isLoading ? 'Requesting...' : 'Request'}
			</Button>
		</CardContent>
      </Card>
    </div>
  );
}

export default Battersea;
