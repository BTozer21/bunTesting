import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function DateSubmission({location, establishment, date}: {
	location: string,
	establishment: string,
	date: string
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleRequest = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/dates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location: location,
		  establishment: establishment,
          date: date
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

  return(
		<Button className="h-12 text-md" onClick={handleRequest} disabled={isLoading}>
			{isLoading ? 'Requesting...' : 'Request'}
		</Button>
	)
}
