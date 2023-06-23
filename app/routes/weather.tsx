import { ActionArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader() {
  const result = await fetch('https://goweather.herokuapp.com/weather/Edmonton');
  return result;
}

export default function Weather() {
  const data = useLoaderData<typeof loader>();

  return <div>Weather: {data.temperature}</div>;
}
