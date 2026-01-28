import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wine, Pizza } from "lucide-react";
import "./index.css";
import { toast } from "sonner";

export function CoventGarden() {
  const [isLoading, setIsLoading] = useState(false);

  const handleRequest = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/dates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location: 'Covent Garden',
		  establishment: 'Rossopomodoro',
          date: '2025-01-31'
        })
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('Love a Rosso\'s don\'t we!', {position: "top-center"});
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
        <CardHeader className="gap-2">
			<img className="rounded-sm h-[400px] w-[600px] object-cover" src="https://nmgprod.s3.amazonaws.com/media/file/cd/87/5ed3d240ac21844a88e11476c81b/cover_image__VnRITupB__pizza1.jpg.960x540_q85_crop_upscale.jpg" />
          <CardTitle className="text-3xl font-bold text-left">Rossopomodoro</CardTitle>
		  <CardDescription className="text-2xl font-semibold text-left">Saturday 31st Jan</CardDescription>
        </CardHeader>
		<CardContent className="flex flex-col">
			<div className="flex flex-row gap-2 mb-8">
				<div className="w-[100px] shadow-xs hover:shadow-md transition-all duration-300 shadow-red-500 flex flex-row rounded-xl border-2 p-3 text-center justify-center gap-2">
					<Wine />
					Wine
				</div>
				<div className="w=[100px] shadow-xs hover:shadow-md transition-all duration-300 shadow-red-500 flex flex-row rounded-xl border-2 p-3 text-center justify-center gap-2">
					<Pizza />
					Pizza
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

export default CoventGarden;
