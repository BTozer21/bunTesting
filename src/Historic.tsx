import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "./index.css";

export function Historic() {
  return (
    <div className="container flex flex-row mx-auto p-8 items-center justify-center text-center relative z-10 h-[calc(100vh-4rem)]">
	   <Card className="mx-auto w-[650px]">
		<CardHeader className="justify-center">
		  <CardTitle className="text-3xl font-bold text-left">Historic Dates</CardTitle>
		</CardHeader>
		<CardContent>
			Maybe go on one first.
		</CardContent>
	  </Card>
    </div>
  );
}

export default Historic;
