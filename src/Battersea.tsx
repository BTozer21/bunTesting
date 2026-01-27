import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "./index.css";

export function Battersea() {
  return (
    <div className="container flex flex-row mx-auto p-8 items-center justify-center text-center relative z-10 h-[calc(100vh-4rem)]">
       <Card className="mx-auto w-[650px]">
        <CardHeader className="gap-4">
			<img className="rounded-sm h-[400px] w-[600px] object-cover" src="https://www.gordonramsayrestaurants.com/assets/Uploads/grr-battersea.jpg" />
          <CardTitle className="text-3xl font-bold text-left">Gordon Ramsay Bread Street</CardTitle>
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

export default Battersea;
