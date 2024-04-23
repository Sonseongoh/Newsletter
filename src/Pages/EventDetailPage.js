import { useRouteLoaderData, json } from "react-router-dom";

import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
}

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "상세정보를 가져올 수 없습니다" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
