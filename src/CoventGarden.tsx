import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wine, Pizza } from "lucide-react";
import { DateSubmission } from "./components/DateSubmission";
import "./index.css";

export function CoventGarden() {
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
			<DateSubmission
				location="Covent Garden"
				establishment="Rossopomodoro"
				date="2025-01-31"
			/>
		</CardContent>
      </Card>
    </div>
  );
}

export default CoventGarden;
