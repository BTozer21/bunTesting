import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupInput, InputGroupAddon, InputGroupText } from "@/components/ui/input-group";
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import type { DateEntry } from "@/types/dates";

export function DateRetriever() {
  const [isLoading, setIsLoading] = useState(false);
  const [dates, setDates] = useState<DateEntry[]>([]);

  const handleRequest = async (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();

	const formData = new FormData(e.currentTarget);
	const phoneNumber = formData.get("phoneNumber") as string;

	if (phoneNumber !== "7812077217") {
		toast.error('Erm... you aren\'t Mimi.', {position: "top-center"})
		return;
	};


    setIsLoading(true);
    try {
      const response = await fetch(`/api/dates?phone_number=${phoneNumber}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      if (response.ok) {
		setDates(data);
        toast.success('Here\'s our plans', { position: "top-center" } );
      } else {
        toast.error(`${data.error}`, {position: "top-center"});
      }
    } catch (error) {
      toast.error('Failed to retrieve date', {position: "top-center"});
    } finally {
      setIsLoading(false);
    }
  };

	return(
		<div>
		{dates.length === 0 ? (
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
		) : (
			dates.map((x) => (
				<Card key={x.id} className="shadow-md">
					<CardHeader>
						<CardTitle className="flex flex-row justify-between">
							<div className="text-xl font-bold text-left">
								{x.establishment}
							</div>
							<div>
								{new Date(x.date).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric'})}
							</div>
						</CardTitle>
						<CardDescription className="flex flex-col gap-2 text-left">
							<div className="text-lg font-semibold text-left">
								{x.location}
							</div>
						</CardDescription>
					</CardHeader>
				</Card>
			))
		)}
		</div>
	)
}
