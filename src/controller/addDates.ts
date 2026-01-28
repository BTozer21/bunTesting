import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function addDateHandler (req: Request) {
	const input = await req.json();

	const { data, error } = await supabase.from('dates').insert(input);

	if (error) {
		return Response.json({error: error.message}, { status: 400});
	}

	return Response.json(data);
}
