import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "./index.css";

export function CoventGarden() {
  return (
    <div className="container flex flex-row mx-auto p-8 items-center justify-center text-center relative z-10 h-[calc(100vh-4rem)]">
       <Card className="mx-auto w-[650px]">
        <CardHeader className="gap-4">
			<img className="rounded-sm h-[400px] w-[600px] object-cover" src="https://nmgprod.s3.amazonaws.com/media/file/cd/87/5ed3d240ac21844a88e11476c81b/cover_image__VnRITupB__pizza1.jpg.960x540_q85_crop_upscale.jpg" />
          <CardTitle className="text-3xl font-bold text-left">Rossopomodoro</CardTitle>
		  <CardDescription className="text-2xl font-semibold text-left">Saturday 31st Jan</CardDescription>
        </CardHeader>
		<CardContent>
			<Button>
				Request
			</Button>
		</CardContent>
      </Card>
    </div>
  );
}

export default CoventGarden;
