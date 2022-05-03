import { useState } from "react";

interface UseMutaionState<T> {
  loading: boolean;
  data?: T;
  error?: object;
}
type UseMutationResult<T> = [(data: any) => void, UseMutaionState<T>];
export default function useMutation<T = any>(
  url: string
): UseMutationResult<T> {
  const [state, setState] = useState<UseMutaionState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  function mutation(data: any) {
    setState((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((data) =>
        setState((prev) => ({
          ...prev,
          data,
          loading: false,
        }))
      )
      .catch((error) =>
        setState((prev) => ({ ...prev, error, loading: false }))
      );
  }
  return [mutation, { ...state }];
}
