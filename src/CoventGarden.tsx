import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wine, Pizza } from "lucide-react";
import { DateSubmission } from "./components/DateSubmission";
import { Star } from "lucide-react"
import "./index.css";

export function CoventGarden() {
  return (
    <div className="container flex flex-row mx-auto p-8 items-center justify-center text-center relative z-10 h-[calc(100vh-4rem)]">
       <Card className="mx-auto w-[650px]">
        <CardHeader className="gap-2">
			<a className="hover:shadow-lg transition-all duration-300 hover:scale-101" href="https://www.fattoamanopizza.com/wp-content/uploads/2025/09/LONDON-SCREEN.pdf">
				<img className="rounded-sm h-[400px] w-[600px] object-cover" src="https://www.fattoamanopizza.com/wp-content/uploads/2024/10/Locations_CG_FattoaManoPizza-01.jpg" />
			</a>
			<CardTitle className="gap-2">
				<div className="text-3xl font-bold text-left">
					Fatto a Mano
				</div>
				<div className="flex flex-row gap-4 items-center">
					<div className="flex flex-row">
						<Star fill="gold" color="gold"/>
						<Star fill="gold" color="gold"/>
						<Star fill="gold" color="gold"/>
						<Star fill="gold" color="gold"/>
						<Star fill="gold" color="gold"/>
					</div>
					<a className="hover:underline" href="https://www.google.com/search?client=firefox-b-d&hs=PAaU&sca_esv=a675286474cf8d02&sxsrf=ANbL-n72185ypnlz2ktXPBg_Ho2-ml0pXA:1769624036299&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOftKwOFTxOwX9A0qssmO66ufnG5FKTidiMwIPKeygXOO1NVO6SAAJiWz-EFfMY1U0vsWCiYptAB2u40tQk7AuKG6DNobDe9t_ne5FM3Ec94VYcRHTw%3D%3D&q=Fatto+a+Mano+Covent+Garden+Reviews&sa=X&ved=2ahUKEwjcgseg666SAxUKU0EAHZ4PJkMQ0bkNegQIThAH&biw=1464&bih=1186&dpr=1&aic=0">
						<div className="text-xl">
							(1.5k Reviews)
						</div>
					</a>
				</div>
			</CardTitle>
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
			<DateSubmission
				location="Covent Garden"
				establishment="Fatto a Mano"
				date="2026-01-31"
			/>
		</CardContent>
      </Card>
    </div>
  );
}

export default CoventGarden;
