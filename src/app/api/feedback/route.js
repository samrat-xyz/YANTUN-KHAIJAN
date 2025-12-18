import { connect } from "@/app/lib/dbConnect";

export async function GET(req) {
  const feedbackCollection = await connect("feedbacks");
  const result = await feedbackCollection.find().toArray();
  return Response.json(result);
}
export async function POST(req) {
  const data = await req.json();
  const newFeedBack = {
    ...data,
    createdAt: new Date().toISOString(),
  };

  const feedbackCollection = await connect("feedbacks");
  await feedbackCollection.insertOne(newFeedBack);

  return Response.json(newFeedBack);
}
