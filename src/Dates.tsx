import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRetriever } from "./components/DateRetriever";
import "./index.css";

export function Dates() {
  return (
    <div className="container flex flex-row mx-auto p-8 items-center justify-center text-center relative z-10 h-[calc(100vh-4rem)]">
	   <Card className="mx-auto w-[650px]">
		<CardHeader className="justify-center">
		  <CardTitle className="text-3xl font-bold text-left">Upcoming Dates</CardTitle>
		</CardHeader>
		<CardContent>
			<DateRetriever />
		</CardContent>
	  </Card>
    </div>
  );
}

export default Dates;
