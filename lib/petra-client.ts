import TeamMember from "@/components/interfaces/TeamMember.interface"

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`/api/petra/${path}`, init)
  const payload = await response.json().catch(() => ({}))
  if (!response.ok) {
    const message = payload?.error || `Request failed (${response.status})`
    throw new Error(message)
  }
  return payload as T
}

export function getPetraTeamClient() {
  return request<TeamMember[]>("team")
}

export function submitPetraFormClient(
  form: "contact" | "prequalification",
  values: Record<string, unknown>
) {
  return request(`forms/${form}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  })
}
