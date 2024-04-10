import { useParams } from "react-router-dom";
export default function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>이벤트 상세페이지</h1>
      <p>이벤트 아이디: {params.eventId}</p>
    </>
  );
}
