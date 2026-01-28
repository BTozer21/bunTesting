import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";
import "./index.css";

export function Dates() {
  return (
    <div className="container flex flex-row mx-auto p-8 items-center justify-center text-center relative z-10 h-[calc(100vh-4rem)]">
	   <Card className="mx-auto w-[650px]">
		<CardHeader className="gap-4 justify-center">
		  <CardTitle className="text-3xl font-bold text-left">Past Dates</CardTitle>
		</CardHeader>
	  </Card>
    </div>
  );
}

export default Dates;
