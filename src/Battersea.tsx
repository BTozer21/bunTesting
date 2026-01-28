import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Martini, Hamburger } from "lucide-react";
import { DateSubmission } from "./components/DateSubmission";
import { Star } from "lucide-react";
import "./index.css";

export function Battersea() {
  return (
    <div className="container flex flex-row mx-auto p-8 items-center justify-center text-center relative z-10 h-[calc(100vh-4rem)]">
       <Card className="mx-auto w-[650px]">
        <CardHeader className="gap-4">
			<a className="hover:shadow-lg transition-all duration-300 hover:scale-101" href="https://www.gordonramsayrestaurants.com/assets/Uploads/MenuPDFImage/pdf-preview-BSK-BATTERSEA-ALC-WINTER-20260.png">
				<img className="rounded-sm h-[400px] w-[600px] object-cover" src="https://www.gordonramsayrestaurants.com/assets/Uploads/grr-battersea.jpg" />
			</a>
			<CardTitle className="gap-2">
				<div className="text-3xl font-bold text-left">
					Gordon Ramsay Bread Street
				</div>
				<div className="flex flex-row gap-4 items-center">
					<div className="flex flex-row">
						<Star fill="gold" color="gold"/>
						<Star fill="gold" color="gold"/>
						<Star fill="gold" color="gold"/>
						<Star fill="gold" color="gold"/>
					</div>
					<a className="hover:underline" href="https://www.google.com/search?client=firefox-b-d&hs=IAaU&sca_esv=a675286474cf8d02&sxsrf=ANbL-n6dJHX7-olr8MixGwP4b0HU8pJg3g:1769623577507&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUxIBdS4IPzHrPFpw2QU_DKOURCbYGldkAhG9C2dIYfTUddVS4HNqROjbR0QDHOO3LcPu0aQzRcqMswOAHovEiHJ3BMgcFOSMQJAI-6B0GbZ-KWlXs9zDIWUIjZJ1w3waAqkyT0%3D&q=Bread+Street+Kitchen+%26+Bar+-+Battersea+Reviews&sa=X&ved=2ahUKEwiE0eTF6a6SAxW-UUEAHdwZB_sQ0bkNegQIIBAH&biw=1464&bih=1186&dpr=1&aic=0">
						<div className="text-xl">
							(1.6k Reviews)
						</div>
					</a>
				</div>
			</CardTitle>
			<CardDescription className="text-2xl font-semibold text-left">
				Saturday 31st Jan
			</CardDescription>
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
			<DateSubmission
				location="Battersea"
				establishment="Gordon Ramsay Bread Street"
				date="2026-01-31"
			/>
		</CardContent>
      </Card>
    </div>
  );
}

export default Battersea;
