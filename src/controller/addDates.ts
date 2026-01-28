import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function addDateHandler (req: Request) {
	const input = await req.json();

	const { count: existingDate, error: err} = await supabase
		.from('dates')
		.select('*', { count: 'exact', head: true})
		.eq('phone_number', input.phone_number)
		.eq('date', input.date)
	
	if (err) {
		return Response.json({error: err.message}, { status: 400})
	}

	if (existingDate && existingDate >= 1) {
		return Response.json({error: `We can't do two dates in one evening`}, { status: 400 })
	}

	const { data, error } = await supabase.from('dates').insert(input);

	if (error) {
		return Response.json({error: error.message}, { status: 400});
	}

	return Response.json(data);
}
