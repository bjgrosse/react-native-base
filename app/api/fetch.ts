import supabase from "@/supabaseClient";
type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
  method?: RequestMethod;
  body?: any;
  headers?: Record<string, string>;
}

export async function makeApiRequest<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const {
    data: { session },
    error: authError,
  } = await supabase.auth.getSession();

  if (authError || !session) {
    throw new Error("Authentication required");
  }

  const baseUrl = process.env.EXPO_PUBLIC_BACKEND_URL;
  const url = `${baseUrl}/api${endpoint}`;
  console.log("url", url, options);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session.access_token}`,
    ...options.headers,
  };

  try {
    const response = await fetch(url, {
      method: options.method || "GET",
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!response.ok) {
      console.log(response);
      console.log(await response.text());
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    console.error("API request error:", error);
    throw error;
  }
}
