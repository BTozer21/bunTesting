import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";
import "./index.css";

export function About() {
  return (
    <div className="container flex flex-row mx-auto p-8 items-center justify-center text-center relative z-10 h-[calc(100vh-4rem)]">
	   <Card className="mx-auto w-[650px] hover:cursor-pointer hover:shadow-md hover:scale-105 transition-all duration-300">
		   <Link to="/battersea">
			<CardHeader className="gap-4 justify-center">
				<img className="rounded-sm object-cover w-[600px] h-[400px]" src="https://retail-focus.co.uk/wp-content/uploads/2022/10/The-opening-of-Battersea-Power-Station-and-Electric-Boulevard-c-Charlie-Round-Turner-scaled.jpg" alt="Battersea" />
			  <CardTitle className="text-3xl font-bold text-left">Battersea</CardTitle>
			</CardHeader>
			</Link>
	  </Card>
	   <Card className="mx-auto w-[650px] hover:cursor-pointer hover:shadow-md hover:scale-105 transition-all duration-300">
		   <Link to="/covent-garden">
			<CardHeader className="gap-4 justify-center">
				<img className="rounded-sm object-cover w-[600px] h-[400px]" src="https://d2gfhx6otln0v7.cloudfront.net/media/images/CoventGarden.jpeg" alt="Covent Garden" />
			  <CardTitle className="text-3xl font-bold text-left">Covent Garden</CardTitle>
			</CardHeader>
			</Link>
	  </Card>
    </div>
  );
}

export default About;
