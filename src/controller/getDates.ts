import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getDateHandler (req: Request) {
	const url = new URL(req.url);
	const phoneNumber = url.searchParams.get('phone_number')

	const { data, error } = await supabase
		.from('dates')
		.select('*')
		.eq("phone_number", phoneNumber)

	if (error) {
		return Response.json({error: error.message}, { status: 400});
	}

	return Response.json(data);
}
