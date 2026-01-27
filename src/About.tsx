import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import "./index.css";

export function About() {
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
       <Card className="mx-auto w-[650px]">
        <CardHeader className="gap-4 justify-center">
			<img className="rounded-sm" src="https://magazine.luxus-plus.com/wp-content/uploads/2024/11/Battersea-Power-Station-Aerial-High-Level-Photography-1600x1067-1.jpg" width={600} height={400} alt="Battersea" />
          <CardTitle className="text-3xl font-bold text-left">Battersea</CardTitle>
          <CardDescription>
			Gordon Ramsay's
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export default About;
