export default async function fetchData<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  const data = await res.json();

  return data as T;
}