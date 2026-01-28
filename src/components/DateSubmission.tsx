import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupInput, InputGroupAddon, InputGroupText } from "@/components/ui/input-group";
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field";
import { toast } from "sonner";

export function DateSubmission({location, establishment, date}: {
	location: string,
	establishment: string,
	date: string
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleRequest = async (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();

	const formData = new FormData(e.currentTarget);
	const phoneNumber = formData.get("phoneNumber") as string;

	if (phoneNumber !== "7585112782") {
		toast.error('Erm... you aren\'t Mimi.')
		return;
	};


    setIsLoading(true);
    try {
      const response = await fetch('/api/dates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location: location,
		  establishment: establishment,
          date: date,
		  phone_number: phoneNumber
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
		<form onSubmit={handleRequest} className="flex flex-col gap-4">
			<div>
				<Field className="w-64">
					<FieldLabel htmlFor="phoneNumber">
						Phone Number <span className="text-destructive">*</span>
					</FieldLabel>
					<InputGroup>
						<InputGroupInput id="phoneNumber" name="phoneNumber" type="tel" placeholder="7448344837" required/>
						<InputGroupAddon>
							<InputGroupText>+44 </InputGroupText>
						</InputGroupAddon>
					</InputGroup>
					<FieldDescription className='text-left'>
						Want to check you are Mimi.
					</FieldDescription>
				</Field>
			</div>
			<Button type="submit" className="h-12 text-md w-full" disabled={isLoading}>
				{isLoading ? 'Requesting...' : 'Request'}
			</Button>
		</form>
	)
}
